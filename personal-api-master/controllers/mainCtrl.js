var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

var exports = module.exports = {};

exports.getName = function(req, res){
	res.status(200).json({ name: user.name });
};

exports.getLocation = function(req, res){
	res.status(200).json({ location: user.location });
};

exports.getOccupations = function(req, res){
	if(req.query.order==='desc'){
		res.status(200).json({ occupations: user.occupations.sort() });
	} else if(req.query.order==='asc'){
		res.status(200).json({ occupations: user.occupations.sort().reverse() });
	}
	res.status(200).json({ occupations: user.occupations });
};

exports.getOccupationsLatest = function(req, res){
	res.status(200).json({ latestOccupation: user.occupations[user.occupations.length-1] });
};

exports.getHobbies = function(req, res){
	res.status(200).json({ hobbies: user.hobbies });
};

exports.getType = function(req, res){
	var type = req.params.type;
	var hobbies = user.hobbies.filter(hobby => hobby.type===type);
	res.status(200).json({ hobbies: hobbies });
};

exports.getFamily = function(req, res){
	res.status(200).json({ family: user.family });
};

exports.getFamilyGender = function(req, res){
	var gender = req.params.type;
	var family = user.family.filter(member => member.gender===gender);
	res.status(200).json({ family: family });
};

exports.getRestaurants = function(req, res){
	res.status(200).json({ restaurants: user.restaurants });
};

exports.getRestaurantsName = function(req, res){
	var name = req.params.name;
	var restaurant = user.restaurants.filter(restaurant => restaurant.name===name);
	res.status(200).json({ restaurants: restaurant});
};

exports.putName = function(req, res){
	user.name = req.body.name;
	res.status(200).json({ name: user.name });
};

exports.putLocation = function(req, res){
	user.location = req.body.location;
	res.status(200).json({ location: user.location });
};

exports.postHobbies = function(req, res){
	user.hobbies.push(req.body.hobby);
	res.status(200).json({ hobbies: user.hobbies });
};

exports.postOccupations = function(req, res){
	user.occupations.push(req.body.occupation);
	res.status(200).json({ occupations: user.occupations });
};

exports.postFamily = function(req, res){
	user.family.push(req.body.familyMember);
	res.status(200).json({ family: user.family });
};

exports.postRestaurants = function(req, res){
	user.restaurants.push(req.body.restaurant);
	res.status(200).json({ restaurants: user.restaurants });
};

exports.getSkillz = function(req, res){
	if(req.query.experience){
		res.status(200).json({ skillz: skillz.skillz.filter(skill=>skill.experience===res.query.experience) });
	} else{
		res.status(200).json({ skillz: skillz.skillz });
	}
};

exports.postSkillz = function(req, res){
	skillz.skillz.push(req.body.skill);
	res.status(200).json({ skillz: skillz.skillz });
};

exports.getSecrets = function(req, res){
	res.status(200).json({ secrets: secrets });
};