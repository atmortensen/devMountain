var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', 'mainService', function($scope, mainService){
	$scope.quotes = mainService.quotes;
	$scope.add = mainService.add;
	$scope.remove = mainService.remove;
}]);

myApp.service('mainService', function(){
	var self = this;

	this.quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	  ];

	this.add = function(text, author){
		if(text && author){
			self.quotes.unshift({text: text, author: author});
		} else {
			console.log('Error.');
		}
		document.getElementById('text').value = '';
		document.getElementById('text').style.height = '';
		document.getElementById('author').value = '';
	};

	this.remove = function(index){
		if(confirm('Are you sure you want to delete this quote?')){
			self.quotes.splice(index, 1);
		} else {
			console.log('Error.');
		}
	};
});