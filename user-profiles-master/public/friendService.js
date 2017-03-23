angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http({
      	url: '/api/login',
      	method: 'POST',
      	data: {
      		user: user
      	}
      });
    };

    this.getFriends = function() {
    	return $http({
      		url: '/api/profiles',
      		method: 'GET'
    	});
    };
  
});
