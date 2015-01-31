/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var dirA = function () {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "dirACtrl",
            bindToController: true,
            template: '<div>ej ej ej{{dirACtrl.lala2}}{{dirACtrl.title1}}</div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'dirACtrl hello ,live value';

                console.log('hello dira')
                
            }

        };
    }
    dirA.$inject = [];
    angular.module('photoshop').directive('dirA', dirA);
})();