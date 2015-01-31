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

                keyNameText: '@',
                uniqueRadioButtonName: '@',
                valueIsIndex: '@',
                triggerOnChange: '&'
            },
            controllerAs: 'ctrl',
            bindToController: true,
            template:
            '<div ng-repeat="a in ctrl.data">' +
            '<label ng-class="{&apos;photoshop-active&apos; : ctrl.isActive($index,a) }">' +
            '<input type="radio" name="{{::ctrl.uniqueRadioButtonName}}" ng-model="ctrl.answerObjectToBindTo[ctrl.keyOfAnswerObjectToBindTo]" ng-value="ctrl.indexOrObject($index,a)" ng-change="ctrl.triggerOnChange()"></input>' +
            '<span class="photoshop-answer-choice-text" ng-bind="::a[ctrl.keyNameText]"></span>' +
            '</label>' +
            '</div>',
            link: function (scope, element, attrs, ngModelController) { },
            controller: function ($scope) {
                var vm = this;
                vm.indexOrObject = function (index, a) {
                    var result = vm.valueIsIndex === 'true' ? index : a;
                    return result;
                }

                vm.isActive = function (index, a) {
                    return vm.answerObjectToBindTo[vm.keyOfAnswerObjectToBindTo] === vm.indexOrObject(index, a);
                }

            }
        }
    });

})();



