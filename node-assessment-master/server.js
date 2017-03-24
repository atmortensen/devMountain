var ctrl = require('./userCtrl.js');
var express = require('express');
var app = express();

app.get('/api/users', ctrl.readAll);

module.exports = app;