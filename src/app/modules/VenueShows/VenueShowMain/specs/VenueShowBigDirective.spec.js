
//https://github.com/vojtajina/ng-directive-testing/blob/start/test/tabsSpec.js

describe('VenueShowMain', function () {
    var $compile,
        $rootScope,
        PATH = "src/app/modules/VenueShows/VenueShowMain/specs/mockResponses/"

    // Load the myApp module, which contains the directive
    beforeEach(module('venue'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        jasmine.getJSONFixtures().fixturesPath = 'base';

    }));


    it('Renders stimulus', function () {
        var data = JSON.stringify(getJSONFixture(PATH+'data.json'));
        //console.log(data)
    //    var element = $compile("<multiple-choice-question data='" + data + "  '>" +
    //    "</multiple-choice-question>")(scope);
    //    scope.$digest();
    //    expect(element.html()).toContain("2-year-old child");
    });

});