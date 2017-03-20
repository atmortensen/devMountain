// CONTROLLER
app.controller('shopCtrl', ['$scope', 'shopService', function($scope, shopService){

	var getProducts = function(){
		shopService.getProducts().then(products => $scope.products=products.data);
	}();

	$scope.toggleImgs = [];
	$scope.toggleImg = function(index){
		if($scope.toggleImgs[index]){
			$scope.toggleImgs[index]=false;
		} else{
			$scope.toggleImgs[index]=true;
		}
	}

}]);