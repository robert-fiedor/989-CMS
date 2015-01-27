/**
 * Created by Rob on 12/15/2014.
 */

(function () {
    'use strict';

    var VenueShowsService = function ($http, $log, shows) {

        var getRecommendations = function (syllabusPath) {
            return shows;
        };

        var getContentItem = function () {
            var contentItem = $http.get('/api/shows');
            return contentItem;
        }

        var getAssessment = function () {
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
            getAssessment: getAssessment,
            getContentItem: getContentItem,
            getRecommendations: getRecommendations
        };

    };

    VenueShowsService.$inject = ['$http', '$log', 'shows'];
    angular.module('venueShows').factory('VenueShowsService', VenueShowsService);

})();
