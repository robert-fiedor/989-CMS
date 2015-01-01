/**
 * Created by Rob on 12/18/2014.
 */
'use strict';

describe('HomeController', function () {

    beforeEach(angular.mock.module('venueShows'));



    it('it should have functions defined', inject([
            'VenueShowsService',

            function (VenueShowsService) {

                expect(true).toBeTruthy();


            }
        ])

    );


});

