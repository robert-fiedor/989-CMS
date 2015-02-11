/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function (LayersAccessService, $scope, $http, PhotoshopDataService, photoshopFile, photoshopSettings, currentlySelected) {

        var vm = this;
        vm.currentId = '54d692ce6d60d5041fca0238';
        vm.tools = photoshopSettings.tools;
        $scope.photoshopFile = photoshopFile;
        $scope.currentlySelected = currentlySelected;

        //get file
        PhotoshopDataService.getFile(vm.currentId).then(function () {
            $scope.currentlySelected.layer = $scope.photoshopFile.content.layers[0];
        });
        $scope.$watch('photoshopFile.content', function (newVal, oldVal) {
        });

        vm.updateFileTemp = function () {
            PhotoshopDataService.updateFile(vm.currentId);
        };

        vm.deleteLayer = function () {
            LayersAccessService.deleteLayer();
        }

        //temp:
        $scope.createFile = function () {
            PhotoshopDataService.createFile().then(function (d) {
                console.log('dddd', d.data.file);
            });
        };

        $scope.getFiles = function () {
            PhotoshopDataService.getFiles().then(function (d) {
                console.log('dddd', d.data);
            });
        }

    };

    PhotoshopController.$inject = ['LayersAccessService', '$scope', '$http', 'PhotoshopDataService', 'photoshopFile', 'photoshopSettings', 'currentlySelected'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();
