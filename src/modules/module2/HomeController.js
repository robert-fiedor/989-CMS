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