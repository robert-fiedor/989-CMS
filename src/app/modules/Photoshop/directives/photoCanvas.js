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
                templateUrl:'/partials/directives/photoshop/photoCanvas.html',
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
                console.log('here 1')

                vm.photoshopFile = photoshopFile;


                vm.canvasClicked = function ($event) {

                    console.log(123999);


                    if (currentlySelected.tool.createsLayer) {
                        LayersAccessService.addLayer();
                        currentlySelected.layer.layerX = $event.layerX;
                        currentlySelected.layer.layerY = $event.layerY;
                    }
                }

            }])

    //var photoCanvas =     photoCanvas.$inject = ['$scope','currentlySelected'];
})();