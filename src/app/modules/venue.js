angular.module('venue')
    .config(['baseAppSettings', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function (baseAppSettings, $locationProvider, $stateProvider, $urlRouterProvider) {

            //angular.forEach(baseAppSettings.routes.client, function(value,key){
            //    $stateProvider
            //        .state(value.state, {
            //            url: value.urlRequested,
            //            templateUrl: value.templateUrl,
            //            controller: value.controller || null
            //        });
            //});

            $locationProvider.html5Mode(true);



        }])

    .run(['$state', function ($state) {
        //$state.transitionTo('home');

    }])

    .controller('AppController', ['$scope', function ($scope) {

    }])