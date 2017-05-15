!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([/*!*****************!*\
  !*** multi app ***!
  \*****************/
function(e,t,o){e.exports=o(/*! ./src/index.js */4)},/*!****************************!*\
  !*** ./src/pages/home.tag ***!
  \****************************/
function(e,t){"use strict";riot.tag2("mpc-home",'<div class="panel panel-default"> <div class="panel-heading">My Component</div> <div class="panel-body"> <div class="well"> I am located in a prebuilt bundle.js. I am a full blown SPA as far as I am concerned, as I just had to follow a few rules that the hosting SPA required. </div> </div> </div> <a href="#my-component-page/my-component-page" class="btn btn-default">TypiCode Users</a>',"","",function(e){})},/*!*****************************************!*\
  !*** ./src/pages/my-component-page.tag ***!
  \*****************************************/
function(e,t){"use strict";riot.tag2("mpc-my-component-page",'<div class="panel panel-default"> <div class="panel-heading">TypiCode Users</div> <div class="panel-body"> <div class="well"> This pulls users from https://jsonplaceholder.typicode.com/ </div> <table class="table table-striped table-hover "> <thead> <tr> <th>id</th> <th>username</th> <th>name</th> <th>email</th> <th>phone</th> <th>details</th> </tr> </thead> <tbody> <tr each="{this.results}"> <td>{this.id}</td> <td>{this.username}</td> <td>{this.name}</td> <td>{this.email}</td> <td>{this.phone}</td> <td><a onclick="{parent.route}">More...</a></td> </tr> </tbody> </table> </div> </div>',"","",function(e){var t=this;t.error=!1,t.results=[],t.resetData=function(){t.results=[],t.error=!1},t.on("mount",function(){console.log("typicode-users mount"),riot.control.on(riot.EVT.typicodeUserStore.out.typicodeUsersChanged,t.onTypicodeUsersChanged),riot.control.trigger(riot.EVT.typicodeUserStore.in.typicodeUsersFetch)}),t.on("unmount",function(){console.log("typicode-users unmount"),riot.control.off(riot.EVT.typicodeUserStore.out.typicodeUsersChanged,t.onTypicodeUsersChanged)}),t.onTypicodeUsersChanged=function(e){console.log(riot.EVT.typicodeUserStore.out.typicodeUsersChanged),t.results=e,console.log(t.results),t.update()},t.route=function(e){riot.control.trigger("riot-route-dispatch","my-component-page/typicode-user-detail?id="+e.item.id)}})},/*!********************************************!*\
  !*** ./src/pages/typicode-user-detail.tag ***!
  \********************************************/
function(e,t){"use strict";riot.tag2("mpc-typicode-user-detail",'<div if="{result != null}" class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">{result.name}</h3> </div> <div class="panel-body"> <form class="form-horizontal"> <fieldset> <legend>User Details</legend> <div class="form-group"> <label class="col-sm-2 control-label">Name</label> <div class="col-sm-10"> <p class="form-control-static">{result.name}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Email</label> <div class="col-sm-10"> <p class="form-control-static">{result.email}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Phone</label> <div class="col-sm-10"> <p class="form-control-static">{result.phone}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">User Name</label> <div class="col-sm-10"> <p class="form-control-static">{result.username}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Web Site</label> <div class="col-sm-10"> <p class="form-control-static">{result.website}</p> </div> </div> </fieldset> </form> <form class="form-horizontal"> <fieldset> <legend>Address</legend> <div class="form-group"> <label class="col-sm-2 control-label">Suite</label> <div class="col-sm-10"> <p class="form-control-static">{result.address.suite}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Street</label> <div class="col-sm-10"> <p class="form-control-static">{result.address.street}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">City</label> <div class="col-sm-10"> <p class="form-control-static">{result.address.city}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Zip Code</label> <div class="col-sm-10"> <p class="form-control-static">{result.address.zipcode}</p> </div> </div> </fieldset> </form> <form class="form-horizontal"> <fieldset> <legend>Company</legend> <div class="form-group"> <label class="col-sm-2 control-label">Name</label> <div class="col-sm-10"> <p class="form-control-static">{result.company.name}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Catch Phrase</label> <div class="col-sm-10"> <p class="form-control-static">{result.company.catchPhrase}</p> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Business Statement</label> <div class="col-sm-10"> <p class="form-control-static">{result.company.bs}</p> </div> </div> </fieldset> </form> </div> </div>',"","",function(e){var t=this;t.result=null,t.onUserChanged=function(e){t.result=e,console.log(t.result),t.update()},t.on("unmount",function(){console.log("on unmount:"),riot.control.off(riot.EVT.typicodeUserStore.out.typicodeUserChanged,t.onUserChanged)}),t.on("mount",function(){var e=riot.route.query();console.log("on mount: typicode-user-detail",e),riot.control.on(riot.EVT.typicodeUserStore.out.typicodeUserChanged,t.onUserChanged),riot.control.trigger(riot.EVT.typicodeUserStore.in.typicodeUserFetch,{id:e.id})})})},/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}o(/*! ./css/index.css */10);var n=o(/*! ./stores/typicode-user-store.js */6),s=r(n),i=o(/*! ./stores/route-contribution-store.js */5),l=r(i);o(/*! ./pages/my-component-page.tag */2),o(/*! ./pages/typicode-user-detail.tag */3),o(/*! ./pages/home.tag */1);var c=window.riot,a={name:"typicode-component",stores:[{store:new s.default},{store:new l.default}],postLoadEvents:[{event:"typicode-init",data:{}}],preUnloadEvents:[{event:"typicode-uninit",data:{}}]};c.control.trigger("plugin-registration",a),c.control.trigger("component-load-complete",a.name)},/*!************************************************!*\
  !*** ./src/stores/route-contribution-store.js ***!
  \************************************************/
