// MODULE
var app = angular.module('app', ['ui.router']);

// ROUTES
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: ['$scope', '$location', 'github', function($scope, $location, github){
			$scope.login = function(){
				$location.path('./auth/github');
			};
		}]
	}).state('friends', {
		url: '/friends',
		templateUrl: 'views/friends.html',
		// controller: 'mainCtrl'
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}]);


// // DIRECTIVES
// weatherApp.directive('weatherReport', function(){
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'directives/weatherReport.html',
// 		replace: true,
// 		scope: {
// 			weatherDay: "=",
// 			convertToStandard: "&",
// 			convertToDate: "&",
// 			dateFormat: "@"
// 		}
// 	}
// });