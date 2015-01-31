/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var tab = function () {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "tabCtrl",
            transclude:true,
            bindToController: true,
            template: '<div> this is tab {{tabCtrl.lala2}}{{tabCtrl.title1}}</div><div ng-transclude></div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'tabCtrl hello ,live value';
                console.log('hello tabs')
            }

        };
    }
    tab.$inject = [];
    angular.module('photoshop').directive('tab', tab);
})();