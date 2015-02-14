/**
 * Created by Rob on 1/26/2015.
 */

angular.module('reusable').service('timerTick', ['$interval', function ($interval) {

    var ticker = 100;

    var getTicker = function(){
        return ticker;
    };

    var interval = $interval;

    var callAtInterval = function () {
        ticker++;
    };

    var stop = function () {
        return '';
    };

    var start = function () {
        $interval(callAtInterval, 1000);
    };

    return {
        start: start,
        stop: stop,
        ticker:getTicker
    };

}]);