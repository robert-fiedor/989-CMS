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
                printObject: '='
            },
            replace: false,
            controllerAs: "propertiesCtrl",
            bindToController: true,
            template:
                '<div ' +
                'ng-repeat="(key,val) in propertiesCtrl.printObject | filterProperties">' +
                '<p ng-bind="propertiesCtrl.printObject.renderable_keys[key]"></p>: '+
                    '<input type="text" ng-model="propertiesCtrl.printObject[key]" value="propertiesCtrl.printObject[key]"/>'+
                '</div>',
            controller: function ($scope) {
                var vm = this;
            }

        };
    }
    properties.$inject = [];
    angular
        .module('photoshop')
        .directive('properties', properties);
})();


(function () {
    'use strict';

    angular.module('photoshop')
        .filter('filterProperties', function () {
            return function (item) {

                var result = {};

                for (var key in item) {

                    var isPresentInRenderableKeys = angular.isDefined(item.renderable_keys[key]);
                    if (isPresentInRenderableKeys) result[key] = item[key]
                }

                return result;
            }
        });

})();


