module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([2],{251:function(e,t,r){e.exports=r(252)},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(20);var a=r.n(n);var o=r(4);var u=r.n(o);var i=r(79);var c=r(28);var l=r(116);var f=r.n(l);var s=r(122);var p=r(125);var v=r(126);var h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o);var i=u.value}catch(e){r(e);return}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=Object(i["h"])("results");var w=[2,121];var _=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w.indexOf(t.id)>-1};var g=Object(i["b"])(_);var O=c["a"].div.withConfig({displayName:"pages__ListWrapper",componentId:"s1wo7elh-0"})(["line-height:1.5;"]);var P=function(e){b(t,e);function t(){m(this,t);return y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,[{key:"render",value:function e(){var t=this.props,r=t.data,n=t.favorite;return u.a.createElement(v["a"],null,u.a.createElement("h1",null,"Favorite"),u.a.createElement(O,null,u.a.createElement(p["a"],{href:"/show?id=2"},"test click here"),n.map(function(e){return u.a.createElement("div",{key:e.id},u.a.createElement(f.a,{prefetch:true,href:{pathname:"/show",query:{id:e.id}},passHref:true},u.a.createElement(p["a"],null,e.english)))})),u.a.createElement("br",null),u.a.createElement("h1",null,"List"),u.a.createElement(O,null,r.map(function(e){return u.a.createElement("div",{key:e.id},u.a.createElement(f.a,{prefetch:true,href:{pathname:"/show",query:{id:e.id}},passHref:true},u.a.createElement(p["a"],null,e.english)))})))}}],[{key:"getInitialProps",value:function(){var e=d(a.a.mark(function e(){var t,r,n;return a.a.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return s["a"].getTheaters();case 2:t=a.sent;r=E(t);n=g(r);return a.abrupt("return",{data:r,favorite:n});case 6:case"end":return a.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);return t}(u.a.Component);P.defaultProps={data:[],favorite:[]};t["default"]=P}},[251]);return{page:e.default}});