/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var homeController = function($scope, $http){

        var vm = this;
        console.log('HomeController new');

    };
    homeController.$inject = ['$scope','$http'];
    angular.module('venue').controller('HomeController', homeController)

})();
