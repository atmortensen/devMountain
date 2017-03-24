var users = require('./users.js');
var exports = module.exports;


exports.readAll = function(){
	return users.find();
};

exports.findUserById = function(id){
	return users.findOne('id', id);
};

exports.getAdmins = function(){
	return users.find('type', 'admin');
};

exports.getNonAdmins = function(){
	return users.find('type', 'user');
};

exports.getUsersByFavorite = function(fav){
	return users.find().filter(user => user.favorites.indexOf(fav)!==-1);
};

exports.getUsersByAgeLimit = function(age){
	return users.find().filter(user => user.age<age);
};

exports.findUserByQuery = function(query, value){
	return users.find().filter(user => user[query].toLowerCase() === value.toLowerCase());
};

exports.createUser = function(user){
	return users.add(user);
};

exports.updateUser = function(id, user){
	return users.update('id', id, user);
};

exports.removeUser = function(id){
	return users.remove('id', id);
};