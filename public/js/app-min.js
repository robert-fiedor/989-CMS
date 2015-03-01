!function(){"use strict";angular.module("venue",["ngRoute","ui.router","venueShows","playground","photoshop"]),angular.module("venueShows",[]),angular.module("playground",[]),angular.module("photoshop",[])}(),function(){"use strict";var a=function(a,b,c,d){a.shows=d,a.tentyp="sl",c.getShows().then(function(){console.log(1,d)},function(){console.log(2,d)})};a.$inject=["$scope","$http","VenueShowsService","shows"],angular.module("venue").controller("HomeController",a)}(),function(){"use strict";angular.module("venue").controller("ListController",["$scope","$http",function(){console.log("ListController")}])}(),function(){"use strict";var a=function(a,b,c,d,e,f,g){var h=this;h.currentId="54d692ce6d60d5041fca0238",h.tools=f.tools,b.photoshopFile=e,b.currentlySelected=g,d.getFile(h.currentId).then(function(){b.currentlySelected.layer=b.photoshopFile.content.layers[0]}),b.$watch("photoshopFile.content",function(){}),h.updateFileTemp=function(){d.updateFile(h.currentId)},h.deleteLayer=function(){a.deleteLayer()},b.createFile=function(){d.createFile().then(function(a){console.log("dddd",a.data.file)})},b.getFiles=function(){d.getFiles().then(function(a){console.log("dddd",a.data)})}};a.$inject=["LayersAccessService","$scope","$http","PhotoshopDataService","photoshopFile","photoshopSettings","currentlySelected"],angular.module("photoshop").controller("PhotoshopController",a)}(),function(){"use strict";var a=function(a){console.log("playgroundController new"),a.yo=1};a.$inject=["$scope","$http"],angular.module("playground").controller("PlaygroundController",a)}(),function(){"use strict";angular.module("photoshop").directive("layer",["currentlySelected",function(){return{scope:{model:"="},restrict:"E",replace:!1,bindToController:!0,templateUrl:"/partials/directives/photoshop/layer.html",controller:"LayerController as layerCtrl",link:function(){}}}]).controller("LayerController",["currentlySelected","LayersAccessService","photoshopFile",function(){var a=this;a.chh=function(){return a.model.layerX+"px"}}])}(),function(){"use strict";angular.module("photoshop").directive("photoCanvas",["currentlySelected",function(){return{restrict:"E",replace:!1,bindToController:!0,templateUrl:"/partials/directives/photoshop/photoCanvas.html",controller:"PhotoCanvasController as photoCanvasCtrl",link:function(a){a.$watch("currentlySelected.tool",function(a){console.log(a)})}}}]).controller("PhotoCanvasController",["currentlySelected","LayersAccessService","photoshopFile",function(a,b,c){var d=this;console.log("here 1"),d.photoshopFile=c,d.canvasClicked=function(c){console.log(123999),a.tool.createsLayer&&(b.addLayer(),a.layer.layerX=c.layerX,a.layer.layerY=c.layerY)}}])}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{printObject:"="},replace:!1,controllerAs:"propertiesCtrl",bindToController:!0,templateUrl:"/partials/directives/photoshop/properties.html",controller:function(){}}};a.$inject=[],angular.module("photoshop").directive("properties",a)}(),function(){"use strict";angular.module("photoshop").filter("filterProperties",function(){return function(a){var b={};for(var c in a){var d=angular.isDefined(a.renderable_keys[c]);d&&(b[c]=a[c])}return b}})}(),function(){"use strict";angular.module("photoshop").directive("selectOne",function(){return{restrict:"EA",scope:{data:"=",answerObjectToBindTo:"=",keyOfAnswerObjectToBindTo:"@",uniqueRadioButtonName:"@",valueIsIndex:"@",triggerOnChange:"&"},transclude:!0,controllerAs:"selectOneCtrl",bindToController:!0,templateUrl:"/partials/directives/photoshop/selectOne.html",link:function(){},controller:function(){var a=this;a.indexOrObject=function(b,c){var d="true"===a.valueIsIndex?b:c;return d},a.isActive=function(b,c){return a.answerObjectToBindTo[a.keyOfAnswerObjectToBindTo]===a.indexOrObject(b,c)}}}})}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{tabTitle:"@",inputTitle:"="},replace:!1,controllerAs:"phoTabCtrl",transclude:!0,bindToController:!0,templateUrl:"/partials/directives/photoshop/tab.html",controller:function(){var a=this;a.lala2="phoTabCtrl hello ,live value",console.log("hello phoTabs")}}};a.$inject=[],angular.module("photoshop").directive("phoTab",a)}(),function(){"use strict";angular.module("photoshop").constant("photoshopSettings",{TEXT_LAYER:"TEXT_LAYER",CANVAS_LAYER:"CANVAS_LAYER",layerTemplate:{layerType:null,layerName:"Text Layer",layerX:null,layerY:null,opacity:100,visible:!0,locked:!1,renderable_keys:{layerName:"Name",layerX:"X position",layerY:"Y position",opacity:"Opacity"}},tools:[{name:"Brush",icon:""},{name:"Paint",icon:""},{name:"Move",icon:""},{name:"Text",icon:"",createsLayer:"TEXT_LAYER"}]})}(),function(){"use strict";var a=function(a,b,c){var d=function(){return b.content.layers},e=function(){var d=angular.copy(a.layerTemplate);d.layerType=a.TEXT_LAYER,b.content.layers.push(d),c.layer=d},f=function(){_.each(b.content.layers,function(a,d){a===c.layer&&(b.content.layers.splice(d,1),c.layer=b.content.layers[d])})};return{getLayers:d,addLayer:e,deleteLayer:f}};a.$inject=["photoshopSettings","photoshopFile","currentlySelected"],angular.module("photoshop").factory("LayersAccessService",a)}(),function(){"use strict";var a=function(a,b,c){var d=function(){},e=function(){var c=a.get("/api/photoshop/file").success(function(){}).error(function(){b.debug("Error getting sequence")});return c},f=function(d){var e=a.get("/api/photoshop/file/"+d).success(function(a){console.log("response",a),c.content.layers=a.layers,c.content.name=a.name}).error(function(){b.debug("Error getting sequence")});return e},g=function(b){console.log("b",c.content);var d=a.post("/api/photoshop/file/"+b,c.content);return d};return{createFile:d,getFiles:e,getFile:f,updateFile:g}};a.$inject=["$http","$log","photoshopFile"],angular.module("photoshop").factory("PhotoshopDataService",a)}(),angular.module("photoshop").service("currentlySelected",["photoshopSettings",function(a){var b={tool:a.tools[1],layer:null};return b}]),angular.module("photoshop").factory("photoshopFile",["$rootScope",function(){var a={_id:"",content:{layers:{},name:""}};return a}]),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"boxyCtrl",bindToController:!0,transclude:!0,template:"<div>hello from directive As vm: {{boxyCtrl.uno}}<div><ng-transclude></ng-transclude><div>end of A , zapytanie: {{boxyCtrl.title1}}</div>",controller:function(){var a=this;a.uno=30}}};a.$inject=["$compile"],angular.module("playground").directive("boxy",a);var b=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"owieczkaCtrl",bindToController:!0,template:"<div>hello from directive B As vm: {{owieczkaCtrl.uno}}<div>{{owieczkaCtrl.title1}}",controller:function(){var a=this;a.uno=80}}};b.$inject=["$compile"],angular.module("playground").directive("owieczka",b)}(),function(){"use strict";var a=function(a,b){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"showPanesCtrl",bindToController:!0,template:"<div>{{showPanesCtrl.lala3.items[0].name}} {{showPanesCtrl.lala2}}</div>",controller:function(){var a=this;a.lala2="showPanes hello",a.lala3=b,console.log("fin",b)}}};a.$inject=["$compile","shows"],angular.module("venueShows").directive("showPanes",a)}(),function(){"use strict";var a=function(){return{restrict:"E",scope:{title1:"@"},replace:!1,controllerAs:"venueShowBigCtrl",bindToController:!0,template:"<div>{{venueShowBigCtrl.lala}}</div><div>{{venueShowBigCtrl.title1}}<div>",controller:function(){var a=this;a.lala=10}}};a.$inject=["$compile"],angular.module("venueShows").directive("venueShowBig",a)}(),function(){"use strict";var a=function(a,b,c){var d=function(){var d=a.get("/api/shows").success(function(a){c.items=a}).error(function(){b.debug("Error getting sequence")});return d};return{getShows:d}};a.$inject=["$http","$log","shows"],angular.module("venueShows").factory("VenueShowsService",a)}(),angular.module("venueShows").factory("shows",["$rootScope",function(){var a={};return a}]);
//# sourceMappingURL=app-min.js.map