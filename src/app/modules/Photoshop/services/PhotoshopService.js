/**
 * Created by Rob on 12/15/2014.
 */

(function () {
    'use strict';

    var PhotoshopService = function ($http, $log, shows) {

        var getShows = function () {

            var promise = $http.get('/api/shows')
                .success(function (response) {
                    shows.items = response;
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;


        };

        return {
            getShows: getShows
        };

    };

    PhotoshopService.$inject = ['$http', '$log', 'shows'];
    angular.module('Photoshop').factory('PhotoshopService', PhotoshopService);

})();
