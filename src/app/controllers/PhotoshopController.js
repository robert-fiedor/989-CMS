/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function ($scope, $http, PhotoshopDataService, photoshopFile) {


        //console.log('PhotoshopController new');
        //
        //$scope.yo = 1;
        //$scope.photoshopFile = photoshopFile;
        //$scope.stuff = [{ej: 1, text: 1}, {ej: 1, text: 2}, {ej: 1, text: 3}];
        //$scope.obj = {ten: {}};

        //PhotoshopDataService.submitResponse();

        $scope.createFile = function(){
            PhotoshopDataService.createFile().then(function(d){
                console.log('dddd', d.data.file);
            });
        };

        $scope.getFiles = function(){
            PhotoshopDataService.getFiles().then(function(d){
                console.log('dddd', d.data);
            });
        }

        $scope.logobject = function(){
            console.log('logobject', photoshopFile)

        };











        $scope.$watch('photoshopFile', function (newVal, oldVal) {
            console.log('here ----:',newVal)
        })

        $scope.$watch('obj.ten', function (newVal, oldVal) {
            console.log(newVal)
        })
    };


    PhotoshopController.$inject = ['$scope', '$http', 'PhotoshopDataService', 'photoshopFile'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();
