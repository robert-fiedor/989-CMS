/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var phoTab = function () {
        return {
            restrict: 'E',

            scope: {
                tabTitle: '@',
                inputTitle:'='
            },
            replace: false,
            controllerAs: "phoTabCtrl",
            transclude: true,
            bindToController: true,
            templateUrl:'/partials/directives/photoshop/tab.html',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'phoTabCtrl hello ,live value';
                console.log('hello phoTabs')
            }

        };
    }
    phoTab.$inject = [];
    angular.module('photoshop').directive('phoTab', phoTab);
})();