/**
 * Created by Rob on 1/26/2015.
 */

angular.module('photoshop').service('currentlySelected', ['photoshopSettings',function (photoshopSettings) {
    var currentlySelected = {
        //by default select first tool:
        tool:photoshopSettings.tools[0],
        layer:null
    };
    return currentlySelected;
}]);