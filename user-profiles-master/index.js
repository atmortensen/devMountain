var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // cors = require('cors'),
    session = require('express-session'),
    config = require('./config.js'),
    users = require('./usersCtrl.js'),
    profiles = require('./profileCtrl.js');


app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(session({ 
	secret: config.sessionSecret,
	resave: true,
	saveUninitialized: true
}));

// var corsOptions = {
// 	orgin: 'http://localhost:3000'
// };

app.post('/api/login', users.login);
app.get('/api/profiles', profiles.getFriendsProfiles);

app.listen(3000, function(){
	console.log('Server started.');
});
