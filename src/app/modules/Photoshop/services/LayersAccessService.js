/**
 * Created by Rob on 2/1/2015.
 */

(function () {
    'use strict';

    var LayersAccessService = function (photoshopFile, currentlySelected) {


        var getLayers = function () {
            return photoshopFile.content.layers;
        };

        var addLayer = function () {

            //console.log('currentlySelected',currentlySelected.tool)


            //return photoshopFile.content.layers.push({newlayer:true});
        };


        return {
            getLayers: getLayers,
            addLayer: addLayer
        };
    }
    LayersAccessService.$inject = ['photoshopFile', 'currentlySelected'];
    angular.module('photoshop').factory('LayersAccessService', LayersAccessService);
})();