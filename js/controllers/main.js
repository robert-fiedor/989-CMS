/**
 * Created by Rob on 10/26/2014.
 */

angular.module('myApp', [])
    .controller('MainController', function($scope) {
        $scope.name = "Ari";
        $scope.sayHello = function() {
            $scope.greeting = "Hello " + $scope.name;
        }
    })
