var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	oauth = require('./oauth.js');

app.use(bodyParser.json());
app.use(session({ 
	secret: 'Im sexy and I know it.',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new FacebookStrategy(oauth, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
  	failureRedirect: '/auth/facebook',
  	successRedirect: '/me'
}));

app.get('/me', isLoggedIn, function(req, res){
	res.status(200).json(req.user);
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/auth/facebook');
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/auth/facebook');
	}
}

app.listen('3000', function(){
	console.log('Server Started');
});