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
            template: '<div ng-repeat="item in propertiesCtrl.printObject | excludeProperties">{{item}}</div>',
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
        .filter('excludeProperties', function () {
            return function (item) {

                var result = {};

                for (var key in item) {
                    var isPresentInRenderableKeys = angular.isDefined(item.renderable_keys[key]);
                    var isRenderKeysMapObject = key === 'renderable_keys' ? true : false;
                    if (isPresentInRenderableKeys) result[key] = item[key]
                }


                return result;
            }
        });

})();


