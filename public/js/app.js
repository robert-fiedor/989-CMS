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

    var PhotoshopController = function (LayersAccessService, $scope, $http, PhotoshopDataService, photoshopFile, photoshopSettings, currentlySelected) {

        var vm = this;
        vm.currentId = '54d692ce6d60d5041fca0238';
        vm.tools = photoshopSettings.tools;
        $scope.photoshopFile = photoshopFile;
        $scope.currentlySelected = currentlySelected;

        //get file
        PhotoshopDataService.getFile(vm.currentId).then(function () {
            $scope.currentlySelected.layer = $scope.photoshopFile.content.layers[0];
        });
        $scope.$watch('photoshopFile.content', function (newVal, oldVal) {
        });

        vm.updateFileTemp = function () {
            PhotoshopDataService.updateFile(vm.currentId);
        };

        vm.deleteLayer = function () {
            LayersAccessService.deleteLayer();
        };

        //temp:
        $scope.createFile = function () {
            PhotoshopDataService.createFile().then(function (d) {
                console.log('dddd', d.data.file);
            });
        };

        $scope.getFiles = function () {
            PhotoshopDataService.getFiles().then(function (d) {
                console.log('dddd', d.data);
            });
        }

    };

    PhotoshopController.$inject = ['LayersAccessService', '$scope', '$http', 'PhotoshopDataService', 'photoshopFile', 'photoshopSettings', 'currentlySelected'];
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

    angular.module('photoshop')
        .directive('layer', ['currentlySelected', function (currentlySelected) {
            return {
                scope: {
                    model: '='
                },
                restrict: 'E',
                replace: false,
                bindToController: true,
                //template: 'layer!',
                templateUrl:'/partials/directives/photoshop/layer.html',
                controller: 'LayerController as layerCtrl',
                link: function (scope) {

                }
            };
        }]
    )
        .controller("LayerController", [
            'currentlySelected',
            'LayersAccessService',
            'photoshopFile',
            function (currentlySelected,
                      LayersAccessService,
                      photoshopFile) {



                var vm = this;

                //console.log(, '******')

                vm.chh = function(){
                    return vm.model.layerX+'px';
                }


            }])

})();
/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';

    angular.module('photoshop')
        .directive('photoCanvas', ['currentlySelected', function (currentlySelected) {
            return {
                restrict: 'E',
                replace: false,
                bindToController: true,
                templateUrl:'/partials/directives/photoshop/photoCanvas.html',
                controller: 'PhotoCanvasController as photoCanvasCtrl',
                link: function (scope) {
                    scope.$watch('currentlySelected.tool', function (newVal, oldVal) {
                        console.log(newVal)
                    });
                }
            };
        }]
    )
        .controller("PhotoCanvasController", [
            'currentlySelected',
            'LayersAccessService',
            'photoshopFile',
            function (currentlySelected,
                      LayersAccessService,
                      photoshopFile) {

                var vm = this;
                console.log('here 1')

                vm.photoshopFile = photoshopFile;


                vm.canvasClicked = function ($event) {

                    console.log(123999);


                    if (currentlySelected.tool.createsLayer) {
                        LayersAccessService.addLayer();
                        currentlySelected.layer.layerX = $event.layerX;
                        currentlySelected.layer.layerY = $event.layerY;
                    }
                }

            }])

    //var photoCanvas =     photoCanvas.$inject = ['$scope','currentlySelected'];
})();
/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var properties = function () {
        return {
            restrict: 'E',
            scope: {
                printObject: '='
            },
            replace: false,
            controllerAs: "propertiesCtrl",
            bindToController: true,
            templateUrl:'/partials/directives/photoshop/properties.html',
            controller: function ($scope) {
                var vm = this;
            }

        };
    }
    properties.$inject = [];
    angular
        .module('photoshop')
        .directive('properties', properties);
})();


(function () {
    'use strict';

    angular.module('photoshop')
        .filter('filterProperties', function () {
            return function (item) {

                var result = {};

                for (var key in item) {

                    var isPresentInRenderableKeys = angular.isDefined(item.renderable_keys[key]);
                    if (isPresentInRenderableKeys) result[key] = item[key]
                }

                return result;
            }
        });

})();



/**
 * Created by Rob on 1/31/2015.
 */


