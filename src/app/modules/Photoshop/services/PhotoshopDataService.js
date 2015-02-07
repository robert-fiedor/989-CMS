/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var PhotoshopDataService = function ($http, $log, photoshopfile) {


        var createFile = function (name) {
            var promise = $http.post('/api/photoshop/file',
                {name:name, layers:['a','b']})
                .success(function (response) {

                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error createFile()', status);
                });

            return promise;
        };


        var getFiles = function () {

            var promise = $http.get('/api/photoshop/file')
                .success(function (response) {})
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        return {
            createFile:createFile,
            getFiles:getFiles

        };
    }
    PhotoshopDataService.$inject = ['$http', '$log', 'photoshopFile'];
    angular.module('photoshop').factory('PhotoshopDataService', PhotoshopDataService);
})();