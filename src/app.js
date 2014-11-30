(function () {
    'use strict';
    angular.module('doctors', ['ngRoute', 'ui.router', '$baseAppSettings']);

    angular.module('doctors')
        .config(['$baseAppSettings', '$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($baseAppSettings, $locationProvider, $stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state($baseAppSettings.routes.client.home.state, {
                        url: $baseAppSettings.routes.client.home.urlRequested,
                        templateUrl: '/views/home.html'
                    })
                    .state($baseAppSettings.routes.client.list.state, {
                        url: $baseAppSettings.routes.client.list.urlRequested,
                        templateUrl: '/views/reports.html'
                        //controller: 'ListCtrl'
                    })
                    .state($baseAppSettings.routes.client.one.state, {
                        url: $baseAppSettings.routes.client.one.urlRequested,
                        templateUrl: '/views/reports.html'
                        //controller: 'ListCtrl'
                    })

                $locationProvider.html5Mode(true);

            }])

        .run(['$state', function ($state) {
            $state.transitionTo('home');
        }])

        .controller('AppController', ['$scope', function ($scope) {

        }])


})();


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


//$urlRouterProvider.otherwise('/');