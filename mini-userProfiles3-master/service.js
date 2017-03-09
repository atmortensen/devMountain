angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
  	var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response){
    	var parsedResponse = response.data.data;
    	deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };


});
