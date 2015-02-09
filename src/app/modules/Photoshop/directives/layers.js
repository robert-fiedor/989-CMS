/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';

    angular.module('photoshop')
        .directive('layers', ['currentlySelected', function (currentlySelected) {
            return {
                restrict: 'E',
                replace: false,
                bindToController: true,
                template: 'layers!',
                controller: 'LayersController as layersCtrl',
                link: function (scope) {
                    //scope.$watch('currentlySelected.tool', function (newVal, oldVal) {
                    //    console.log(newVal)
                    //});
                }
            };
        }]
    )
        .controller("LayersController", ['currentlySelected', 'LayersAccessService', function (currentlySelected, LayersAccessService) {
            var vm = this;

        }])

})();