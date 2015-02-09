/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').service('currentlySelected', ["$rootScope", function ($rootScope) {
    var currentlySelected = {
        tool:null,
        layer:null
    };
    return currentlySelected;
}]);