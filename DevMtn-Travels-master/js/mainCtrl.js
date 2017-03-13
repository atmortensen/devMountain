angular.module('devmtnTravel').controller('mainCtrl', ['$scope', '$stateParams', 'mainSrv', function($scope, $stateParams, mainSrv){

	$scope.travelInfo = mainSrv.travelInfo;

	$scope.booked = $stateParams.id;
	$scope.$watch('booked', function(newVal){
		for(var i=0; i<$scope.travelInfo.length; i++){
			if($scope.travelInfo[i].id==newVal){
				$scope.booked = $scope.travelInfo[i].city + ", " + $scope.travelInfo[i].country;
				$scope.bookedImg = $scope.travelInfo[i].image;
			}
		}
	})
	

}]);