// SERVICE
app.service('github', ['$http', function($http){
	
	this.login = function(){
		return $http({
			url: '/auth/github',
			method: 'GET'
		});
	};

	this.check = function(){
		return $http({
			url: ''
		})
	}


}]);