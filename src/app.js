

(function () {
    'use strict';


    angular.module('doctors',['ngRoute']).config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

        $routeProvider

            .when('/przekier/ba', {
                templateUrl: '/views/reports.html',
                controller: 'HomeController'
            })
            .when('/przekier/ce', {
                templateUrl: '/views/home.html'
                //controller: 'HomeController'
            })
            .when('/', {
                templateUrl: '/views/reports.html',
                controller: 'HomeController'
            })


        $locationProvider.html5Mode(true);

    }])
})();