webpackJsonp([2],{164:function(e,n,t){function a(e){t(288)}var i=t(18)(t(247),t(277),a,null,null);e.exports=i.exports},180:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(217),i=t.n(a),A=t(219),o=t.n(A),r=t(218),s=t.n(r);n.default={components:{headerImage:i.a,Navigation:o.a,Logo:s.a}}},181:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(28),i=t.n(a);n.default={props:{title:{type:String,required:!1,default:"Have a cup of tea that makes a difference!"},text:{type:String,required:!1,default:"We make sure that all of our tea are fair trade! We also have organic food and drinks, all for a fair price!"}},data:function(){return{imageUrl:"",styleObject:{}}},watch:{"$store.state.headerImageURL":"setBackgroundImage"},methods:{setBackgroundImage:function(){this.imageUrl="url('"+this.$store.state.headerImageURL+"')",this.updateStyleObject(this.imageUrl)},updateStyleObject:function(e){this.styleObject=i()({},{backgroundImage:e})}},mounted:function(){this.setBackgroundImage()}}},182:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(214);t.n(a);n.default={data:function(){return{menuButton:null,mainNavigation:null,checked:!1,isOpen:!1}},methods:{toggleMenu:function(){console.log(this.isOpen),console.log("clicked the menubtn")},hideMenu:function(){console.log("clicked OUTSIDE OF MENU or on menuButton !"),this.checked=!1}},directives:{onClickaway:a.directive}}},187:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,'.logo a[data-v-049c031e]{color:#000}.logo[data-v-049c031e]{position:relative;margin:0 auto;height:100%;margin-left:-35px}.logo[data-v-049c031e]:before{content:"";display:block;padding-top:5em}.logoContent[data-v-049c031e]{position:absolute;top:0;right:0;left:0;bottom:0}.imgWrapper[data-v-049c031e]{height:100%}.logoContent img[data-v-049c031e]{height:90%;display:block;margin:0 auto}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Logo.vue"],names:[],mappings:"AACA,yBACC,UAAW,CACX,AACD,uBACC,kBAAkB,AAClB,cAAc,AACd,YAAY,AACZ,iBAAkB,CAClB,AACD,8BACC,WAAW,AACX,cAAc,AACd,eAAgB,CAChB,AACD,8BACC,kBAAkB,AAClB,MAAM,AACN,QAAQ,AACR,OAAO,AACP,QAAS,CACT,AACD,6BACC,WAAY,CACZ,AACD,kCACC,WAAW,AACX,cAAc,AACd,aAAc,CACd",file:"Logo.vue",sourcesContent:["\n.logo a[data-v-049c031e] {  \r\n\tcolor:#000;\n}\n.logo[data-v-049c031e] {\r\n\tposition:relative;\r\n\tmargin:0 auto;\r\n\theight:100%;\r\n\tmargin-left:-35px;\n}\n.logo[data-v-049c031e]:before {\r\n\tcontent:'';\r\n\tdisplay:block;\r\n\tpadding-top:5em;\n}\n.logoContent[data-v-049c031e] {\t\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tright:0;\r\n\tleft:0;\r\n\tbottom:0;\n}\n.imgWrapper[data-v-049c031e] {\r\n\theight:100%;\n}\n.logoContent img[data-v-049c031e] {\r\n\theight:90%;\r\n\tdisplay:block;\r\n\tmargin:0 auto;\n}\r\n"],sourceRoot:""}])},188:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,".navigation[data-v-15fcebda]{height:200px;width:14em;background:#fff;list-style-type:none;z-index:99;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);position:absolute;top:50px;left:-15em;z-index:999}.navigation a[data-v-15fcebda]{color:#5a5651}.navigation a[data-v-15fcebda]:hover{background-color:#f1ede9}.navigation .nuxt-link-active[data-v-15fcebda],.navigation .nuxt-link-exact-active[data-v-15fcebda]{color:#fff;background-color:#7d8066;font-weight:700}.navigation .nuxt-link-active[data-v-15fcebda]:hover{background:#7d8066}.navigation li[data-v-15fcebda]{height:50px}.navigation li a[data-v-15fcebda]{height:100%;line-height:50px;display:block;padding-left:1.5em}.nav-trigger[data-v-15fcebda]{position:absolute;clip:rect(0,0,0,0)}#menuButton[data-v-15fcebda]{color:#5a5651;width:55px;height:50px;position:relative;display:block;float:left;text-align:center;text-transform:uppercase;line-height:50px;font-size:2.1em;z-index:999;cursor:pointer;-webkit-transform:scaleX(1.4);-ms-transform:scaleX(1.4);transform:scaleX(1.4)}.nav-trigger+label[data-v-15fcebda],.navBackground[data-v-15fcebda],.navigation[data-v-15fcebda]{-webkit-transition:left .2s;-o-transition:left .2s;transition:left .2s}.nav-trigger:checked~.navigation[data-v-15fcebda]{display:block;left:0}@media(min-width:55em){#menuButton[data-v-15fcebda],.nav-trigger[data-v-15fcebda],.navBackground[data-v-15fcebda]{display:none}.navigation[data-v-15fcebda]{-webkit-box-sizing:initial;box-sizing:initial;padding:0;width:33em;height:50px;position:inherit;-webkit-box-shadow:none;box-shadow:none}.nav li a[data-v-15fcebda]{padding:0}.nav .home[data-v-15fcebda]{width:5em}.nav .teaHouses [data-v-15fcebda],.teaVarieties[data-v-15fcebda]{width:9em}.nav .openingHours[data-v-15fcebda]{width:10em}.nav ul[data-v-15fcebda]{text-align:center}.nav ul li[data-v-15fcebda]{margin:0;float:left}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Navigation.vue"],names:[],mappings:"AACA,6BACE,aAAc,AACd,WAAY,AACZ,gBAAgB,AAChB,qBAAsB,AACtB,WAAY,AACZ,wEAAkF,AAC1E,gEAA0E,AAClF,kBAAmB,AACnB,SAAS,AACT,WAAW,AACX,WAAY,CACb,AACD,+BACE,aAAc,CACf,AACD,qCACE,wBAA0B,CAC3B,AACD,oGACE,WAAY,AACZ,yBAA0B,AAC1B,eAAiB,CAClB,AACD,qDACE,kBAAoB,CACrB,AACD,gCACE,WAAY,CACb,AACD,kCACE,YAAY,AACZ,iBAAiB,AACjB,cAAe,AACf,kBAAmB,CACpB,AACD,8BACE,kBAAmB,AACnB,kBAAuB,CACxB,AAGD,6BACE,cAAc,AACd,WAAW,AACX,YAAY,AACZ,kBAAmB,AACnB,cAAc,AACd,WAAW,AACX,kBAAmB,AACnB,yBAA0B,AAC1B,iBAAiB,AACjB,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAEhB,8BAAkC,AAClC,0BAA8B,AAC9B,qBAA0B,CAC3B,AACD,iGAEE,4BAA8B,AAC9B,uBAAyB,AACzB,mBAAsB,CACvB,AACD,kDACE,cAAe,AACf,MAAO,CACR,AACD,uBACA,2FACK,YAAa,CACjB,AACD,6BACI,2BAA2B,AACnB,mBAAmB,AAC3B,UAAU,AACV,WAAY,AACZ,YAAa,AACb,iBAAiB,AACjB,wBAAwB,AAChB,eAAgB,CAC3B,AACD,2BACI,SAAU,CACb,AAGD,4BACI,SAAU,CACb,AACD,iEACI,SAAU,CACb,AACD,oCACI,UAAW,CACd,AACD,yBACI,iBAAmB,CACtB,AACD,4BACI,SAAS,AACT,UAAW,CACd,CACA",file:"Navigation.vue",sourcesContent:["\n.navigation[data-v-15fcebda] {\n  height: 200px;\n  width: 14em;\n  background:#FFF;\n  list-style-type: none;\n  z-index: 99;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\n  position: absolute;\n  top:50px;\n  left:-15em;\n  z-index:999;\n}\n.navigation a[data-v-15fcebda] {\n  color:#5A5651;\n}\n.navigation a[data-v-15fcebda]:hover {\n  background-color: #F1EDE9;\n}\n.navigation .nuxt-link-active[data-v-15fcebda], .navigation .nuxt-link-exact-active[data-v-15fcebda] {\n  color: #FFF;\n  background-color: #7d8066;\n  font-weight: 700;\n}\n.navigation .nuxt-link-active[data-v-15fcebda]:hover {\n  background: #7d8066;\n}\n.navigation li[data-v-15fcebda] {\n  height:50px;\n}\n.navigation li a[data-v-15fcebda] {\n  height:100%;\n  line-height:50px;\n  display: block;\n  padding-left:1.5em;\n}\n.nav-trigger[data-v-15fcebda] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\n\n/* -- Menyknapp ( Hamburgermenu )--*/\n#menuButton[data-v-15fcebda] {\n  color:#5A5651;\n  width:55px;\n  height:50px;\n  position: relative;\n  display:block;\n  float:left;\n  text-align: center;\n  text-transform: uppercase;\n  line-height:50px;\n  font-size: 2.1em;\n  z-index: 999;\n  cursor: pointer;\n  /* Strechar ut ikonen lite  - Progressive Enhancement -   https://stackoverflow.com/a/15262227/4178864 */ \n  -webkit-transform:scale(1.4, 1.0);\n  -ms-transform:scale(1.4, 1.0);\n  transform:scale(1.4, 1.0);\n}\n.nav-trigger + label[data-v-15fcebda],\n.navigation[data-v-15fcebda], .navBackground[data-v-15fcebda] {\n  -webkit-transition: left 0.2s;\n  -o-transition: left 0.2s;\n  transition: left 0.2s;\n}\n.nav-trigger:checked ~ .navigation[data-v-15fcebda] {\n  display: block;\n  left:0;\n}\n@media(min-width:55em) {\n#menuButton[data-v-15fcebda], .nav-trigger[data-v-15fcebda], .navBackground[data-v-15fcebda] {\n     display:none;\n}\n.navigation[data-v-15fcebda] {\n    -webkit-box-sizing:initial;\n            box-sizing:initial;\n    padding:0;\n    width: 33em;\n    height: 50px;\n    position:inherit;\n    -webkit-box-shadow:none;\n            box-shadow:none;\n}\n.nav li a[data-v-15fcebda] {\n    padding:0;\n}\n\n  /* defining a width for the menu items */\n.nav .home[data-v-15fcebda] {\n    width:5em;\n}\n.nav .teaHouses [data-v-15fcebda], .teaVarieties[data-v-15fcebda]{\n    width:9em;\n}\n.nav .openingHours[data-v-15fcebda] {\n    width:10em;\n}\n.nav ul[data-v-15fcebda] {\n    text-align: center;\n}\n.nav ul li[data-v-15fcebda] {\n    margin:0; \n    float:left;\n}\n}\n"],sourceRoot:""}])},191:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,'.box{position:relative;background-size:cover;background-repeat:no-repeat;height:100%}.box:before{content:"";display:block;padding-top:50%}.content{position:absolute;top:0;left:0;bottom:0;right:0}.headlineText{padding-top:100px;font-weight:400;font-size:.3em;line-height:1.4;color:#656263}.headlineText h3{font-size:4em}.headlineText,.headlineText p{text-align:left;margin:0 auto}.headlineText p{font-size:3em;width:15em}.headerImageWrapper{height:auto;height:25em;overflow:hidden;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);-o-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}@media(min-width:18.6em){.headlineText{font-size:.4em;text-align:center}.headlineText p{font-size:2.5em;text-align:justify;width:auto}.headerImageWrapper{height:30em}}@media(min-width:40em){.headlineText{width:48em;font-size:.5em;line-height:1.2;padding-top:110px}}@media(min-width:55em){.headlineText{font-size:.8em;line-height:1.4;padding-top:200px}.headlineText p{font-size:2em;margin-top:10px}.headerImageWrapper{height:42em;max-height:42em}}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/HeaderImage.vue"],names:[],mappings:"AACA,KACI,kBAAmB,AACnB,sBAAuB,AACvB,4BAA6B,AAC7B,WAAY,CACf,AACD,YACI,WAAW,AACX,cAAc,AACd,eAAgB,CACnB,AACD,SACI,kBAAoB,AACpB,MAAO,AACP,OAAQ,AACR,SAAU,AACV,OAAS,CACZ,AACD,cACI,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,aAAe,CAClB,AACD,iBACI,aAAc,CACjB,AACD,8BACI,gBAAiB,AACjB,aAAc,CACjB,AACD,gBACI,cAAc,AACd,UAAW,CACd,AACD,oBACE,YAAY,AACZ,YAAY,AACZ,gBAAiB,AACjB,sDAAwD,AACxD,iDAAmD,AACnD,6CAAgD,CACjD,AACD,yBACA,cACI,eAAgB,AAChB,iBAAkB,CACrB,AACD,gBACI,gBAAgB,AAChB,mBAAmB,AACnB,UAAW,CACd,AACD,oBACI,WAAa,CAChB,CACA,AACD,uBACA,cACI,WAAW,AACX,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,CACA,AACD,uBACA,cACI,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,gBACI,cAAc,AACd,eAAgB,CACnB,AACD,oBACI,YAAY,AACZ,eAAgB,CACnB,CACA",file:"HeaderImage.vue",sourcesContent:["\n.box { /* Tip taken from a tutorial/article http://www.mademyday.de/css-height-equals-width-with-pure-css.html */ \n    position: relative;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height:100%;\n}\n.box:before {\n    content:'';\n    display:block;\n    padding-top:50%;\n}\n.content{   \n    position:  absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n.headlineText {\n    padding-top: 100px;\n    font-weight: 400;\n    font-size: .3em;\n    line-height: 1.4;\n    color: #656263;\n}\n.headlineText h3 {\n    font-size:4em;\n}\n.headlineText, .headlineText p {\n    text-align: left;\n    margin:0 auto;\n}\n.headlineText p {\n    font-size:3em;\n    width:15em;\n}\n.headerImageWrapper {\n  height:auto;\n  height:25em;\n  overflow: hidden;\n  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  -o-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n@media(min-width:18.6em) {\n.headlineText {\n    font-size: .4em;\n    text-align:center;\n}\n.headlineText p {\n    font-size:2.5em;\n    text-align:justify;\n    width:auto;\n}\n.headerImageWrapper {\n    height: 30em;\n}\n}\n@media(min-width:40em) {\n.headlineText {\n    width:48em;\n    font-size: .5em;\n    line-height: 1.2;\n    padding-top: 110px;\n}\n}\n@media(min-width:55em) {\n.headlineText {\n    font-size: .8em;\n    line-height: 1.4;\n    padding-top: 200px;\n}\n.headlineText p {\n    font-size:2em;\n    margin-top:10px;\n}\n.headerImageWrapper {\n    height:42em;\n    max-height:42em;\n}\n}\n@media(min-width:62em) {\n}\n@media(min-width:80em) {\n}\n\n"],sourceRoot:""}])},192:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,".footerBackground[data-v-447e42e1]{height:90px;margin-top:-15px}.footerBase[data-v-447e42e1]{width:100%;padding:10px 20px;background-color:#fff;height:80px;border-top:5px solid #6fa9a2}.footerBase p[data-v-447e42e1]{display:block}.copyright[data-v-447e42e1]{font-family:sans-serif}@media(min-width:33em){.textWrapper[data-v-447e42e1]{margin:0 auto;position:relative;max-width:33em}.footerBase[data-v-447e42e1]{text-align:left}.footerBase p[data-v-447e42e1]{display:inline}.contact[data-v-447e42e1]{position:absolute;top:0;right:0}.copyright[data-v-447e42e1]{position:absolute;top:0;left:0}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Footer.vue"],names:[],mappings:"AACA,mCAEK,YAAY,AACZ,gBAAiB,CACrB,AACD,6BACG,WAAW,AACX,kBAAmB,AACnB,sBAAuB,AACvB,YAAY,AACZ,4BAA6B,CAC/B,AACD,+BACG,aAAc,CAChB,AACD,4BACG,sBAAwB,CAC1B,AACD,uBACA,8BACK,cAAc,AACd,kBAAkB,AAClB,cAAe,CACnB,AACD,6BACK,eAAiB,CACrB,AACD,+BACG,cAAe,CACjB,AACD,0BACK,kBAAkB,AAClB,MAAM,AACN,OAAQ,CACZ,AACD,4BACI,kBAAkB,AAClB,MAAM,AACN,MAAO,CACV,CACA",file:"Footer.vue",sourcesContent:["\n.footerBackground[data-v-447e42e1] {\r\n     /* background-image: url('../assets/images/footerBackground.png'); */\r\n     height:90px;\r\n     margin-top:-15px;\n}\n.footerBase[data-v-447e42e1] {\r\n   width:100%;\r\n   padding: 10px 20px;\r\n   background-color: #FFF;\r\n   height:80px;\r\n   border-top:5px solid #6fa9a2;\n}\n.footerBase p[data-v-447e42e1] {\r\n   display:block;\n}\n.copyright[data-v-447e42e1] {\r\n   font-family: sans-serif;\n}\n@media(min-width:33em){\n.textWrapper[data-v-447e42e1] {\r\n     margin:0 auto;\r\n     position:relative;\r\n     max-width:33em;\n}\n.footerBase[data-v-447e42e1] {\r\n     text-align: left;\n}\n.footerBase p[data-v-447e42e1] {\r\n   display:inline;\n}\n.contact[data-v-447e42e1] {\r\n     position:absolute;\r\n     top:0;\r\n     right:0;\n}\n.copyright[data-v-447e42e1] {\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\n}\n}\r\n"],sourceRoot:""}])},199:function(e,n,t){e.exports=t.p+"img/logo2.00f52ac.png"},214:function(e,n,t){"use strict";function a(e,n){i(e);var t=n.value;if("function"==typeof t){var a=!1;setTimeout(function(){a=!0},0),e[o]=function(n){if(a&&!e.contains(n.target))return t(n)},document.documentElement.addEventListener("click",e[o],!1)}}function i(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var A=t(1);A="default"in A?A.default:A;/^2\./.test(A.version)||A.util.warn("VueClickaway 2.1.0 only supports Vue 2.x, and does not support Vue "+A.version);var o="_vue_clickaway_handler",r={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:i},s={directives:{onClickaway:r}};n.version="2.1.0",n.directive=r,n.mixin=s},215:function(e,n,t){function a(e){t(237)}var i=t(18)(null,t(228),a,"data-v-447e42e1",null);e.exports=i.exports},216:function(e,n,t){var a=t(18)(t(180),t(229),null,null,null);e.exports=a.exports},217:function(e,n,t){function a(e){t(236)}var i=t(18)(t(181),t(227),a,null,null);e.exports=i.exports},218:function(e,n,t){function a(e){t(232)}var i=t(18)(null,t(223),a,"data-v-049c031e",null);e.exports=i.exports},219:function(e,n,t){function a(e){t(233)}var i=t(18)(t(182),t(224),a,"data-v-15fcebda",null);e.exports=i.exports},223:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"logo"},[a("div",{staticClass:"logoContent"},[a("div",{staticClass:"imgWrapper"},[a("img",{attrs:{src:t(199),alt:"Logotyp"}})])])])}]}},224:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav",attrs:{"aria-label":"Main Menu"}},[t("nav",[t("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideMenu,expression:"hideMenu"}]},[t("label",{attrs:{id:"menuButton",for:"nav-trigger"}},[e._v("≡")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"nav-trigger",attrs:{type:"checkbox",id:"nav-trigger"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{__c:function(n){var t=e.checked,a=n.target,i=!!a.checked;if(Array.isArray(t)){var A=e._i(t,null);i?A<0&&(e.checked=t.concat(null)):A>-1&&(e.checked=t.slice(0,A).concat(t.slice(A+1)))}else e.checked=i}}}),t("ul",{staticClass:"navigation"},[t("li",{staticClass:"home",on:{click:e.hideMenu}},[t("nuxt-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),t("li",{staticClass:"teaVarieties",on:{click:e.hideMenu}},[t("nuxt-link",{attrs:{to:"/tea"}},[e._v("Tea Varieties")])],1),t("li",{staticClass:"teaHouses",on:{click:e.hideMenu}},[t("nuxt-link",{attrs:{to:"/teahouses"}},[e._v("Tea Houses")])],1),t("li",{staticClass:"openingHours",on:{click:e.hideMenu}},[t("nuxt-link",{attrs:{to:"/hours"}},[e._v("Opening hours")])],1)])])])])},staticRenderFns:[]}},227:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"headerImageWrapper"},[t("div",{staticClass:"box",style:e.styleObject},[t("div",{staticClass:"content"},[t("div",{staticClass:"headlineText"},[t("h3",[e._v("\n          "+e._s(e.title)+" \n        ")]),t("p",[e._v(e._s(e.text)+" ")])])])])])},staticRenderFns:[]}},228:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[t("footer",[t("div",{staticClass:"footerBackground",attrs:{"aria-hidden":"true"}}),t("div",{staticClass:"footerBase"},[t("div",{staticClass:"textWrapper"},[t("p",{staticClass:"copyright"},[e._v(" © 2017  Tea2Go")]),t("p",{staticClass:"contact"},[e._v("Contact: info@tea2go.com ")])])])])])}]}},229:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("header",[t("div",{staticClass:"navWrapper"},[t("navigation")],1),t("header-image"),t("div",{staticClass:"logoWrapper lighten"},[t("logo")],1)],1)])},staticRenderFns:[]}},232:function(e,n,t){var a=t(187);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("f7785358",a,!0)},233:function(e,n,t){var a=t(188);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("16fd8d35",a,!0)},236:function(e,n,t){var a=t(191);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("9d41d93c",a,!0)},237:function(e,n,t){var a=t(192);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("7cda151e",a,!0)},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(216),i=t.n(a),A=t(215),o=t.n(A);n.default={components:{Header:i.a,Footerpart:o.a}}},257:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,".header{background:#fff;height:auto;position:relative}.navWrapper{-webkit-box-sizing:initial;box-sizing:initial;background:#fff;height:50px;position:absolute;z-index:999;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23)}.logoWrapper{padding:10px;padding-top:13px;position:relative;display:block;width:100%;height:6em;margin-top:-6em}.lighten{background-image:url("+t(266)+")}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/layouts/teahouse.vue"],names:[],mappings:"AACA,QACI,gBAAiB,AACjB,YAAa,AACb,iBAAmB,CACtB,AACD,YACI,2BAA4B,AACpB,mBAAoB,AAC5B,gBAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,wEAAkF,AAC1E,+DAA0E,CACrF,AACD,aACE,aAAa,AACb,iBAAiB,AACjB,kBAAkB,AAClB,cAAe,AACf,WAAW,AACX,WAAW,AACX,eAAgB,CACjB,AACD,SACE,8CAAmD,CACpD",file:"teahouse.vue",sourcesContent:['\n.header {\r\n    background: #FFF;\r\n    height: auto;\r\n    position: relative;\n}\n.navWrapper {\r\n    -webkit-box-sizing: initial;\r\n            box-sizing: initial;\r\n    background: #FFF;\r\n    height: 50px;\r\n    position: absolute;\r\n    z-index: 999;\r\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\n}\n.logoWrapper {\r\n  padding:10px;\r\n  padding-top:13px;\r\n  position:relative;\r\n  display: block;\r\n  width:100%;\r\n  height:6em;\r\n  margin-top:-6em;\n}\n.lighten {\r\n  background-image:url("~assets/images/lighten.png");\n}\r\n'],sourceRoot:""}])},266:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACWAQMAAAAluHAxAAAAA1BMVEX///+nxBvIAAAAAXRSTlOZyTXzhgAAAAxJREFUGBljGAVEAwABLAABOAcdjgAAAABJRU5ErkJggg=="},277:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"container"},[t("Header"),t("div",{staticClass:"main"},[t("main",[t("nuxt")],1)]),t("Footerpart")],1)},staticRenderFns:[]}},288:function(e,n,t){var a=t(257);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("6a977058",a,!0)}});