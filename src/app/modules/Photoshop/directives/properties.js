/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var properties = function () {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "propertiesCtrl",
            bindToController: true,
            template: '<div>propertiesCtrl here >></div>',
            controller: function ($scope) {
                var vm = this;
            }

        };
    }
    properties.$inject = [];
    angular.module('photoshop').directive('properties', properties);
})();