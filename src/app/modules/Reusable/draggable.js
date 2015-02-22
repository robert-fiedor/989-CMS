/**
 * Created by Rob on 2/14/2015.
 */

//http://stackoverflow.com/questions/14589516/basic-draggable-with-angularjs
//http://jsfiddle.net/QZ6kN/3/

(function () {
    'use strict';

    angular.module('photoshop')
        .directive('draggable',
        ['currentlySelected',
            'timerTick',
            function (currentlySelected,
                      timerTick) {
                return {
                    restrict: 'A',
                    bindToController: true,
                    controller: 'DraggableController as draggableCtrl',
                    link: function preLink(scope, element, attrs) {

                        element.draggable();

                        element.bind("mousedown", function () {
                            console.log('down')
                        });
                        element.bind("mouseup", function () {
                            console.log('up')
                        });

                    }
                };
            }]
    )
        .controller("DraggableController", [
            'currentlySelected',
            'LayersAccessService',
            'photoshopFile',
            function (currentlySelected,
                      LayersAccessService,
                      photoshopFile) {

                var vm = this;
            }]);

})();