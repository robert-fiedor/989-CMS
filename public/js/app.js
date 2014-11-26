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

/**
 * Created by Rob on 11/23/2014.
 */


//myAppModule.factory('CreditCard', ['$resource', function ($resource) {
//    return $resource('/user/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
//        charge: {
//            method: 'POST',
//            params: {charge: true},
//            isArray: false
//        });
//}]);

angular.module('doctors')
    .factory('CreditCardService', ['$resource', function ($resource) {

        return $resource('/useros/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
                charge: {
                    method: 'POST',
                    params: {charge: true},
                    isArray: false
                }
            }
        )
    }]);


/**
 * Created by Rob on 11/22/2014.
 */

/**
 * Created by Rob on 11/22/2014.
 */
//
angular.module('doctors')
    .controller('HomeController', ['$scope', '$http', 'CreditCardService',
        function ($scope, $http, CreditCardService) {

            console.log('HomeController', CreditCardService.query());


            //$http.get('/user/profile')
            //    .success(function (data, status, headers, config) {
            //        $scope.user = data;
            //        $scope.error = "";
            //        console.log(88);
            //    }).
            //    error(function (data, status, headers, config) {
            //        $scope.user = {};
            //        $scope.error = data;
            //    })

        }
    ]
)