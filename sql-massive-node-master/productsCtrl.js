var app = require('./index'),
	massive = require('massive'),
	connectionString = "postgres://postgres:morty4545@localhost/sandbox",
	massiveInstance = massive.connectSync({connectionString : connectionString}),
	exports = module.exports = {};

app.set('db', massiveInstance);
var db = app.get('db');

exports.findAll = function(req, res){
	db.read_products(function(err, products){
	    if(err){
	    	res.status(200).json({results: err});
	    } else {
	    	res.status(200).json({results: products});
	    }
	});
};

exports.findOne = function(req, res){
	db.read_product(req.params.id, function(err, product){
	    if(err){
	    	res.status(200).json({results: err});
	    } else {
	    	res.status(200).json({results: product});
	    }
	});
};

exports.create = function(req, res){
	var values = [req.body.name, req.body.description, req.body.price, req.body.image];
	db.create_product(values, function(err, product){
	    if(err){
	    	res.status(200).json({results: err});
	    } else {
	    	res.status(200).json({results: product});
	    }
	});
};

exports.update = function(req, res){
	var name = req.body.name;
	var description = req.body.description;
	var price = req.body.price;
	var image = req.body.image;
	db.update_product([req.params.id, name, description, price, image], function(err, product){
	    if(err){
	    	res.status(200).json({results: err});
	    } else {
	    	res.status(200).json({results: product});
	    }
	});
};

exports.destroy = function(req, res){
	db.delete_product(req.params.id, function(err, product){
	    if(err){
	    	res.status(200).json({results: err});
	    } else {
	    	res.status(200).json({results: product});
	    }
	});
};