function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),n=function(){function e(){o(this,e);var t=this;t.name="RouteContributionStore",riot.observable(t),t._initializeViewSet(),t.bindEvents()}return r(e,[{key:"_initializeViewSet",value:function(){var e=this;e._viewsSet=new Set;var t=e._viewsSet;t.add("home"),t.add("my-component-page"),t.add("typicode-user-detail"),e.views=Array.from(t),e.defaultRoute="/my-component-page/home"}},{key:"bindEvents",value:function(){var e=this;e.on(riot.EVT.contributeRoutes,function(t){console.log(e.name,riot.EVT.contributeRoutes,t),t("/my-component-page/typicode-user-detail?id=*",function(){console.log("route handler of /my-component-page/typicode-user-detail"),riot.control.trigger(riot.EVT.loadView,"mpc-typicode-user-detail")}),t("/my-component-page/*",function(t){console.log("route handler of /my-component-page/"+t);var o=t;e.views.indexOf(o)===-1?riot.control.trigger(riot.EVT.routeDispatch,e.defaultRoute):riot.control.trigger(riot.EVT.loadView,"mpc-"+o)}),t("/my-component-page",function(){console.log("route handler of /my-component-page"),riot.control.trigger(riot.EVT.routeDispatch,e.defaultRoute)})})}}]),e}();t.default=n},/*!*******************************************!*\
  !*** ./src/stores/typicode-user-store.js ***!
  \*******************************************/
