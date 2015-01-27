/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var homeController = function ($scope, $http, VenueShowsService, shows) {

        var vm = this;
        $scope.shows = shows;

        $scope.tentyp=1000000000000000;

        VenueShowsService.getAssessment().then(function (data) {
            console.log(1, shows);

        }, function (data) {
            console.log(2, shows);
        });

        //console.log('HomeController new',VenueShowsService.getContentItem());

    };
    homeController.$inject = ['$scope', '$http', 'VenueShowsService', 'shows'];
    angular.module('venue').controller('HomeController', homeController)


})();
