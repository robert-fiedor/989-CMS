(function () {
    'use strict';

    angular.module('venue', ['ngRoute', 'ui.router', 'venueShows', 'playground', 'photoshop']);

    angular.module('venueShows', []);
    angular.module('playground', []);
    angular.module('photoshop', []);

})
();

//'ui.bootstrap'


/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var homeController = function ($scope, $http, VenueShowsService, shows) {

        var vm = this;
        $scope.shows = shows;
        $scope.tentyp='sl';

        VenueShowsService.getShows().then(function (data) {
            console.log(1, shows);

        }, function (data) {
            console.log(2, shows);
        });

        //console.log('HomeController new',VenueShowsService.getContentItem());

    };
    homeController.$inject = ['$scope', '$http', 'VenueShowsService', 'shows'];
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
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var PhotoshopController = function ($scope, $http, PhotoshopDataService, photoshopFile) {
        console.log('PhotoshopController new');

        $scope.yo = 1;
        $scope.photoshopFile = photoshopFile;
        $scope.stuff = [{ej: 1, text: 1}, {ej: 1, text: 2}, {ej: 1, text: 3}];
        $scope.obj = {ten: {}};

        //PhotoshopDataService.submitResponse();

        $scope.createFile = function(){
            console.log('createFile');

            PhotoshopDataService.createFile('cycki').then(function(d){
                console.log('dddd', d.data.file);

                //after create file
            });

        };

        $scope.getShows = function(){
            console.log('ha ha')
            PhotoshopDataService.getShows();
        }

        $scope.logobject = function(){
            console.log('logobject', photoshopFile)

        };











        $scope.$watch('photoshopFile', function (newVal, oldVal) {
            console.log('here ----:',newVal)
        })

        $scope.$watch('obj.ten', function (newVal, oldVal) {
            console.log(newVal)
        })
    };


    PhotoshopController.$inject = ['$scope', '$http', 'PhotoshopDataService', 'photoshopFile'];
    angular.module('photoshop').controller('PhotoshopController', PhotoshopController)

})();

/**
 * Created by Rob on 11/22/2014.
 */
//

(function () {
    'use strict';

    var playgroundController = function ($scope, $http) {
        console.log('playgroundController new');

        $scope.yo=1;
    };

    playgroundController.$inject = ['$scope', '$http'];
    angular.module('playground').controller('PlaygroundController', playgroundController)

})();

/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var dirA = function () {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "dirACtrl",
            bindToController: true,
            template: '<div>ej ej ej{{dirACtrl.lala2}}{{dirACtrl.title1}}</div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'dirACtrl hello ,live value';

                console.log('hello dira')
                
            }

        };
    }
    dirA.$inject = [];
    angular.module('photoshop').directive('dirA', dirA);
})();
/**
 * Created by Rob on 1/31/2015.
 */


(function () {
    'use strict';

    angular.module('photoshop').directive('radioButtons', function () {
        return {
            restrict: 'EA',
            scope: {
                data: '=',
                answerObjectToBindTo: '=',
                keyOfAnswerObjectToBindTo: '@',
                uniqueRadioButtonName: '@',
                valueIsIndex: '@',
                triggerOnChange: '&'
            },
            transclude:true,
            controllerAs: 'ctrl',
            bindToController: true,
            template:
            '<div ng-repeat="item in ctrl.data">' +
            '<label ng-class="{&apos;photoshop-active&apos; : ctrl.isActive($index,item) }">' +
            '<input type="radio" name="{{::ctrl.uniqueRadioButtonName}}" ng-model="ctrl.answerObjectToBindTo[ctrl.keyOfAnswerObjectToBindTo]" ng-value="ctrl.indexOrObject($index,item)" ng-change="ctrl.triggerOnChange()"></input>' +
            '<div ng-transclude></div>' +
            '</label>' +
            '</div>',
            link: function (scope, element, attrs, ngModelController) { },
            controller: function ($scope) {
                var vm = this;
                vm.indexOrObject = function (index, item) {
                    var result = vm.valueIsIndex === 'true' ? index : item;
                    return result;
                }

                vm.isActive = function (index, item) {
                    return vm.answerObjectToBindTo[vm.keyOfAnswerObjectToBindTo] === vm.indexOrObject(index, item);
                }

            }
        }
    });

})();




