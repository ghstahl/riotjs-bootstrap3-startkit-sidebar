!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([/*!*****************!*\
  !*** multi app ***!
  \*****************/
function(e,t,o){e.exports=o(/*! ./src/index.js */3)},/*!*****************************************!*\
  !*** ./src/pages/my-component-page.tag ***!
  \*****************************************/
function(e,t){"use strict";riot.tag2("my-component-page",'<h2>my-component-page</h2> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quia soluta optio excepturi, earum saepe explicabo veritatis fuga nesciunt, reprehenderit harum. Libero consequuntur neque fuga eos, aliquam id beatae eaque? </p> <table class="table table-striped table-hover "> <thead> <tr> <th>id</th> <th>username</th> <th>name</th> <th>email</th> <th>phone</th> </tr> </thead> <tbody> <tr each="{this.results}"> <td>{this.id}</td> <td>{this.username}</td> <td>{this.name}</td> <td>{this.email}</td> <td>{this.phone}</td> <td><a onclick="{parent.route}">More...</a></td> </tr> </tbody> </table>',"","",function(e){var t=this;t.error=!1,t.results=[],t.resetData=function(){t.results=[],t.error=!1},t.on("mount",function(){console.log("typicode-users mount"),riot.control.on("typicode_users_changed",t.onTypicodeUsersChanged),riot.control.trigger("typicode_users_fetch")}),t.on("unmount",function(){console.log("typicode-users unmount"),riot.control.off("typicode_users_changed",t.onTypicodeUsersChanged)}),t.onTypicodeUsersChanged=function(e){console.log("typicode_users_changed"),t.results=e,console.log(t.results),t.update()},t.route=function(e){riot.control.trigger("riot-route-dispatch","typicode-user-detail?id="+e.item.id)}})},/*!********************************************!*\
  !*** ./src/pages/typicode-user-detail.tag ***!
  \********************************************/
function(e,t){"use strict";riot.tag2("typicode-user-detail","<h4>{result.name}</h4>","","",function(e){var t=this;t.result={},t.onUserChanged=function(e){t.result=e,console.log(t.result),t.update()},t.on("unmount",function(){console.log("on unmount:"),riot.control.off("typicode_user_changed",t.onUserChanged)}),t.on("mount",function(){var e=riot.route.query();console.log("on mount: typicode-user-detail",e),riot.control.on("typicode_user_changed",t.onUserChanged),riot.control.trigger("typicode_user_fetch",{id:e.id})})})},/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}o(/*! ./css/index.css */8);var r=o(/*! ./stores/typicode-user-store.js */4),i=n(r);o(/*! ./pages/my-component-page.tag */1),o(/*! ./pages/typicode-user-detail.tag */2);var s=window.riot,u={name:"riotjs-partial-spa",views:[{view:"my-component-page"},{view:"typicode-user-detail"}],stores:[{store:new i.default}],postLoadEvents:[{event:"typicode-init",data:{}}]};s.control.trigger("plugin-registration",u)},/*!*******************************************!*\
  !*** ./src/stores/typicode-user-store.js ***!
  \*******************************************/
function(e,t,o){"use strict";function n(){var e=this;riot.observable(e),e.fetchException=null,e.on("app-mount",function(){console.log("TypicodeUserStore app-mount"),riot.control.on("typicode_users_fetch_result",e.onUsersResult)}),e.on("typicode-init",function(){console.log("TypicodeUserStore typicode-init"),riot.control.on("typicode_users_fetch_result",e.onUsersResult)}),e.on("app-unmount",function(){console.log("TypicodeUserStore app-unmount"),riot.control.off("typicode_users_fetch_result",e.onUsersResult)}),e.resetData=function(){e.fetchException=null},e.onUsersResult=function(t){console.log("user_fetch_result:",t),riot.control.trigger("localstorage_set",{key:r,data:t}),e.trigger("typicode_users_changed",t)},e.on("typicode_users_fetch",function(){console.log("typicode_users_fetch:");var e="http://jsonplaceholder.typicode.com/users";riot.control.trigger("fetch",e,null,{name:"typicode_users_fetch_result"})}),e.on("typicode_user_fetch",function(t){console.log("typicode_user_fetch:");var o=JSON.parse(localStorage.getItem(r)),n=o.filter(function(e){return e.id==t.id});n&&n.length>0&&e.trigger("typicode_user_changed",n[0])})}var r="typicodeUserCache";e.exports=n},/*!*************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/css/index.css ***!
  \*************************************************************/
function(e,t,o){t=e.exports=o(/*! ../../~/css-loader/lib/css-base.js */6)(),t.push([e.id,"",""])},/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(a(n.parts[i],t));f[n.id]={id:n.id,refs:1,parts:s}}}}function r(e){for(var t=[],o={},n=0;n<e.length;n++){var r=e[n],i=r[0],s=r[1],u=r[2],c=r[3],a={css:s,media:u,sourceMap:c};o[i]?o[i].parts.push(a):t.push(o[i]={id:i,parts:[a]})}return t}function i(e,t){var o=m(),n=_[_.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function a(e,t){var o,n,r;if(t.singleton){var i=v++;o=y||(y=u(t)),n=l.bind(null,o,i,!1),r=l.bind(null,o,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),n=p.bind(null,o),r=function(){s(o),o.href&&URL.revokeObjectURL(o.href)}):(o=u(t),n=d.bind(null,o),r=function(){s(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function l(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function d(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,_=[];e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],s=0;s<o.length;s++){var u=o[s],c=f[u.id];c.refs--,i.push(c)}if(e){var a=r(e);n(a,t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var b=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
function(e,t,o){var n=o(/*! !../../~/css-loader!../../~/postcss-loader!./index.css */5);"string"==typeof n&&(n=[[e.id,n,""]]);o(/*! ../../~/style-loader/addStyles.js */7)(n,{});n.locals&&(e.exports=n.locals)}]);
//# sourceMappingURL=bundle.js.map