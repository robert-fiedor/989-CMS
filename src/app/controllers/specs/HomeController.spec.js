/**
 * Created by Rob on 12/18/2014.
 */
'use strict';

describe('HomeController', function () {

    //good example of testing a controller:
    //https://docs.angularjs.org/api/ngMock/service/$httpBackend

    var $rootScope;
    var scope;
    var controller;

    beforeEach(angular.mock.module('venue'));

    beforeEach(inject(function ($injector) {
    //
        $rootScope = $injector.get('$rootScope');
        scope = $rootScope.$new();

        controller = $injector.get('$controller')('HomeController', {
            $scope: scope

        });
    }));

    it('should	', function () {
        expect(controller.awesome).toBeDefined();
    });


});


