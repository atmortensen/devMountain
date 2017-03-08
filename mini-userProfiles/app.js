var userProfiles = angular.module('userProfiles', []);

userProfiles.controller('MainController', ['$scope', 'mainService', function($scope, mainService){
	$scope.users = mainService.data;
	$scope.toggleFavorite = mainService.toggleFavorite;
}]);

userProfiles.service('mainService', function(){
	var self = this;

	this.data = [
	  {
	      "id": 0,
	      "first_name": "george",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
	  },
	  {
	      "id": 1,
	      "first_name": "lucille",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
	  },
	  {
	      "id": 2,
	      "first_name": "oscar",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
	  }
	];

	this.getUsers = function(){
		return this.data;
	};

	this.toggleFavorite = function(i){
		self.data.forEach(function(person){
			if(person.id===i){
				if(person.isFavorite){
					person.isFavorite=false;
				}
				else{
					person.isFavorite=true;
				}
			}
		} 
	)};

});

userProfiles.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});