var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){
	$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
		document.getElementById('newFriend').value = '';
	}
}]);