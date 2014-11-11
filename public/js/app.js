/**
 * Created by Rob on 11/10/2014.
 */

(function () {
    'use strict';

    angular.module('doctors', ['ngRoute'])

})();
(function () {
    'use strict';

    angular.module('doctors').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider

            .when('/', {
                templateUrl: '/views/home.html',
                controller: 'HomeController'
            })

        $locationProvider.html5Mode(true);

    }])
})();
/**
 * Created by Rob on 11/10/2014.
 */

(function () {
    'use strict';

    angular.module('doctors').controller('HomeController', function ($scope) {

        $scope.tagline = 'To the moon and back!';
        console.log('here');

    });

})();