function(e,t,o){"use strict";function r(){var e=this;e.name="TypicodeUserStore",riot.EVT.typicodeUserStore={in:{typicodeInit:"typicode-init",typicodeUninit:"typicode-uninit",typicodeUsersFetchResult:"typicode-users-fetch-result",typicodeUsersFetch:"typicode-users-fetch",typicodeUserFetch:"typicode-user-fetch"},out:{typicodeUsersChanged:"typicode-users-changed",typicodeUserChanged:"typicode-user-changed"}},riot.observable(e),e.fetchException=null,e.on(riot.EVT.app.out.appMount,function(){console.log(riot.EVT.app.out.appMount,e.name),riot.control.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,e.onUsersResult)}),e.on(riot.EVT.app.out.appUnmount,function(){console.log(riot.EVT.app.out.appUnmount,e.name),riot.control.off(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,e.onUsersResult)}),e.on(riot.EVT.typicodeUserStore.in.typicodeInit,function(){console.log(riot.EVT.typicodeUserStore.in.typicodeInit,e.name),riot.control.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,e.onUsersResult)}),e.on(riot.EVT.typicodeUserStore.in.typicodeUninit,function(){console.log(riot.EVT.typicodeUserStore.in.typicodeUninit,e.name),riot.control.off(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,e.onUsersResult)}),e.resetData=function(){e.fetchException=null},e.onUsersResult=function(t){console.log(riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult,t),riot.control.trigger(riot.EVT.localStorageStore.in.localstorageSet,{key:n,data:t}),e.trigger(riot.EVT.typicodeUserStore.out.typicodeUsersChanged,t)},e.on(riot.EVT.typicodeUserStore.in.typicodeUsersFetch,function(){console.log(riot.EVT.typicodeUserStore.in.typicodeUsersFetch);var e="https://jsonplaceholder.typicode.com/users";riot.control.trigger(riot.EVT.fetchStore.in.fetch,e,null,{name:riot.EVT.typicodeUserStore.in.typicodeUsersFetchResult})}),e.on(riot.EVT.typicodeUserStore.in.typicodeUserFetch,function(t){console.log(riot.EVT.typicodeUserStore.in.typicodeUserFetch);var o=JSON.parse(localStorage.getItem(n)),r=o.filter(function(e){return e.id==t.id});r&&r.length>0&&e.trigger(riot.EVT.typicodeUserStore.out.typicodeUserChanged,r[0])})}var n="typicodeUserCache";e.exports=r},/*!*************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/index.css ***!
  \*************************************************************/
function(e,t,o){t=e.exports=o(/*! ../../~/css-loader/lib/css-base.js */8)(),t.push([e.id,"",""])},/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(r[s]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&r[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),e.push(i))}},e}},/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
function(e,t,o){function r(e,t){for(var o=0;o<e.length;o++){var r=e[o],n=f[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(a(r.parts[s],t))}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(a(r.parts[s],t));f[r.id]={id:r.id,refs:1,parts:i}}}}function n(e){for(var t=[],o={},r=0;r<e.length;r++){var n=e[r],s=n[0],i=n[1],l=n[2],c=n[3],a={css:i,media:l,sourceMap:c};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function s(e,t){var o=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?o.insertBefore(t,r.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function a(e,t){var o,r,n;if(t.singleton){var s=g++;o=y||(y=l(t)),r=d.bind(null,o,s,!1),n=d.bind(null,o,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),r=p.bind(null,o),n=function(){i(o),o.href&&URL.revokeObjectURL(o.href)}):(o=l(t),r=u.bind(null,o),n=function(){i(o)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function d(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=U(t,n);else{var s=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function u(e,t){var o=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t){var o=t.css,r=t.sourceMap;r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(n),s&&URL.revokeObjectURL(s)}var f={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,b=[];e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=n(e);return r(o,t),function(e){for(var s=[],i=0;i<o.length;i++){var l=o[i],c=f[l.id];c.refs--,s.push(c)}if(e){var a=n(e);r(a,t)}for(var i=0;i<s.length;i++){var c=s[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete f[c.id]}}}};var U=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
function(e,t,o){var r=o(/*! !../../~/css-loader!../../~/postcss-loader!./index.css */7);"string"==typeof r&&(r=[[e.id,r,""]]);o(/*! ../../~/style-loader/addStyles.js */9)(r,{});r.locals&&(e.exports=r.locals)}]);
//# sourceMappingURL=bundle.js.map