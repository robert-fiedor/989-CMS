/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var PhotoshopDataService = function ($http, $log, photoshopFile) {

        var createFile = function (name) {
            //var promise = $http.post('/api/photoshop/file',
            //    {name: name, layers: ['a', 'b']})
            //    .success(function (response) {
            //
            //    })
            //    .error(function (data, status, headers, config) {
            //        $log.debug('Error createFile()', status);
            //    });
            //
            //return promise;
        };


        var getFiles = function () {

            var promise = $http.get('/api/photoshop/file')
                .success(function (response) {
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var getFile = function (id) {

            var promise = $http.get('/api/photoshop/file/' + id)
                .success(function (response, err, err2) {

                    console.log('response', response)
                    photoshopFile.content.layers = response.layers;
                    photoshopFile.content.name = response.name;

                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var updateFile = function (id) {

            console.log('b', photoshopFile.content)

            var promise = $http.post('/api/photoshop/file/' + id, photoshopFile.content);

            return promise;
            //
        };

        return {
            createFile: createFile,
            getFiles: getFiles,
            getFile: getFile,
            updateFile: updateFile

        };
    }
    PhotoshopDataService.$inject = ['$http', '$log', 'photoshopFile'];
    angular.module('photoshop').factory('PhotoshopDataService', PhotoshopDataService);
})();