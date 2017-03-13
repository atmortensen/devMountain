// MODULE
var miniRouting = angular.module('miniRouting', ['ui.router']);


// ROUTES
miniRouting.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'js/home/index.html',
		// controller: 'homeCtrl'
	})
	.state('settings', {
		url: '/settings',
		templateUrl: 'js/settings/index.html',
		// controller: 'settingsCtrl'
	})
	.state('products', {
		url: '/products/:id',
		templateUrl: 'js/products/index.html',
		controller: 'productsCtrl'
	});

	$urlRouterProvider.otherwise('/');
}]);

