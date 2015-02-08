/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').factory('photoshopFile', ["$rootScope", function ($rootScope) {
    var photoshopFile = {
        _id: "",
        content: {
            layers: {}, name: ""
        }
    };
    return photoshopFile;
}]);