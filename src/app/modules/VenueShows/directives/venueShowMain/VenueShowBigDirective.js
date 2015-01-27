/**
 * Created by Rob on 12/15/2014.
 */
//
(function () {
    'use strict';
    var venueShowBig = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "venueShowBigCtrl",
            bindToController: true,

            template: '<div>{{venueShowBigCtrl.lala}}</div>' +
                        '<div>{{venueShowBigCtrl.title1}}<div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala = 10;
            }

        };
    }
    venueShowBig.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowBig', venueShowBig);
})();