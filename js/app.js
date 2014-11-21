/**
 * Created by Rob on 11/10/2014.
 */

(function () {
    'use strict';

    angular.module('doctors', ['ngRoute'])
        .controller('myController', ['$scope', '$http',
            function ($scope, $http) {

                console.log('happening')

                $http.get('/user/profile')
                    .success(function (data, status, headers, config) {
                        $scope.user = data;
                        $scope.error = "";
                        console.log(777);
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