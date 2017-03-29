// MODULE
var app = angular.module('app', ['ui.router']);

// ROUTES
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'mainCtrl'
	});

	$urlRouterProvider.otherwise('/');
}]);


// // DIRECTIVE
app.directive('product', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/product.html',
		replace: true,
	};
});