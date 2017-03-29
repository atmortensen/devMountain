// CONTROLLER
app.controller('mainCtrl', ['$scope', 'mainService', function($scope, mainService){
	$scope.form = {};

	$scope.getProducts = function(id){
		mainService.getProducts(id).then(function(results){
			$scope.products = results.data.results;
		});
	};
	$scope.getProducts();

	$scope.deleteProduct = function(id){
		mainService.deleteProduct(id).then(function(results){
			$scope.getProducts();
		});
	};

	$scope.newProduct = function(params){
		mainService.newProduct(params).then(function(results){
			$scope.getProducts();
			$scope.new = {};
		});
	};

	$scope.updateProduct = function(id, params){
		mainService.updateProduct(id, params).then(function(results){
			$scope.getProducts();
		});
	};

}]);