!function(){"use strict";angular.module("venue",["ngRoute","ui.router","venueShows","playground","photoshop"]),angular.module("venueShows",[]),angular.module("playground",[]),angular.module("photoshop",[])}(),function(){"use strict";var a=function(a,b,c,d){a.shows=d,a.tentyp="sl",c.getShows().then(function(){console.log(1,d)},function(){console.log(2,d)})};a.$inject=["$scope","$http","VenueShowsService","shows"],angular.module("venue").controller("HomeController",a)}(),function(){"use strict";angular.module("venue").controller("ListController",["$scope","$http",function(){console.log("ListController")}])}(),function(){"use strict";var a=function(a,b,c,d){var e=this;e.currentId="54d6625aaed0dcc40ff2c001",a.photoshopFile=d,a.$watch("photoshopFile.content",function(a){console.log("* photoshopFile.content",a)}),c.getFile(e.currentId).then(function(){}),e.updateFileTemp=function(){a.photoshopFile.content.name="XXX",console.log("a",a.photoshopFile.content),c.updateFile(e.currentId).then(function(){})},a.createFile=function(){c.createFile().then(function(a){console.log("dddd",a.data.file)})},a.getFiles=function(){c.getFiles().then(function(a){console.log("dddd",a.data)})},a.logobject=function(){console.log("logobject",d)}};a.$inject=["$scope","$http","PhotoshopDataService","photoshopFile"],angular.module("photoshop").controller("PhotoshopController",a)}(),function(){"use strict";var a=function(a){console.log("playgroundController new"),a.yo=1};a.$inject=["$scope","$http"],angular.module("playground").controller("PlaygroundController",a)}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"dirACtrl",bindToController:!0,template:"<div>ej ej ej{{dirACtrl.lala2}}{{dirACtrl.title1}}</div>",controller:function(){var a=this;a.lala2="dirACtrl hello ,live value",console.log("hello dira")}}};a.$inject=[],angular.module("photoshop").directive("dirA",a)}(),function(){"use strict";angular.module("photoshop").directive("radioButtons",function(){return{restrict:"EA",scope:{data:"=",answerObjectToBindTo:"=",keyOfAnswerObjectToBindTo:"@",uniqueRadioButtonName:"@",valueIsIndex:"@",triggerOnChange:"&"},transclude:!0,controllerAs:"ctrl",bindToController:!0,template:'<div ng-repeat="item in ctrl.data"><label ng-class="{&apos;photoshop-active&apos; : ctrl.isActive($index,item) }"><input type="radio" name="{{::ctrl.uniqueRadioButtonName}}" ng-model="ctrl.answerObjectToBindTo[ctrl.keyOfAnswerObjectToBindTo]" ng-value="ctrl.indexOrObject($index,item)" ng-change="ctrl.triggerOnChange()"></input><div ng-transclude></div></label></div>',link:function(){},controller:function(){var a=this;a.indexOrObject=function(b,c){var d="true"===a.valueIsIndex?b:c;return d},a.isActive=function(b,c){return a.answerObjectToBindTo[a.keyOfAnswerObjectToBindTo]===a.indexOrObject(b,c)}}}})}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{tabTitle:"@"},replace:!1,controllerAs:"phoTabCtrl",transclude:!0,bindToController:!0,template:'<div class="pho-tab"><div class="pho-tab-header"><h10 class="pho-tab-title" ng-bind="phoTabCtrl.tabTitle"></h10></div><div ng-transclude></div></div>',controller:function(){var a=this;a.lala2="phoTabCtrl hello ,live value",console.log("hello phoTabs")}}};a.$inject=[],angular.module("photoshop").directive("phoTab",a)}(),function(){"use strict";var a=function(a,b,c){var d=function(){},e=function(){var c=a.get("/api/photoshop/file").success(function(){}).error(function(){b.debug("Error getting sequence")});return c},f=function(d){var e=a.get("/api/photoshop/file/"+d).success(function(a){console.log("response",a),c.content.layers=a.layers,c.content.name=a.name}).error(function(){b.debug("Error getting sequence")});return e},g=function(b){console.log("b",c.content);var d=a.post("/api/photoshop/file/"+b,c.content);return d};return{createFile:d,getFiles:e,getFile:f,updateFile:g}};a.$inject=["$http","$log","photoshopFile"],angular.module("photoshop").factory("PhotoshopDataService",a)}(),angular.module("photoshop").factory("photoshopFile",["$rootScope",function(){var a={_id:"",content:{layers:{},name:""}};return a}]),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"boxyCtrl",bindToController:!0,transclude:!0,template:"<div>hello from directive As vm: {{boxyCtrl.uno}}<div><ng-transclude></ng-transclude><div>end of A , zapytanie: {{boxyCtrl.title1}}</div>",controller:function(){var a=this;a.uno=30}}};a.$inject=["$compile"],angular.module("playground").directive("boxy",a);var b=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"owieczkaCtrl",bindToController:!0,template:"<div>hello from directive B As vm: {{owieczkaCtrl.uno}}<div>{{owieczkaCtrl.title1}}",controller:function(){var a=this;a.uno=80}}};b.$inject=["$compile"],angular.module("playground").directive("owieczka",b)}(),function(){"use strict";var a=function(a,b){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"showPanesCtrl",bindToController:!0,template:"<div>{{showPanesCtrl.lala3.items[0].name}} {{showPanesCtrl.lala2}}</div>",controller:function(){var a=this;a.lala2="showPanes hello",a.lala3=b,console.log("fin",b)}}};a.$inject=["$compile","shows"],angular.module("venueShows").directive("showPanes",a)}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"venueShowBigCtrl",bindToController:!0,template:"<div>{{venueShowBigCtrl.lala}}</div><div>{{venueShowBigCtrl.title1}}<div>",controller:function(){var a=this;a.lala=10}}};a.$inject=["$compile"],angular.module("venueShows").directive("venueShowBig",a)}(),function(){"use strict";var a=function(a,b,c){var d=function(){var d=a.get("/api/shows").success(function(a){c.items=a}).error(function(){b.debug("Error getting sequence")});return d};return{getShows:d}};a.$inject=["$http","$log","shows"],angular.module("venueShows").factory("VenueShowsService",a)}(),angular.module("venueShows").factory("shows",["$rootScope",function(){var a={};return a}]);
//# sourceMappingURL=app-min.js.map