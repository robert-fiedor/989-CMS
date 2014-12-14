/**
 * Created by Rob on 11/22/2014.
 */

(function () {
    'use strict';
    angular.module('moduleOne', [])

        .controller('ModuleOne', ['$scope', function ($scope) {

            console.log('hello Module One!')

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