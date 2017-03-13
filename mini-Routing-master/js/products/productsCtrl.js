miniRouting.controller('productsCtrl', ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService){
	if($stateParams.id === 'shoes'){
		$scope.productData = productService.shoeData;
	} else if($stateParams.id === 'socks'){
		$scope.productData = productService.sockData;
	}
}]);