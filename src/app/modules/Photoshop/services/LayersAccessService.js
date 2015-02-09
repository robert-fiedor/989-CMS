/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var LayersAccessService = function (photoshopSettings,photoshopFile, currentlySelected) {


        var getLayers = function () {
            return photoshopFile.content.layers;
        };

        var addLayer = function () {

            console.log(currentlySelected.tool.createsLayer, '<--')

            photoshopFile.content.layers.push(
                {layerType:photoshopSettings.TEXT_LAYER}
            );
        };


        return {
            getLayers: getLayers,
            addLayer: addLayer
        };
    }
    LayersAccessService.$inject = ['photoshopSettings','photoshopFile', 'currentlySelected'];
    angular.module('photoshop').factory('LayersAccessService', LayersAccessService);
})();