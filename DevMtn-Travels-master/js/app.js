angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "views/about.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "views/packages.html",
                controller: 'mainCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "views/locations.html",
                controller: 'mainCtrl'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "views/booked.html",
                controller: 'mainCtrl'
            })
            .state('adventurers',{
                url:'/adventurers',
                templateUrl: "views/about-adventurers.html",
                parent: 'home'
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "views/contact.html",
                parent: 'home'
            });

        $urlRouterProvider
            .otherwise('/');
    });
