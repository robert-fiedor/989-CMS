/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function ($scope, $http) {
        console.log('PhotoshopController new');

        $scope.yo=1;
        $scope.stuff=[{ej:1, text:1 },{ej:1, text:2 },{ej:1, text:3 }];
        $scope.obj={ten:{}};

        $scope.$watch('obj.ten',function(newVal,oldVal){
console.log(newVal)
        })
    };



    PhotoshopController.$inject = ['$scope', '$http'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();
