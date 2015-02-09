/**
 * Created by Rob on 12/15/2014.
 */
//

(function () {
    'use strict';
    var photoCanvas = function () {
        return {
            restrict: 'E',
            scope: {
            },
            replace: false,
            controllerAs: "photoCanvasCtrl",
            bindToController: true,
            template: '<div class="photo-canvas">PhotoCanvas</div>',
            controller: function ($scope) {
                var vm = this;
            }

        };
    }
    photoCanvas.$inject = [];
    angular.module('photoshop').directive('photoCanvas', photoCanvas);
})();