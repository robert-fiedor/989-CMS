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
                    layerType : 'Layer Type',
                    layerName : 'Name',
                    layerX : 'X position',
                    layerY : 'Y position',
                    opacity: 'Opacity',
                    visible : 'Visible',
                    locked : 'Locked'
                }

            },

            tools: [
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
