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