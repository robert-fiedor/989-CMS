/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';

    angular.module('photoshop')
        .directive('photoCanvas', ['currentlySelected', function (currentlySelected) {
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
    )
        .controller("PhotoCanvasController", ['currentlySelected', 'LayersAccessService', function (currentlySelected, LayersAccessService) {
            var vm = this;
            console.log(currentlySelected)
            vm.canvasClicked = function ($event) {
                //$event.layerX, $event.layerY

                console.log('LayersAccessService', LayersAccessService.getLayers())


                if (currentlySelected.tool.createsLayer) {
                    LayersAccessService.addLayer();
                }


            }

        }])

    //var photoCanvas =     photoCanvas.$inject = ['$scope','currentlySelected'];
})();