/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var phoTab = function () {
        return {
            restrict: 'E',
            scope: {
                tabTitle: '@'
            },
            replace: false,
            controllerAs: "phoTabCtrl",
            transclude: true,
            bindToController: true,
            template: '<div class="pho-tab">' +
                        '<div class="pho-tab-header">' +
                            '<h10 class="pho-tab-title" ng-bind="phoTabCtrl.tabTitle">' +
                            '</h10>' +
                        '</div>' +
                        '<div ng-transclude></div>' +
                       '</div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'phoTabCtrl hello ,live value';
                console.log('hello phoTabs')
            }

        };
    }
    phoTab.$inject = [];
    angular.module('photoshop').directive('phoTab', phoTab);
})();
/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var PhotoshopDataService = function ($http, $log, photoshopfile) {

        var getShows = function () {

            var promise = $http.get('/api/photoshop/shows')
                .success(function (response) {
                    photoshopfile.items = response;
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var createFile = function (name) {
            var promise = $http.post('/api/photoshop/file',
                {name:name, layers:['a','b']})
                .success(function (response) {
                    $log.debug('Pass createFile()', response.file);


                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error createFile()', status);
                });

            return promise;
        };

        return {
            getShows:getShows,
            createFile:createFile
        };
    }
    PhotoshopDataService.$inject = ['$http', '$log', 'photoshopFile'];
    angular.module('photoshop').factory('PhotoshopDataService', PhotoshopDataService);
})();
/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').factory('photoshopFile', ["$rootScope", function ($rootScope) {
    var photoshopFile = {};
    return photoshopFile;
}]);
/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';


    var boxy = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "boxyCtrl",
            bindToController: true,
            transclude: true,
            template: '<div>hello from directive As vm: {{boxyCtrl.uno}}<div>'
            + '<ng-transclude></ng-transclude>'
            + '<div>end of A , zapytanie: {{boxyCtrl.title1}}</div>',
            controller: function ($scope) {
                var vm = this;
                vm.uno = 30;
            }

        };
    }
    boxy.$inject = ['$compile'];
    angular.module('playground').directive('boxy', boxy);

    var owieczka = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "owieczkaCtrl",
            bindToController: true,
            template: '<div>hello from directive B As vm: {{owieczkaCtrl.uno}}<div>{{owieczkaCtrl.title1}}',
            controller: function ($scope) {
                var vm = this;
                vm.uno = 80;
            }

        };
    }
    owieczka.$inject = ['$compile'];
    angular.module('playground').directive('owieczka', owieczka);

})();
/**
 * Created by Rob on 12/15/2014.
 */
//
(function () {
    'use strict';
    var showPanes = function ($compile,shows) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "showPanesCtrl",
            bindToController: true,
            template: '<div>{{showPanesCtrl.lala3.items[0].name}} {{showPanesCtrl.lala2}}</div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala2 = 'showPanes hello';
                vm.lala3 = shows;
                console.log('fin',shows)
            }

        };
    }
    showPanes.$inject = ['$compile','shows'];
    angular.module('venueShows').directive('showPanes', showPanes);
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
            bindToController: true,

            template: '<div>{{venueShowBigCtrl.lala}}</div>' +
                        '<div>{{venueShowBigCtrl.title1}}<div>',
            controller: function ($scope) {
                var vm = this;
                vm.lala = 10;
            }

        };
    }
    venueShowBig.$inject = ['$compile'];
    angular.module('venueShows').directive('venueShowBig', venueShowBig);
})();
/**
 * Created by Rob on 12/15/2014.
 */

(function () {
    'use strict';

    var VenueShowsService = function ($http, $log, shows) {

        var getShows = function () {
            var promise = $http.get('/api/shows')
                .success(function (response) {
                    shows.items = response;
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;
        };

        return {
            getShows: getShows
        };

    };

    VenueShowsService.$inject = ['$http', '$log', 'shows'];
    angular.module('venueShows').factory('VenueShowsService', VenueShowsService);

})();

/**
 * Created by Rob on 1/26/2015.
 */

angular.module('venueShows').factory('shows', ["$rootScope", function ($rootScope) {
    var shows = {};
    return shows;
}]);