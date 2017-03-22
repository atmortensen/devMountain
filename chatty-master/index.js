var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());


var messages = []
app.get('/messages', function(req, res, next){
	res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
	console.log(req.body)
  messages.push({message: req.body.message, time: moment().format('h:mm a') });
  res.status(200).json({ messages: messages });
});


app.listen(3000, function(){
	console.log('Server Running');
});


