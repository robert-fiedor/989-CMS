/**
 * Created by Rob on 11/23/2014.
 */


//myAppModule.factory('CreditCard', ['$resource', function ($resource) {
//    return $resource('/user/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
//        charge: {
//            method: 'POST',
//            params: {charge: true},
//            isArray: false
//        });
//}]);

angular.module('doctors')
    .factory('CreditCardService', ['$resource', function ($resource) {

        return $resource('/useros/: userId/ card/:cardId', {userId: 123, cardId: '@id'}, {
                charge: {
                    method: 'POST',
                    params: {charge: true},
                    isArray: false
                }
            }
        )
    }]);

