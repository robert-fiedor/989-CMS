/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function ($scope, $http) {
        console.log('PhotoshopController new');

        $scope.yo=1;
    };

    PhotoshopController.$inject = ['$scope', '$http'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();
