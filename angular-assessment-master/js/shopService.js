// SERVICE
app.service('shopService', ['$http', function($http){
	
	this.getProducts = function(){
		return $http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products'
		}).catch(e => console.log(e));
	}

}]);