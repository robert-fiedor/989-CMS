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
                data:'='
            },
            replace: false,
            template: '<div>123</div>',

            link: function (scope, element, attrs) {





            }
        };
    }
    venueShowBig.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowMain', venueShowBig);
})();