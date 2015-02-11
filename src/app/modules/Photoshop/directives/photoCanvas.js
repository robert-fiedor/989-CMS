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
                template: '<div class="photo-canvas">' +

                '<div ng-repeat="layer in photoCanvasCtrl.photoshopFile.content.layers">' +
                '<layer model="layer"></layer>' +
                '</div>' +

                '</div>',
                controller: 'PhotoCanvasController as photoCanvasCtrl',
                link: function (scope) {
                    scope.$watch('currentlySelected.tool', function (newVal, oldVal) {
                        console.log(newVal)
                    });
                }
            };
        }]
    )
        .controller("PhotoCanvasController", [
            'currentlySelected',
            'LayersAccessService',
            'photoshopFile',
            function (currentlySelected,
                      LayersAccessService,
                      photoshopFile) {

                var vm = this;

                vm.photoshopFile = photoshopFile;


                vm.canvasClicked = function ($event) {

                    if (currentlySelected.tool.createsLayer) {
                        LayersAccessService.addLayer();
                        currentlySelected.layer.layerX = $event.layerX;
                        currentlySelected.layer.layerY = $event.layerY;
                    }
                }

            }])

    //var photoCanvas =     photoCanvas.$inject = ['$scope','currentlySelected'];
})();