/**
 * Created by Rob on 12/15/2014.
 */
//
(function () {
    'use strict';
    var venueShowMain = function ($compile) {
        return {
            restrict: 'E',
            scope: {},
            replace: false,
            template: '<div>123</div>',

            link: function (scope, element, attrs) {
            }
        };
    }
    venueShowMain.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowMain', venueShowMain);
})();