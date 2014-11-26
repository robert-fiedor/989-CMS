(function () {
    'use strict';


    angular.module('doctors', ['ngRoute', 'ui.router']);

    angular.module('doctors').config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ($locationProvider,$stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/views/home.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: '/views/reports.html'
                //controller: 'ListCtrl'
            })



        //.state('list.item', {
        //    url: '/:item',
        //    templateUrl: 'templates/list.item.html',
        //    controller: function ($scope, $stateParams) {
        //        $scope.item = $stateParams.item;
        //    }
        //})


        //$routeProvider
        //
        //
        //    .when('/przekier/ba', {
        //        templateUrl: '/views/reports.html',
        //        controller: 'HomeController'
        //    })
        //    .when('/przekier/ce', {
        //        templateUrl: '/views/home.html',
        //        controller: 'HomeController'
        //    })
        //    .when('/', {
        //        templateUrl: '/views/reports.html',
        //        controller: 'HomeController'
        //    })


        $locationProvider.html5Mode(true);

    }])

        .run(['$state', function ($state) {
            $state.transitionTo('home');
        }])


    //$urlRouterProvider.otherwise('/');


})();
