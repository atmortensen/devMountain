// SERVICE
app.service('mainService', ['$http', function($http){
	
	this.getProducts = function(id){
		var url = id ? 'api/products/' + id : 'api/products';
		return $http({
			method: 'GET',
			url: url
		});
	};

	this.deleteProduct = function(id){
		return $http({
			method: 'DELETE',
			url: 'api/products/' + id
		});
	};

	this.updateProduct = function(params){
		return $http({
			method: 'PUT',
			url: 'api/products/' + params.id,
			data: params
		});
	};

	this.newProduct = function(params){
		return $http({
			method: 'POST',
			url: 'api/products',
			data: JSON.stringify(params)
		});
	};


}]);