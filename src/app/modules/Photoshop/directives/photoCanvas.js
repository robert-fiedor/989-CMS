/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';

    angular.module('photoshop').directive('photoCanvas', ['currentlySelected', function (currentlySelected) {
            return {
                restrict: 'E',
                replace: false,
                bindToController: true,
                template: '<div ng-click="photoCanvasCtrl.canvasClicked($event)" class="photo-canvas"></div>',
                controller: 'PhotoCanvasController as photoCanvasCtrl',
                link: function (scope) {
                    scope.$watch('currentlySelected.tool', function (newVal, oldVal) {
                        console.log(newVal)
                    });

                }

            };
        }]
    ).controller("PhotoCanvasController", ['currentlySelected', function (currentlySelected) {
            var vm = this;
            console.log(currentlySelected)
            vm.canvasClicked = function ($event) {
                console.log('canvas clicked', $event.layerX, $event.layerY, currentlySelected.tool.name)
            }

        }])

    //var photoCanvas =     photoCanvas.$inject = ['$scope','currentlySelected'];
})();