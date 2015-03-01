/**
 * Created by Rob on 1/31/2015.
 */


(function () {
    'use strict';

    angular.module('photoshop').directive('selectOne', function () {
        return {
            restrict: 'EA',
            scope: {
                data: '=',
                answerObjectToBindTo: '=',
                keyOfAnswerObjectToBindTo: '@',
                uniqueRadioButtonName: '@',
                valueIsIndex: '@',
                triggerOnChange: '&'
            },
            transclude:true,
            controllerAs: 'selectOneCtrl',
            bindToController: true,
            templateUrl:'/partials/directives/photoshop/selectOne.html',

            link: function (scope, element, attrs, ngModelController) { },
            controller: function ($scope) {
                var vm = this;
                vm.indexOrObject = function (index, item) {
                    var result = vm.valueIsIndex === 'true' ? index : item;
                    return result;
                };

                vm.isActive = function (index, item) {
                    return vm.answerObjectToBindTo[vm.keyOfAnswerObjectToBindTo] === vm.indexOrObject(index, item);
                };

            }
        }
    });

})();



