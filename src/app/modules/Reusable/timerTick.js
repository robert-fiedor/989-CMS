/**
 * Created by Rob on 1/26/2015.
 */

angular.module('reusable').factory('timerTick', ['$interval', function ($interval) {

    var ticker = 100;

    //$scope.$watch('timerTick.ticker()', function (newVal, oldVal) {
    //    console.log(1225, newVal);
    //});

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
        $interval(callAtInterval, 50);
    };

    return {
        start: start,
        stop: stop,
        ticker:getTicker
    };

}]);