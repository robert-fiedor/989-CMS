/**
 * Created by Rob on 2/8/2015.
 */


(function () {
    'use strict';
    angular.module('photoshop').constant('photoshopSettings',
        {
            TEXT_LAYER:'TEXT_LAYER',
            CANVAS_LAYER:'CANVAS_LAYER',

            layerTemplate:{
                layerType : null,
                layerName:'Text Layer',
                x:null,
                y:null,
                opacity:100
                
            },

            tools: [
                {
                    name: 'Move',
                    icon: ''
                },
                {
                    name: 'Text',
                    icon: '',
                    createsLayer:'TEXT_LAYER'
                }
            ]
        });
})();