(function () {
    'use strict';

    angular.module('photoshop').directive('selectOne', function () {
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
            controllerAs: 'selectOneCtrl',
            bindToController: true,
            templateUrl:'/partials/directives/photoshop/selectOne.html',

            link: function (scope, element, attrs, ngModelController) { },
            controller: function ($scope) {
                var vm = this;
                vm.indexOrObject = function (index, item) {
                    var result = vm.valueIsIndex === 'true' ? index : item;
                    return result;
                };

                vm.isActive = function (index, item) {
                    return vm.answerObjectToBindTo[vm.keyOfAnswerObjectToBindTo] === vm.indexOrObject(index, item);
                };

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
                tabTitle: '@',
                inputTitle:'='
            },
            replace: false,
            controllerAs: "phoTabCtrl",
            transclude: true,
            bindToController: true,
            templateUrl:'/partials/directives/photoshop/tab.html',
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
 * Created by Rob on 2/8/2015.
 */


(function () {
    'use strict';
    angular.module('photoshop').constant('photoshopSettings',
        {
            TEXT_LAYER: 'TEXT_LAYER',
            CANVAS_LAYER: 'CANVAS_LAYER',

            layerTemplate: {
                layerType: null,
                layerName: 'Text Layer',
                layerX: null,
                layerY: null,
                opacity: 100,
                visible: true,
                locked: false,

                //these keys of this objects will be rendered in properties
                //and labeled as in the value
                renderable_keys: {
                    layerName : 'Name',
                    layerX : 'X position',
                    layerY : 'Y position',
                    opacity: 'Opacity'
                }

            },

            tools: [
                {
                    name: 'Brush',
                    icon: ''
                },
                {
                    name: 'Paint',
                    icon: ''
                },
                {
                    name: 'Move',
                    icon: ''
                },
                {
                    name: 'Text',
                    icon: '',
                    createsLayer: 'TEXT_LAYER'
                }
            ]
        });
})();

/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var LayersAccessService = function (photoshopSettings, photoshopFile, currentlySelected) {


        var getLayers = function () {
            return photoshopFile.content.layers;
        };

        var addLayer = function () {

            //here look what kind of layer will be added
            //layers should inherit from some shared object

            var layer = angular.copy(photoshopSettings.layerTemplate);
            layer.layerType = photoshopSettings.TEXT_LAYER;

            photoshopFile.content.layers.push(layer);
            currentlySelected.layer = layer;


        };

        var deleteLayer = function () {
            _.each(photoshopFile.content.layers, function (val, index) {
                if (val === currentlySelected.layer) {
                    photoshopFile.content.layers.splice(index, 1)
                    currentlySelected.layer = photoshopFile.content.layers[index];

                }
            })
        };


        return {
            getLayers: getLayers,
            addLayer: addLayer,
            deleteLayer: deleteLayer
        };
    }
    LayersAccessService.$inject = ['photoshopSettings', 'photoshopFile', 'currentlySelected'];
    angular.module('photoshop').factory('LayersAccessService', LayersAccessService);
})();
/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var PhotoshopDataService = function ($http, $log, photoshopFile) {

        var createFile = function (name) {
            //var promise = $http.post('/api/photoshop/file',
            //    {name: name, layers: ['a', 'b']})
            //    .success(function (response) {
            //
            //    })
            //    .error(function (data, status, headers, config) {
            //        $log.debug('Error createFile()', status);
            //    });
            //
            //return promise;
        };


        var getFiles = function () {

            var promise = $http.get('/api/photoshop/file')
                .success(function (response) {
                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var getFile = function (id) {

            var promise = $http.get('/api/photoshop/file/' + id)
                .success(function (response, err, err2) {

                    console.log('response', response)
                    photoshopFile.content.layers = response.layers;
                    photoshopFile.content.name = response.name;

                })
                .error(function (data, status, headers, config) {
                    $log.debug('Error getting sequence');
                });
            return promise;

        };

        var updateFile = function (id) {

            console.log('b', photoshopFile.content)

            var promise = $http.post('/api/photoshop/file/' + id, photoshopFile.content);

            return promise;
            //
        };

        return {
            createFile: createFile,
            getFiles: getFiles,
            getFile: getFile,
            updateFile: updateFile

        };
    }
    PhotoshopDataService.$inject = ['$http', '$log', 'photoshopFile'];
    angular.module('photoshop').factory('PhotoshopDataService', PhotoshopDataService);
})();
/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').service('currentlySelected',
    ['photoshopSettings',function (photoshopSettings) {
    var currentlySelected = {

        //by default select first tool:
        tool:photoshopSettings.tools[1],
        layer:null

    };
    return currentlySelected;
}]);
/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').factory('photoshopFile', ["$rootScope", function ($rootScope) {
    var photoshopFile = {
        _id: "",
        content: {
            layers: {},
            name: ""
        }
    };
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