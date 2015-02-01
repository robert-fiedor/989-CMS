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
                tabTitle: '@'
            },
            replace: false,
            controllerAs: "phoTabCtrl",
            transclude: true,
            bindToController: true,
            template: '<div class="pho-tab">' +
            '<div class="pho-tab-header">' +
            '<h10 class="pho-tab-title" ng-bind="phoTabCtrl.tabTitle">' +

            '</h10>' +
            '</div>' +
            '<div ng-transclude></div>' +
            '</div>',
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