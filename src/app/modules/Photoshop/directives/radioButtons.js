/**
 * Created by Rob on 1/31/2015.
 */


(function () {
    'use strict';

    angular.module('photoshop').directive('radioButtons', function () {
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
            controllerAs: 'ctrl',
            bindToController: true,
            template:
            '<div ng-repeat="item in ctrl.data">' +
            '<label ng-class="{&apos;photoshop-active&apos; : ctrl.isActive($index,item) }">' +
            '<input type="radio" name="{{::ctrl.uniqueRadioButtonName}}" ng-model="ctrl.answerObjectToBindTo[ctrl.keyOfAnswerObjectToBindTo]" ng-value="ctrl.indexOrObject($index,item)" ng-change="ctrl.triggerOnChange()"></input>' +
            '<div ng-transclude></div>' +
            '</label>' +
            '</div>',
            link: function (scope, element, attrs, ngModelController) { },
            controller: function ($scope) {
                var vm = this;
                vm.indexOrObject = function (index, item) {
                    var result = vm.valueIsIndex === 'true' ? index : item;
                    return result;
                }

                vm.isActive = function (index, item) {
                    return vm.answerObjectToBindTo[vm.keyOfAnswerObjectToBindTo] === vm.indexOrObject(index, item);
                }

            }
        }
    });

})();



