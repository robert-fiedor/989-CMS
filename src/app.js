/**
 * Created by Rob on 11/10/2014.
 */

(function () {
    'use strict';

    angular.module('doctors', ['ngRoute'])

        .controller('myController', ['$scope', '$http',
            function ($scope, $http) {

                //console.loggg

                $http.get('/user/profile')
                    .success(function (data, status, headers, config) {
                        $scope.user = data;
                        $scope.error = "";
                        console.log(88);
                    }).
                    error(function (data, status, headers, config) {
                        $scope.user = {};
                        $scope.error = data;
                    });
            }])

})();

//
//controller('myController', ['$scope', '$http',
//    function ($scope, $http) {
//        $http.get('/user/profile')
//            .success(function (data, status, headers, config) {
//                $scope.user = data;
//                $scope.error = "";
//                console.log(666);
//            }).
//            error(function (data, status, headers, config) {
//                $scope.user = {};
//                $scope.error = data;
//            });
//    }])

//(function () {
//    'use strict';
//
//    angular.module('doctors').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//
//        $routeProvider
//
//            .when('/', {
//                templateUrl: '/views/home.html',
//                controller: 'HomeController'
//            })
//
//        $locationProvider.html5Mode(true);
//
//    }])
//})();