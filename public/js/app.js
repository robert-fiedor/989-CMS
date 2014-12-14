(function () {
    'use strict';
    angular.module('doctors', ['ui.bootstrap','ngRoute', 'ui.router', '$baseAppSettings','moduleOne']);

    angular.module('doctors')
        .config(['$baseAppSettings', '$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($baseAppSettings, $locationProvider, $stateProvider, $urlRouterProvider) {

                angular.forEach($baseAppSettings.routes.client, function(value,key){

                    $stateProvider

                        .state(value.state, {
                            url: value.urlRequested,
                            templateUrl: value.templateUrl,
                            controller: value.controller || null
                        });

                });

                $locationProvider.html5Mode(true);

            }])

        .run(['$state', function ($state) {
            $state.transitionTo('home');
        }])

        .controller('AppController', ['$scope', function ($scope) {

        }])


})();


//.state('list.item', {
//    url: '/:item',
//    templateUrl: 'templates/list.item.html',
//    controller: function ($scope, $stateParams) {
//        $scope.item = $stateParams.item;
//    }
//})


//$routeProvider
//
//
//    .when('/przekier/ba', {
//        templateUrl: '/views/reports.html',
//        controller: 'HomeController'
//    })
//    .when('/przekier/ce', {
//        templateUrl: '/views/home.html',
//        controller: 'HomeController'
//    })
//    .when('/', {
//        templateUrl: '/views/reports.html',
//        controller: 'HomeController'
//    })


//$urlRouterProvider.otherwise('/');
/**
 * Created by Rob on 11/22/2014.
 */
//
angular.module('doctors')
    .controller('HomeController', ['$scope', '$http',
        function ($scope, $http) {

            console.log('HomeController');

        }
    ]
)
/**
 * Created by Rob on 11/22/2014.
 */

/**
 * Created by Rob on 11/22/2014.
 */
//
angular.module('doctors')
    .controller('ListController', ['$scope', '$http',
        function ($scope, $http) {

            console.log('ListController')

        }
    ]
)


/**
 * Created by Rob on 11/23/2014.
 */


//myAppModule.factory('CreditCard', ['$resource', function ($resource) {
//    return $resource('/user/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
//        charge: {
//            method: 'POST',
//            params: {charge: true},
//            isArray: false
//        });
//}]);

angular.module('doctors')
    .factory('CreditCardService', ['$resource', function ($resource) {

        return $resource('/useros/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
                charge: {
                    method: 'POST',
                    params: {charge: true},
                    isArray: false
                }
            }
        )
    }]);


/**
 * Created by Rob on 11/22/2014.
 */

(function () {
    'use strict';
    angular.module('moduleOne', [])

        .controller('ModuleOne', ['$scope', function ($scope) {

            console.log('hello Module One!')

        }])
})();


//.state('list.item', {
//    url: '/:item',
//    templateUrl: 'templates/list.item.html',
//    controller: function ($scope, $stateParams) {
//        $scope.item = $stateParams.item;
//    }
//})


//$routeProvider
//
//
//    .when('/przekier/ba', {
//        templateUrl: '/views/reports.html',
//        controller: 'HomeController'
//    })
//    .when('/przekier/ce', {
//        templateUrl: '/views/home.html',
//        controller: 'HomeController'
//    })
//    .when('/', {
//        templateUrl: '/views/reports.html',
//        controller: 'HomeController'
//    })


//$urlRouterProvider.otherwise('/');
/**
 * Created by Rob on 11/22/2014.
 */

