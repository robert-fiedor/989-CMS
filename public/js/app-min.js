!function(){"use strict";angular.module("venue",["ui.bootstrap","ngRoute","ui.router","$baseAppSettings","venueShows"]),angular.module("venueShows",[])}(),function(){"use strict";var a=function(){console.log("HomeController new")};a.$inject=["$scope","$http"],angular.module("venue").controller("HomeController",a)}(),function(){"use strict";angular.module("venue").controller("ListController",["$scope","$http",function(){console.log("ListController")}])}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{},replace:!1,template:"<div>123</div>",link:function(){}}};a.$inject=["$compile"],angular.module("venueShows").directive("venueShowMain",a)}(),function(){"use strict";var a=function(){var a=function(){return!0};return{getRecommendations:a}};a.$inject=["$rootScope","$window","$http","$log"],angular.module("venueShows").factory("VenueShowsService",a)}(),angular.module("venue").config(["$baseAppSettings","$locationProvider","$stateProvider","$urlRouterProvider",function(a,b,c){angular.forEach(a.routes.client,function(a){c.state(a.state,{url:a.urlRequested,templateUrl:a.templateUrl,controller:a.controller||null})}),b.html5Mode(!0)}]).run(["$state",function(a){a.transitionTo("home")}]).controller("AppController",["$scope",function(){}]);
//# sourceMappingURL=app-min.js.map