/**
 * Created by Rob on 2/14/2015.
 */

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
                    link: function (scope, element, attrs) {
                        console.log('succ', element);

                        var el = element[0];

                        var func = function () {
                            console.log('mouse move')
                        };

                        element.bind("mousedown", function () {
                            console.log('down')

                            el.addEventListener(
                                'mousemove',
                                func,
                                false
                            );


                        });
                        element.bind("mouseup", function () {
                            console.log('up')
                            el.removeEventListener('mousemove', func);
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