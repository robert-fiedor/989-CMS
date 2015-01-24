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
    var venueShowBig = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "venueShowBigCtrl",
            bindToController:true,

            template: '<div>{{venueShowBigCtrl.lala}}</div>'+
                        '<div>{{venueShowBigCtrl.title1}}<div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala=10;
            }

        };
    }
    venueShowBig.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowBig', venueShowBig);
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
