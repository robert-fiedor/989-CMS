(function () {
    'use strict';
    angular.module('doctors', ['ngRoute', 'ui.router', '$baseAppSettings','moduleOne']);

    angular.module('doctors')
        .config(['$baseAppSettings', '$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($baseAppSettings, $locationProvider, $stateProvider, $urlRouterProvider) {

                angular.forEach($baseAppSettings.routes.client, function(value,key){

                    $stateProvider

                        .state(value.state, {
                            url: value.urlRequested,
                            templateUrl: value.templateUrl,
                            controller: value.controller || null
                        });

                });

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