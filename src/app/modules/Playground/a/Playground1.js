/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';


    var directiveA = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "directiveACtrl",
            bindToController: true,
            transclude:true,
            template: '<div>hello from directive As vm: {{directiveACtrl.uno}}<div>'
                        +'<ng-transclude></ng-transclude>'
                        +'<div>end of A</div>',
            controller: function ($scope) {
                var vm = this;
                vm.uno = 30;
            }

        };
    }
    directiveA.$inject = ['$compile'];
    angular.module('playground').directive('directiveA', directiveA);



    var directiveB = function ($compile) {
        return {
            restrict: 'E',
            scope: {
                title1: '@'
            },
            replace: false,
            controllerAs: "directiveBCtrl",
            bindToController: true,
            template: '<div>hello from directive B As vm: {{directiveBCtrl.uno}}<div>',
            controller: function ($scope) {
                var vm = this;
                vm.uno = 80;
            }

        };
    }
    directiveB.$inject = ['$compile'];
    angular.module('playground').directive('directiveB', directiveB);

})();