(function () {
    'use strict';

    angular.module('reusable', []);


    angular.module('venue', ['ngRoute', 'ui.router', 'venueShows', 'playground', 'photoshop']);


    angular.module('venueShows', []);
    angular.module('playground', []);
    angular.module('photoshop', ['reusable']);


})
();

//'ui.bootstrap'

