angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService, $location ) {
	
	friendService.getFriends().then(function( response ) {
		if (response.data) {
			$scope.friends = response.data.friends;
			$scope.currentUser = response.data.currentUser;
		} else {
			$location.path('/');
		}
	});

});