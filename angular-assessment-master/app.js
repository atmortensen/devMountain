// MODULE
var app = angular.module('assessment', ['ui.router']);

// ROUTES
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html'
	})
	.state('blog', {
		url: '/blog',
		templateUrl: 'views/blog.html'
	})
	.state('shop', {
		url: '/shop',
		templateUrl: 'views/shop.html',
		controller: 'shopCtrl'
	})
	.state('product', {
		url: '/product:id',
		templateUrl: 'views/product-details.html',
		controller: 'productDetailsCtrl'
	});

	$urlRouterProvider.otherwise('/');
}]);

// DIRECTIVES
app.directive('logo', [function(){
	return {
		templateUrl: 'views/logo.html',
		replace: true,
		restrict: 'E',
	}
}]);

app.directive('product', [function(){
	return {
		templateUrl: 'views/product-tmpl.html',
		replace: true,
		restrict: 'E',
	}
}]);
