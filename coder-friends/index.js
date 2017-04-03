var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport'),
	ghStrategy = require('passport-github2'),
	axios = require('axios'),
	cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// PASSPORT SETUP
app.use(session({ 
	secret: 'Im sexy and I know it.',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new ghStrategy({
  clientID: 'd31aa373f1e2c3bc2522',
  clientSecret: '064a211cafb37916d41d1fb4eeb660eddd981e3f',
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// ROUTES
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/home' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect('/friends');
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/home');
});

app.get('/api/github/following', isLoggedIn, function(req, res){
	axios.get('https://api.github.com/'+req.user.username+'/username/followers')
	.then(function(response){
		res.status(200).json(response);
	});
});

app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/home');
	}
}

app.listen('3000', function(){
	console.log('Server Started');
});