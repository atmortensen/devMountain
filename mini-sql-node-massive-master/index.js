var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

var connectionString = "postgres://postgres:morty4545@localhost/sandbox";
var client = new pg.Client(connectionString);
client.connect();
var query = client.query('select * from airplanes');
query.on('row', row => { console.log(row); });
query.on('end', function(){ client.end(); });

app.use(bodyParser.json());

app.listen('3000', function(){
  console.log("Server Started!");	
});

