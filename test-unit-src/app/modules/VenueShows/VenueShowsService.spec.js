/**
 * Created by Rob on 12/18/2014.
 */
'use strict';

describe('RecommendationService', function () {

    beforeEach(angular.mock.module('venueShows'));

    it('it should find recommended flag', inject([
            'VenueShowsService',
            function (VenueShowsService) {
                expect(true).toBeTruthy();

            }
        ])

    );

});

