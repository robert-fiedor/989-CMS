!function(){"use strict";angular.module("venue",["ngRoute","ui.router","venueShows","playground"]),angular.module("venueShows",[]),angular.module("playground",[])}(),function(){"use strict";var a=function(a,b,c,d){a.shows=d,a.tentyp="sl",c.getShows().then(function(){console.log(1,d)},function(){console.log(2,d)})};a.$inject=["$scope","$http","VenueShowsService","shows"],angular.module("venue").controller("HomeController",a)}(),function(){"use strict";angular.module("venue").controller("ListController",["$scope","$http",function(){console.log("ListController")}])}(),function(){"use strict";var a=function(a){console.log("playgroundController new"),a.yo=1};a.$inject=["$scope","$http"],angular.module("playground").controller("PlaygroundController",a)}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"boxyCtrl",bindToController:!0,transclude:!0,template:"<div>hello from directive As vm: {{boxyCtrl.uno}}<div><ng-transclude></ng-transclude><div>end of A , zapytanie: {{boxyCtrl.title1}}</div>",controller:function(){var a=this;a.uno=30}}};a.$inject=["$compile"],angular.module("playground").directive("boxy",a);var b=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"owieczkaCtrl",bindToController:!0,template:"<div>hello from directive B As vm: {{owieczkaCtrl.uno}}<div>{{owieczkaCtrl.title1}}",controller:function(){var a=this;a.uno=80}}};b.$inject=["$compile"],angular.module("playground").directive("owieczka",b)}(),function(){"use strict";var a=function(a,b){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"showPanesCtrl",bindToController:!0,template:"<div>{{showPanesCtrl.lala3.items[0]}} {{showPanesCtrl.lala2}}</div>",controller:function(){var a=this;a.lala2="showPanes hello",a.lala3=b,console.log("fin",b)}}};a.$inject=["$compile","shows"],angular.module("venueShows").directive("showPanes",a)}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"venueShowBigCtrl",bindToController:!0,template:"<div>{{venueShowBigCtrl.lala}}</div><div>{{venueShowBigCtrl.title1}}<div>",controller:function(){var a=this;a.lala=10}}};a.$inject=["$compile"],angular.module("venueShows").directive("venueShowBig",a)}(),function(){"use strict";var a=function(a,b,c){var d=function(){var d=a.get("/api/shows").success(function(a){c.items=a}).error(function(){b.debug("Error getting sequence")});return d};return{getShows:d}};a.$inject=["$http","$log","shows"],angular.module("venueShows").factory("VenueShowsService",a)}(),angular.module("venueShows").factory("shows",["$rootScope",function(){var a={};return a}]);
//# sourceMappingURL=app-min.js.map