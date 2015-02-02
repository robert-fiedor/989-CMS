/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var PhotoshopDataService = function ($http, $log, photoshopfile) {

        var getShows = function () {

            var promise = $http.get('/api/photoshop/shows')
                .success(function (response) {
                    photoshopfile.items = response;
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var createFile = function (name) {
            var promise = $http.post('/api/photoshop/file',
                {name:name, layers:['a','b']})
                .success(function (response) {
                    $log.debug('Pass createFile()', response.file);


                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error createFile()', status);
                });

            return promise;
        };

        return {
            getShows:getShows,
            createFile:createFile
        };
    }
    PhotoshopDataService.$inject = ['$http', '$log', 'photoshopFile'];
    angular.module('photoshop').factory('PhotoshopDataService', PhotoshopDataService);
})();