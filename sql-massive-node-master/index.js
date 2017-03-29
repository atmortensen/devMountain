var express = require('express'),
	app = module.exports = express(),
	bodyParser = require('body-parser'),
	productsCtrl = require('./productsCtrl.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/products', productsCtrl.findAll);
app.get('/api/products/:id', productsCtrl.findOne);
app.post('/api/products/', productsCtrl.create);
app.put('/api/products/:id', productsCtrl.update);
app.delete('/api/products/:id', productsCtrl.destroy);

app.delete('/api/products/:id', productsCtrl.destroy);

app.listen('5000', function(){
  console.log("Server Started!");	
});
