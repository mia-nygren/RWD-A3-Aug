webpackJsonp([15],Array(44).concat([function(t,n,e){"use strict";function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.options.data||O;t.options.data=function(){var t=e.call(this);return $()({},t,n)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=R.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function i(t){return[].concat.apply([],t.matched.map(function(t){return E()(t.components).map(function(n){return t.components[n]})}))}function a(t){return[].concat.apply([],t.matched.map(function(t){return E()(t.instances).map(function(n){return t.instances[n]})}))}function s(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return E()(t.components).map(function(r){return n(t.components[r],t.instances[r],t,r,e)})}))}function u(t,n){var e={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:n,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/RWD-A3-Aug/",env:{},hotReload:t.hotReload||!1},r=t.next;return e.params=e.route.params||{},e.query=e.route.query||{},e.redirect=function(t,n,o){t&&(e._redirected=!0,"string"!=typeof t||void 0!==n&&"object"!==(void 0===n?"undefined":b()(n))||(o=n||{},n=t,t=302),r({path:n,query:o,status:t}))},t.req&&(e.req=t.req),t.res&&(e.res=t.res),e}function c(t,n){return!t.length||n._redirected?w.a.resolve():l(t[0],n).then(function(){return c(t.slice(1),n)})}function l(t,n){var e=void 0;return e=2===t.length?new w.a(function(e){t(n,function(t,r){t&&n.error(t),r=r||{},e(r)})}):t(n),e&&(e instanceof w.a||"function"==typeof e.then)||(e=w.a.resolve(e)),e}function f(t){var n=window.location.pathname;return t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash}function d(t,n){return m(p(t,n))}function p(t,n){for(var e,r=[],o=0,i=0,a="",s=n&&n.delimiter||"/";null!=(e=j.exec(t));){var u=e[0],c=e[1],l=e.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var f=t[i],d=e[2],p=e[3],h=e[4],A=e[5],m=e[6],C=e[7];a&&(r.push(a),a="");var y=null!=d&&null!=f&&f!==d,v="+"===m||"*"===m,w="?"===m||"*"===m,B=e[2]||s,b=h||A;r.push({name:p||o++,prefix:d||"",delimiter:B,optional:w,repeat:v,partial:y,asterisk:!!C,pattern:b?x(b):C?".*":"[^"+g(B)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"===b()(t[e])&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var o="",i=e||{},a=r||{},s=a.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+y()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(l=s(f[d]),!n[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+y()(l)+"`");o+=(0===d?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?A(f):s(f),!n[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function g(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function x(t){return t.replace(/([=!:$\/()])/g,"\\$1")}n.e=r,n.g=o,n.b=i,n.i=a,n.f=s,n.a=u,n.h=c,n.d=l,n.j=f,n.c=d;var C=e(86),y=e.n(C),v=e(12),w=e.n(v),B=e(46),b=e.n(B),_=e(73),E=e.n(_),k=e(53),$=e.n(k),R=e(1),O=function(){return{}},j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},,,,,,,function(t,n,e){"use strict";var r=(e(1),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];n.a={name:"nuxt-child",functional:!0,render:function(t,n){var e=n.parent,i=n.data;i.nuxtChild=!0;for(var a=e.$nuxt.nuxt.transitions,s=e.$nuxt.nuxt.defaultTransition,u=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&u++,e=e.$parent;i.nuxtChildDepth=u;var c=a[u]||s,l={};r.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};return o.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t])}),t("transition",{props:l,on:f},[t("router-view",i)])}}},,,,,,,,,,,,,,,,function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-300.ef5604d.eot"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-700.cba5ca4.eot"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-regular.e443e3d.eot"},function(t,n,e){function r(t){e(161)}var o=e(20)(e(83),e(156),r,"data-v-4acdfb46",null);t.exports=o.exports},function(t,n,e){"use strict";e.d(n,"b",function(){return k});var r=e(47),o=e.n(r),i=e(29),a=e.n(i),s=e(53),u=e.n(s),c=e(12),l=e.n(c),f=e(45),d=e.n(f),p=e(1),h=e(48),A=e.n(h),m=e(78),g=e(79),x=e(51),C=e(77),y=e(70),v=e.n(y),w=e(152),B=e.n(w),b=e(150),_=e.n(b),E=e(44);e.d(n,"a",function(){return v.a});var k=function(){var t=d()(o.a.mark(function t(n){var r,i,s,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.i(g.a)(),i=e.i(m.a)(),!n||!n.url){t.next=5;break}return t.next=5,new l.a(function(t,e){i.push(n.url,t,e)});case 5:if(window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),s=u()({router:i,store:r,_nuxt:{defaultTransition:R,transitions:[R],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?a()({},R,{name:t}):a()({},R,t):R}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){return t=t||null,"string"==typeof t&&(t={statusCode:500,message:t}),this.$options._nuxt.dateErr=Date.now(),this.$options._nuxt.err=t,t}}},_.a),c=e.i(E.a)({isServer:!!n,isClient:!n,route:i.currentRoute,store:r,req:n?n.req:void 0,res:n?n.res:void 0},s),delete c.redirect,delete c.error,"function"!=typeof $){t.next=13;break}return t.next=13,$(c);case 13:return t.abrupt("return",{app:s,router:i,store:r});case 14:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var $=e(80);$=$.default||$,p.default.component(x.a.name,x.a),p.default.component(C.a.name,C.a),p.default.component(B.a.name,B.a),p.default.use(A.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var R={name:"page",mode:"out-in"}},function(t,n,e){"use strict";var r=e(52),o=e.n(r),i=e(75),a=i.keys(),s={},u=!0,c=!1,l=void 0;try{for(var f,d=o()(a);!(u=(f=d.next()).done);u=!0){var p=f.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var n=i(t);return n.default?n.default:n}(p)}}catch(t){c=!0,l=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw l}}n.a=s},,function(t,n,e){t.exports=e.p+"img/headerPhoto.6e2d23d.jpg"},function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=75},function(t,n,e){"use strict";function r(t,n,e){return t.map(function(t){var r=t.options.transition;return"function"==typeof r?r(n,e):r})}function o(t,n,r){var o=this,i=e.i(v.f)(t,function(t,n,r,o){return"function"!=typeof t||t.options?(t=e.i(v.g)(t),r.components[o]=t,r.components[o]):new g.a(function(n,i){var a=function(t){t=e.i(v.g)(t),r.components[o]=t,n(t)};t().then(a).catch(i)})}),a=n.fullPath.split("#")[0],s=t.fullPath.split("#")[0];this._hashChanged=a===s,this._hashChanged||this.$loading.start&&this.$loading.start(),g.a.all(i).then(function(){return r()}).catch(function(t){var n=t.statusCode||t.status||t.response&&t.response.status||500;o.error({statusCode:n,message:t.message}),r(!1)})}function i(t,n,r){var o=this,i=[],a=!1;if(void 0!==r&&(i=[],r.middleware&&(i=i.concat(r.middleware)),t.forEach(function(t){t.options.middleware&&(i=i.concat(t.options.middleware))})),i=i.map(function(t){return"function"!=typeof C.a[t]&&(a=!0,o.error({statusCode:500,message:"Unknown middleware "+t})),C.a[t]}),!a)return e.i(v.h)(i,n)}function a(t,n){e.i(v.f)(t,function(t,n,e,r){return"object"!==(void 0===t?"undefined":f()(t))||t.options||(t=x.default.extend(t),t._Ctor=t,e.components[r]=t),t})}function s(t,n){var r=this;this._hashChanged||x.default.nextTick(function(){var n=e.i(v.i)(t);_=n.map(function(t,n){if(!t)return"";if(b[n]===t.constructor._path&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)x.default.set(t.$data,r,e[r])}return t.constructor.options.__file}),r._hadError&&r._dateLastError===r.$options._nuxt.dateErr&&r.error();var o=r.$options._nuxt.err?y.a.layout:t.matched[0].components.default.options.layout;"function"==typeof o&&(o=o(r._context)),r.setLayout(o),setTimeout(function(){return u(r)},100)})}function u(t){return}function c(t){window._nuxtReadyCbs.forEach(function(n){"function"==typeof n&&n(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),k.afterEach(function(n,e){t.$nuxt.$emit("routeChanged",n,e)})}Object.defineProperty(n,"__esModule",{value:!0});var l=e(46),f=e.n(l),d=e(47),p=e.n(d),h=e(45),A=e.n(h),m=e(12),g=e.n(m),x=e(1),C=e(72),y=e(71),v=e(44),w=this,B=function(){var t=A()(p.a.mark(function t(n,o,a){var s,u,c,l,f,d,h,A=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",a());case 2:if(s=void 0,u=!1,c=function(t){this.$loading.finish&&this.$loading.finish(),u||(u=!0,a(t))},l=e.i(v.a)({to:n,store:$,isClient:!0,next:c.bind(this),error:this.error.bind(this)},E),f=e.i(v.b)(n),this._context=l,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,f.length){t.next=24;break}return t.next=13,i.call(this,f,l);case 13:if(!l._redirected){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof y.a.layout?y.a.layout(l):y.a.layout);case 17:return s=t.sent,t.next=20,i.call(this,f,l,s);case 20:if(!l._redirected){t.next=22;break}return t.abrupt("return");case 22:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",a());case 24:return f.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(r(f,n,o)),t.prev=26,t.next=29,i.call(this,f,l);case 29:if(!l._redirected){t.next=31;break}return t.abrupt("return");case 31:return s=f[0].options.layout,"function"==typeof s&&(s=s(l)),t.next=35,this.loadLayout(s);case 35:return s=t.sent,t.next=38,i.call(this,f,l,s);case 38:if(!l._redirected){t.next=40;break}return t.abrupt("return");case 40:if(d=!0,f.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:n.params||{},query:n.query||{},store:l.store}))}),d){t.next=45;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",a());case 45:return t.next=47,g.a.all(f.map(function(t,r){if(t._path=e.i(v.c)(n.matched[r].path)(n.params),!A._hadError&&t._path===b[r]&&r+1!==f.length)return g.a.resolve();var o=[];if(t.options.asyncData&&"function"==typeof t.options.asyncData){var i=e.i(v.d)(t.options.asyncData,l);i.then(function(n){e.i(v.e)(t,n),A.$loading.increase&&A.$loading.increase(30)}),o.push(i)}if(t.options.fetch){var a=t.options.fetch(l);a&&(a instanceof g.a||"function"==typeof a.then)||(a=g.a.resolve(a)),a.then(function(){return A.$loading.increase&&A.$loading.increase(30)}),o.push(a)}return g.a.all(o)}));case 47:b=f.map(function(t,r){return e.i(v.c)(n.matched[r].path)(n.params)}),this.$loading.finish&&this.$loading.finish(),u||a(),t.next=59;break;case 52:t.prev=52,t.t0=t.catch(26),b=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=y.a.layout,"function"==typeof h&&(h=h(l)),this.loadLayout(h).then(function(){A.error(t.t0),a(!1)});case 59:case"end":return t.stop()}},t,this,[[26,52]])}));return function(n,e,r){return t.apply(this,arguments)}}(),b=[],_=[],E=void 0,k=void 0,$=void 0,R=window.__NUXT__||{};if(!R)throw new Error("[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.");var O=function(t){var n=e.i(v.j)(t.options.base);return e.i(v.f)(t.match(n),function(t,n,r,o,i){return"function"!=typeof t||t.options?(t=e.i(v.g)(t),r.components[o]=t,t):new g.a(function(n,a){var s=function(t){t=e.i(v.g)(t),R.serverRendered&&e.i(v.e)(t,R.data[i]),r.components[o]=t,n(t)};t().then(s).catch(a)})})};e.i(y.b)().then(function(){var t=A()(p.a.mark(function t(n){var i,l,f,d;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return E=n.app,k=n.router,$=n.store,t.next=5,g.a.all(O(k));case 5:return i=t.sent,l=new x.default(E),f=R.layout||"default",t.next=10,l.loadLayout(f);case 10:if(l.setLayout(f),d=function(){l.$mount("#__nuxt"),x.default.nextTick(function(){u(l),c(l)})},l.setTransitions=l.$options._nuxt.setTransitions.bind(l),i.length&&(l.setTransitions(r(i,k.currentRoute)),b=k.currentRoute.matched.map(function(t){return e.i(v.c)(t.path)(k.currentRoute.params)}),_=i.map(function(t){return t.options.__file})),l.error=l.$options._nuxt.error.bind(l),l.$loading={},R.error&&l.error(R.error),k.beforeEach(o.bind(l)),k.beforeEach(B.bind(l)),k.afterEach(a),k.afterEach(s.bind(l)),!R.serverRendered){t.next=24;break}return d(),t.abrupt("return");case 24:B.call(l,k.currentRoute,k.currentRoute,function(t){if(t){var n=!1;return k.afterEach(function(){n||(n=!0,d())}),void k.push(t)}a(k.currentRoute,k.currentRoute),s.call(l,k.currentRoute,k.currentRoute),d()});case 25:case"end":return t.stop()}},t,w)}));return function(n){return t.apply(this,arguments)}}()).catch(function(t){console.error("[nuxt.js] Cannot load components",t)})},function(t,n,e){"use strict";e(1);n.a={name:"nuxt-link",functional:!0,render:function(t,n){return t("router-link",n.data,n.children)}}},function(t,n,e){"use strict";function r(){return new i.default({mode:"history",base:"/RWD-A3-Aug/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:x,routes:[{path:"/",component:a,name:"index"},{path:"/teahouses",component:s,name:"teahouses"},{path:"/hours",component:u,name:"hours"},{path:"/tea",component:c,name:"tea"},{path:"/teahouses/helsingfors",component:l,name:"teahouses-helsingfors"},{path:"/teahouses/stockholm",component:f,name:"teahouses-stockholm"},{path:"/tea/yellowtea",component:d,name:"tea-yellowtea"},{path:"/tea/greentea",component:p,name:"tea-greentea"},{path:"/tea/blacktea",component:h,name:"tea-blacktea"},{path:"/tea/whitetea",component:A,name:"tea-whitetea"},{path:"/tea/oolong",component:m,name:"tea-oolong"},{path:"/teahouses/oslo",component:g,name:"teahouses-oslo"}]})}n.a=r;var o=e(1),i=e(49);o.default.use(i.default);var a=function(){return e.e(0).then(e.bind(null,169))},s=function(){return e.e(2).then(e.bind(null,177))},u=function(){return e.e(6).then(e.bind(null,168))},c=function(){return e.e(3).then(e.bind(null,172))},l=function(){return e.e(1).then(e.bind(null,176))},f=function(){return e.e(12).then(e.bind(null,179))},d=function(){return e.e(7).then(e.bind(null,175))},p=function(){return e.e(10).then(e.bind(null,171))},h=function(){return e.e(11).then(e.bind(null,170))},A=function(){return e.e(8).then(e.bind(null,174))},m=function(){return e.e(9).then(e.bind(null,173))},g=function(){return e.e(13).then(e.bind(null,178))},x=function(t,n,e){if(e)return e;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},function(t,n,e){"use strict";function r(t){var n=f(t),e=n.default||n;if(e.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(e.state&&"function"!=typeof e.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return e}function o(t,n){if(1===n.length)return t.modules;var e=n.shift();return t.modules[e]=t.modules[e]||{},t.modules[e].namespaced=!0,t.modules[e].modules=t.modules[e].modules||{},o(t.modules[e],n)}e.d(n,"a",function(){return B});var i=e(29),a=e.n(i),s=e(52),u=e.n(s),c=e(1),l=e(27);c.default.use(l.default);var f=e(164),d=f.keys(),p={},h=d.find(function(t){return t.includes("./index.")});if(h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var A=!0,m=!1,g=void 0;try{for(var x,C=u()(d);!(A=(x=C.next()).done);A=!0){var y=x.value,v=y.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==v){var w=v.split(/\//),t=o(p,w);v=w.pop(),t[v]=r(y),t[v].namespaced=!0}}}catch(t){m=!0,g=t}finally{try{!A&&C.return&&C.return()}finally{if(m)throw g}}}var B=p instanceof Function?p:function(){return new l.default.Store(a()({},p,{state:p.state instanceof Function?p.state():{}}))}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),o=e(28),i=e.n(o);r.default.use(i.a);var a=i.a;n.default=a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(27),o=e(74),i=e.n(o),a=function(){return new r.default.Store({state:{headerImageURL:i.a,headerTitle:"",headerText:""},mutations:{changeHeaderImageURL:function(t,n){console.log("CHANGING URL HEADER TO:"+n),t.headerImageURL=n},changeHeaderTitle:function(t,n){console.log("CHANGING TITLE TO:"+n),t.headerTitle=n},changeHeaderText:function(t,n){console.log("CHANGING TEXT TO:"+n),t.headerText=n}},actions:{nuxtServerInit:function(t){t.commit;console.log("nuxtServerInit dispatch")}}})};n.default=a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),o=e.n(r),i=e(151),a=e.n(i),s=e(157),u=(e.n(s),e(158)),c=(e.n(u),e(159)),l=(e.n(c),{_default:function(){return e.e(4).then(e.bind(null,166))},_teahouse:function(){return e.e(5).then(e.bind(null,167))}});n.default={head:{htmlAttrs:{lang:"sv-se"},title:"tea2go",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[{src:"https://cdn.polyfill.io/v2/polyfill.js?features=String.prototype.includes,Array.prototype.find,Promise"}],noscript:[{innerHTML:"<style> .jsOnly { display: none } </style>"}],__dangerouslyDisableSanitizers:["noscript"],style:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&l["_"+t]||(t="default"),this.layoutName=t;var n="_"+t;return this.layout=l[n],this.layout},loadLayout:function(t){var n=this;t&&l["_"+t]||(t="default");var e="_"+t;return"function"!=typeof l[e]?o.a.resolve(l[e]):l[e]().then(function(t){return l[e]=t,l[e]}).catch(function(t){if(n.$nuxt)return n.$nuxt.error({statusCode:500,message:t.message});console.error(t)})}},components:{NuxtLoading:a.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1);n.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),o=e(51),i=e(70),a=e.n(i);n.default={name:"nuxt",beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},components:{NuxtChild:o.a,NuxtError:a.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){n=t.exports=e(13)(!0),n.push([t.i,"@font-face{font-family:Oxygen;font-style:normal;font-weight:300;src:url("+e(67)+');src:local("Oxygen Light"),local("Oxygen-Light"),url('+e(67)+'?#iefix) format("embedded-opentype"),url('+e(143)+') format("woff2"),url('+e(142)+') format("woff"),url('+e(141)+') format("truetype"),url('+e(137)+'#Oxygen) format("svg")}@font-face{font-family:Oxygen;font-style:normal;font-weight:400;src:url('+e(69)+');src:local("Oxygen Regular"),local("Oxygen-Regular"),url('+e(69)+'?#iefix) format("embedded-opentype"),url('+e(149)+') format("woff2"),url('+e(148)+') format("woff"),url('+e(147)+') format("truetype"),url('+e(139)+'#Oxygen) format("svg")}@font-face{font-family:Oxygen;font-style:normal;font-weight:700;src:url('+e(68)+');src:local("Oxygen Bold"),local("Oxygen-Bold"),url('+e(68)+'?#iefix) format("embedded-opentype"),url('+e(146)+') format("woff2"),url('+e(145)+') format("woff"),url('+e(144)+') format("truetype"),url('+e(138)+'#Oxygen) format("svg")}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/assets/styles/font.css"],names:[],mappings:"AACA,WACE,mBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,kCAA6C,AAC7C,iSAKkE,CACnE,AAED,WACE,mBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,kCAAiD,AACjD,uSAKsE,CACvE,AAED,WACE,mBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,mCAA6C,AAC7C,oSAKkE,CACnE",file:"font.css",sourcesContent:["/* oxygen-300 - latin */\r\n@font-face {\r\n  font-family: 'Oxygen';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: url('../fonts/oxygen-v6-latin-300.eot'); /* IE9 Compat Modes */\r\n  src: local('Oxygen Light'), local('Oxygen-Light'),\r\n       url('../fonts/oxygen-v6-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\r\n       url('../fonts/oxygen-v6-latin-300.woff2') format('woff2'), /* Super Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-300.woff') format('woff'), /* Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\r\n       url('../fonts/oxygen-v6-latin-300.svg#Oxygen') format('svg'); /* Legacy iOS */\r\n}\r\n/* oxygen-regular - latin */\r\n@font-face {\r\n  font-family: 'Oxygen';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('../fonts/oxygen-v6-latin-regular.eot'); /* IE9 Compat Modes */\r\n  src: local('Oxygen Regular'), local('Oxygen-Regular'),\r\n       url('../fonts/oxygen-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\r\n       url('../fonts/oxygen-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-regular.woff') format('woff'), /* Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\r\n       url('../fonts/oxygen-v6-latin-regular.svg#Oxygen') format('svg'); /* Legacy iOS */\r\n}\r\n/* oxygen-700 - latin */\r\n@font-face {\r\n  font-family: 'Oxygen';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('../fonts/oxygen-v6-latin-700.eot'); /* IE9 Compat Modes */\r\n  src: local('Oxygen Bold'), local('Oxygen-Bold'),\r\n       url('../fonts/oxygen-v6-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\r\n       url('../fonts/oxygen-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-700.woff') format('woff'), /* Modern Browsers */\r\n       url('../fonts/oxygen-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */\r\n       url('../fonts/oxygen-v6-latin-700.svg#Oxygen') format('svg'); /* Legacy iOS */\r\n}"],sourceRoot:""}])},function(t,n,e){n=t.exports=e(13)(!0),n.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"colors.scss",sourceRoot:""}])},function(t,n,e){n=t.exports=e(13)(!0),n.push([t.i,"*,:after,:before{box-sizing:border-box;margin:0}html{font-family:Oxygen,Arial,sans-serif;font-size:100%;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,html{height:auto!important}body{font-size:100%;overflow-x:hidden}ul{padding-left:0}a{color:#000;text-decoration:none}p{line-height:1.4;margin-top:1.4em;margin-bottom:1.4em}.text h2,.title{color:#7d8066}.title{font-size:1.6em;font-weight:700;max-width:25em;margin:0 auto;margin-bottom:20px}h3{line-height:1.4}h1{line-height:2}.text h2{padding-top:15px}.main{position:relative;min-height:100vh;height:auto!important;background:#fff;font-size:1.1em;overflow:hidden}.mainContent{padding:50px 0}.lighten{background-image:url("+e(140)+")}.text{max-width:30em;padding:0 25px}.text p{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.linkInText{font-weight:500;text-decoration:underline}.centered{text-align:center!important;margin:0 auto}@media (min-width:23.5em){.title{font-size:1.5em}}@media (min-width:30em){.text{margin:0 auto;text-align:justify;text-justify:inter-word}.text h1,h2,h3,h4{text-align:left}}@media (min-width:38.8em){.text{padding:0}}@media (min-width:55em){.text p{font-size:1.2em;line-height:1.5;margin-top:1.5em;margin-bottom:1.5em}.text{min-width:35em}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/assets/styles/assets/styles/global.scss","D:/www/2017/RWD-A3-omeximination/assets/styles/assets/styles/colors.scss"],names:[],mappings:"AAIA,iBAEE,sBACA,QAAS,CACV,KAIC,oCACA,eACA,iBACA,0BACA,8BACA,kCACA,kCAAmC,CACpC,UAEE,qBAA0B,CACzB,KAGF,eACA,iBAAkB,CACnB,GAIG,cAAc,CAAI,EAEnB,WACA,oBAAoB,CACrB,EAEC,gBACA,iBACA,mBAAmB,CACpB,gBAKA,aC5CmB,CD6CpB,OAEC,gBACA,gBACA,eACA,cACA,kBAAkB,CACnB,GAGE,eAAgB,CACjB,GAGC,aAAa,CACd,SAGA,gBAAgB,CACjB,MAOC,kBACA,iBACA,sBACA,gBACA,gBACA,eAAgB,CACjB,aAGC,cAAc,CACf,SAGC,8CAA8C,CAC/C,MAIC,eACA,cAAc,CACf,QAGC,qBACA,kBACA,iBACA,YAAY,CACb,YAEC,gBACA,yBAAyB,CAC1B,UAGC,4BACA,aAAa,CACd,0BAGC,OACE,eAAgB,CACjB,CAGH,wBACE,MACE,cACA,mBACA,uBAAwB,CACzB,kBAEC,eAAe,CAChB,CAEH,0BACE,MACE,SAAS,CACV,CAGH,wBACE,QACE,gBACA,gBACA,iBACA,mBAAmB,CACpB,MAEC,cAAc,CACf,CAAA",file:"global.scss",sourcesContent:["/* Detta är den css som appliceras och gäller för alla sidor som använder sig av denna layout, default.vue */\r\n/* Först ligger styles som är aktuella för mindre skärmstorlekar */\r\n@import '~assets/styles/colors.scss';\r\n\r\n*, *:before, *:after\r\n{ \r\n  box-sizing: border-box; /* Detta för att border inte ska påverka storleken och det blir en mer konsekvent layout */ \r\n  margin: 0;\r\n}\r\n\r\nhtml\r\n{\r\n  font-family: \"Oxygen\", Arial, sans-serif; /* 1 */  /* Teckensnittet finns i filen font.css och registreras i nuxt.config.js */\r\n  font-size: 100%;\r\n  word-spacing: 1px;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n html, body {\r\n   height: initial !important;\r\n   }\r\n  \r\n  body{\r\n  font-size:100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* Ul och paragraph*/ \r\n\r\nul {padding-left:0;}\r\n a {\r\n   color:#000;\r\n   text-decoration:none;\r\n }\r\n p {\r\n   line-height:1.4;\r\n   margin-top:1.4em;\r\n   margin-bottom:1.4em;\r\n }\r\n\r\n/* Rubriker / Headings */ \r\n\r\n.title, .text h2 {\r\n  color:$medium-grey;\r\n}\r\n.title {  /* titel är sidornas huvudrubrik - för relevant återkoppling */\r\n  font-size: 1.6em;\r\n  font-weight: 700; \r\n  max-width:25em;\r\n  margin:0 auto;\r\n  margin-bottom:20px;\r\n}\r\n\r\nh3 {\r\n   line-height: 1.4;\r\n }\r\n\r\n h1{\r\n   line-height:2;\r\n }\r\n\r\n.text h2 {\r\n  padding-top:15px;\r\n}\r\n\r\n\r\n/* Main är huvudinnehållet på sidorna */\r\n\r\n.main\r\n{ \r\n  position: relative;\r\n  min-height:100vh; \r\n  height:auto !important;\r\n  background:#FFF;\r\n  font-size:1.1em;\r\n  overflow: hidden;\r\n}\r\n\r\n.mainContent {\r\n  padding:50px 0; \r\n}\r\n\r\n.lighten {\r\n  background-image: url('../images/lighten.png'); /* Används för att lägga ovanpå bilder som behöver ljusas upp */\r\n}\r\n\r\n/* Text är en klass som omringar den text som består av längre paragrafer och ska uppfylla god läsbarhet */  \r\n.text {\r\n  max-width: 30em;  /* Begränsa radlängden för god läsbarhet */\r\n  padding:0 25px;\r\n}\r\n.text p {\r\n  /* bindesträck för bättre läsbarhet */\r\n  -webkit-hyphens: auto;\r\n  -moz-hyphens: auto;\r\n  -ms-hyphens: auto; /* IE*/ \r\n  hyphens:auto;\r\n}\r\n.linkInText {\r\n  font-weight:500;\r\n  text-decoration:underline;\r\n}\r\n\r\n.centered {\r\n  text-align:center !important;\r\n  margin:0 auto;\r\n}\r\n\r\n@media(min-width:23.5em) {\r\n  .title {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n\r\n@media (min-width:30em) {\r\n  .text { \r\n    margin:0 auto;\r\n    text-align: justify;\r\n    text-justify: inter-word; /* IE */    /* https://www.w3schools.com/cssref/css3_pr_text-justify.asp */\r\n  }\r\n  .text h1, h2, h3, h4 {\r\n    text-align:left;\r\n  }\r\n}\r\n@media(min-width:38.8em) {\r\n  .text {\r\n    padding:0;\r\n  }\r\n}\r\n\r\n@media(min-width:55em) {\r\n  .text p {\r\n    font-size:1.2em; \r\n    line-height:1.5; \r\n    margin-top:1.5em;\r\n    margin-bottom:1.5em;\r\n  }\r\n  .text {\r\n    min-width:35em;\r\n  }\r\n}","$dark-grey: #656263;\r\n$medium-grey: #7d8066;"],sourceRoot:""}])},function(t,n,e){n=t.exports=e(13)(!0),n.push([t.i,".progress[data-v-45933efa]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,yCAA6C,AAC7C,oCAAwC,AACxC,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-45933efa] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},function(t,n,e){n=t.exports=e(13)(!0),n.push([t.i,".error-page[data-v-4acdfb46]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-4acdfb46]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-4acdfb46]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-4acdfb46]{font-size:14px;font-weight:400;margin:0;padding:0}.error-link[data-v-4acdfb46]{color:#00bcd4;font-weight:400;text-decoration:none;font-size:14px}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,gBAAiB,AACjB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oDAA6D,AAC7D,kBAAmB,AACnB,eAAiB,CAClB,AACD,6BACE,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,2CAAgD,AAChD,kBAAyB,AACzB,iBAAmB,CACpB,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,gCACE,eAAgB,AAChB,gBAAoB,AACpB,SAAY,AACZ,SAAa,CACd,AACD,6BACE,cAAe,AACf,gBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACjB",file:"nuxt-error.vue",sourcesContent:['\n.error-page[data-v-4acdfb46] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-4acdfb46] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-4acdfb46] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-4acdfb46] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-4acdfb46] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n'],sourceRoot:""}])},,,function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="},function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="},function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACWAQMAAAAluHAxAAAAA1BMVEX///+nxBvIAAAAAXRSTlOZyTXzhgAAAAxJREFUGBljGAVEAwABLAABOAcdjgAAAABJRU5ErkJggg=="},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-300.e919e71.ttf"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-300.9eaa685.woff"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-300.4986d40.woff2"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-700.82239bf.ttf"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-700.76d8e2d.woff"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-700.c7d0a39.woff2"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-regular.593f49a.ttf"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-regular.2f1778a.woff"},function(t,n,e){t.exports=e.p+"fonts/oxygen-v6-latin-regular.6daddb8.woff2"},function(t,n,e){var r=e(20)(e(82),e(154),null,null,null);t.exports=r.exports},function(t,n,e){function r(t){e(160)}var o=e(20)(e(84),e(155),r,"data-v-45933efa",null);t.exports=o.exports},function(t,n,e){var r=e(20)(e(85),e(153),null,null,null);t.exports=r.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.nuxt.err?e("nuxt-error",{attrs:{error:t.nuxt.err}}):e("nuxt-child")},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"__nuxt"}},[e("nuxt-loading",{ref:"loading"}),t.layout?e(t.layout,{tag:"component"}):t._e()],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"error-page"},[e("div",[e("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),e("div",{staticClass:"error-wrapper-message"},[e("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?e("p",[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},staticRenderFns:[]}},function(t,n,e){var r=e(130);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(14)("2937f488",r,!0)},function(t,n,e){var r=e(131);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(14)("73da317b",r,!0)},function(t,n,e){var r=e(132);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(14)("5dd47524",r,!0)},function(t,n,e){var r=e(133);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(14)("97a13e96",r,!0)},function(t,n,e){var r=e(134);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(14)("6fe6f38d",r,!0)},,,function(t,n,e){function r(t){return e(o(t))}function o(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var i={"./index.js":81};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=164}]),[76]);