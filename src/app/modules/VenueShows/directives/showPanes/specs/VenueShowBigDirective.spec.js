
//https://github.com/vojtajina/ng-directive-testing/blob/start/test/tabsSpec.js

describe('VenueShowMain', function () {
    var $compile,
        $rootScope,
        PATH = "src/app/modules/VenueShows/directives/showPanes/specs/mockResponses/"

        beforeEach(function () {
            angular.mock.module('venue');
            jasmine.getJSONFixtures().fixturesPath = 'base';
            angular.mock.inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                $httpBackend = _$httpBackend_;
            });
        });


    it('Renders stimulus', function () {
        var data = JSON.stringify(getJSONFixture(PATH+'data.json').subtitle);
        //console.log(data)
        //var element = $compile("<venue-show-big title='"+data+"'></venue-show-big>")($rootScope);


    //    "</multiple-choice-question>")(scope);
    //    $rootScope.$digest();
        console.log(data);

        //expect(element.html()).toContain("10");
    });

});