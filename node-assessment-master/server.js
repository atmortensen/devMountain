var ctrl = require('./userCtrl.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/users', function(req, res){
	res.status(200).json(ctrl.readAll());
});

app.get('/api/users/:id', function(req, res){
	res.status(200).json(ctrl.findUserById(req.params.id));
});

app.get('/api/admins', function(req, res){
	res.status(200).json(ctrl.getAdmins());
});

app.get('/api/nonadmins', function(req, res){
	res.status(200).json(ctrl.getNonAdmins());
});

app.put('/api/users/:id', function(req, res){
	res.status(200).json(ctrl.updateUser(req.params.id, req.body));
});

app.post('/api/users', function(req, res){
	res.status(200).json(ctrl.createUser(req.body));
});

app.delete('/api/users/:id', function(req, res){
	res.status(200).json(ctrl.removeUser(req.params.id));
});

module.exports = app;