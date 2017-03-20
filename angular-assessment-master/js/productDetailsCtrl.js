// CONTROLLER
app.controller('productDetailsCtrl', ['$scope', 'shopService', '$stateParams', function($scope, shopService, $stateParams){

	var getProducts = function(){
		shopService.getProducts().then(products => {
			$scope.product=products.data.filter(p => p.id===$stateParams.id)[0];
		});
	}();


}]);