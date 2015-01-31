/**
 * Created by Rob on 12/15/2014.
 */
//
(function () {
    'use strict';
    var showPanes = function ($compile,shows) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "showPanesCtrl",
            bindToController: true,
            template: '<div>{{showPanesCtrl.lala3.items[0].name}} {{showPanesCtrl.lala2}}</div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'showPanes hello';
                vm.lala3 = shows;
                console.log('fin',shows)
            }

        };
    }
    showPanes.$inject = ['$compile','shows'];
    angular.module('venueShows').directive('showPanes', showPanes);
})();