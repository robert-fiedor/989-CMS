/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function ($scope, $http, PhotoshopDataService, photoshopFile, photoshopSetting, currentlySelected) {

        var vm = this;
        vm.currentId = '54d6625aaed0dcc40ff2c001';
        vm.tools = photoshopSetting.tools;
        $scope.photoshopFile = photoshopFile;
        $scope.currentlySelected = currentlySelected;


        $scope.$watch('photoshopFile.content', function (newVal, oldVal) {
            console.log('* photoshopFile.content', newVal)
        });

        PhotoshopDataService.getFile(vm.currentId).then(function (d) {
        });

        vm.updateFileTemp = function () {
            $scope.photoshopFile.content.name = 'XXX3';

            console.log('a', $scope.photoshopFile.content);
            PhotoshopDataService.updateFile(vm.currentId).then(function (d) {
                //console.log('dddd', d.data);
            });
        };


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

        $scope.logobject = function () {
            console.log('logobject', photoshopFile)

        };


        //$scope.$watch('photoshopFile', function (newVal, oldVal) {
        //    console.log('here ----:',newVal)
        //})
        //
        //$scope.$watch('obj.ten', function (newVal, oldVal) {
        //    console.log(newVal)
        //})
    };


    PhotoshopController.$inject = ['$scope', '$http', 'PhotoshopDataService', 'photoshopFile', 'photoshopSetting', 'currentlySelected'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();
