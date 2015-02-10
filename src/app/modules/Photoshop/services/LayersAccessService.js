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