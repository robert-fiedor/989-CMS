(function () {
    'use strict';

    angular.module('venue', ['ngRoute', 'ui.router', 'venueShows']);

    angular.module('venueShows', []);

})
();

//'ui.bootstrap'


/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var homeController = function($scope, $http){

        var vm = this;
        vm.awesome = function (){

        }


        console.log('HomeController new');

    };
    homeController.$inject = ['$scope','$http'];
    angular.module('venue').controller('HomeController', homeController)


})();

/**
 * Created by Rob on 11/22/2014.
 */

(function () {
    'use strict';

    angular.module('venue')
        .controller('ListController', ['$scope', '$http',
            function ($scope, $http) {
                console.log('ListController')
            }
        ]
    )

})();

/**
 * Created by Rob on 12/15/2014.
 */
//
(function () {
    'use strict';
    var venueShowMain = function ($compile) {
        return {
            restrict: 'E',
            
            scope: {},
            replace: false,
            template: '<div>123</div>',

            link: function (scope, element, attrs) {
            }
        };
    }
    venueShowMain.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowMain', venueShowMain);
})();
/**
 * Created by Rob on 12/15/2014.
 */


/**
 * Created by Rob on 12/15/2014.
 */

(function () {
    'use strict';

    var VenueShowsService = function ($rootScope, $window, $http, $log) {

        var getRecommendations = function (syllabusPath) {
            return true;
        };

        return {
            getRecommendations: getRecommendations
        };

    };

    VenueShowsService.$inject = ['$rootScope', '$window', '$http', '$log'];
    angular.module('venueShows').factory('VenueShowsService', VenueShowsService);

})();
