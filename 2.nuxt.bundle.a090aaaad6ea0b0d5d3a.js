webpackJsonp([2],{168:function(e,n,t){function a(e){t(269)}var i=t(18)(t(220),t(257),a,null,null);e.exports=i.exports},172:function(e,n,t){e.exports=t.p+"img/helsingfors.6cdf84c.jpg"},174:function(e,n,t){function a(e){return t(i(e))}function i(e){var n=r[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var r={"./helsingfors.jpg":172,"./helsingfors_thumbnail.jpg":189,"./oslo.jpg":190,"./oslo_thumbnail.jpg":191,"./stockholm.jpg":192,"./stockholm_thumbnail.jpg":193};a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=174},175:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=175},176:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=176},179:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(174),i=t(175),r=t(176);n.default={props:{name:{type:String,required:!0,default:""},isThumbnail:{type:Boolean,required:!1,default:!1}},data:function(){return{isMounted:!1,small:"small",medium:"medium",large:"large"}},methods:{getBackgroundImageURL:function(e,n){switch(n=n.toLowerCase(),e){case"small":return r("./"+n);case"medium":return i("./"+n);case"large":return a("./"+n);default:return i("./"+n)}}},mounted:function(){this.isMounted=!0}}},180:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(73),i=t.n(a),r=t(50),o=t.n(r),s=t(187),A=t.n(s),l=t(196),u=t.n(l);n.default={layout:"default",props:{isThumbnail:{type:Boolean,required:!1,default:!1}},components:{TeaHouse:u.a},data:function(){return{isMounted:!1}},methods:{jsonToArray:function(e){return e[i()(e)[0]]}},computed:{orderedTeaHouses:function(){return o.a.orderBy(this.jsonToArray(A.a),"name")}},mounted:function(){this.isMounted=!0}}},181:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,".teaHouseWrapper[data-v-180a1581]{min-height:20em;height:auto!important;width:100%;padding:20px 0;text-align:center;display:block}.innerWrapper[data-v-180a1581]{margin:0 auto}ul[data-v-180a1581]{padding-left:1.5em;text-decoration:none;list-style-type:none}ul li[data-v-180a1581]{height:44px;line-height:44px}ul li a[data-v-180a1581]{display:block-inline;height:100%}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/TeaHouses.vue"],names:[],mappings:"AACA,kCACE,gBAAgB,AAChB,sBAAuB,AACvB,WAAW,AACX,eAAoB,AACpB,kBAAmB,AACnB,aAAc,CACf,AACD,+BACE,aAAc,CACf,AACD,oBACE,mBAAmB,AACnB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,uBACE,YAAY,AACZ,gBAAiB,CAClB,AACD,yBACE,qBAAqB,AACrB,WAAY,CACb",file:"TeaHouses.vue",sourcesContent:["\n.teaHouseWrapper[data-v-180a1581] {\r\n  min-height:20em;\r\n  height:auto !important;\r\n  width:100%;\r\n  padding:20px 0 20px;\r\n  text-align: center;\r\n  display:block;\n}\n.innerWrapper[data-v-180a1581] {\r\n  margin:0 auto;\n}\nul[data-v-180a1581] {\r\n  padding-left:1.5em;\r\n  text-decoration: none;\r\n  list-style-type: none;\n}\nul li[data-v-180a1581] {\r\n  height:44px;\r\n  line-height:44px;\n}\nul li a[data-v-180a1581] {\r\n  display:block-inline;\r\n  height:100%;\n}\r\n"],sourceRoot:""}])},182:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,'.largePreview[data-v-29f287e2],.smallPreview[data-v-29f287e2]{background-color:#fff;margin:0 auto;margin-bottom:20px;text-align:center;position:relative;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);-o-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1);height:25em;width:25em}.largePreview[data-v-29f287e2]:before,.smallPreview[data-v-29f287e2]:before{content:"";position:absolute;display:block;top:0;left:0;bottom:0;right:0;padding-top:100%}.largePreview[data-v-29f287e2]:hover,.smallPreview[data-v-29f287e2]:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.smallPreview[data-v-29f287e2]{width:12em;height:17em;display:block}.smallPreview .content .imgWrapper[data-v-29f287e2]{height:120px}.content a[data-v-29f287e2]{display:block;color:#7d8066}.content a .title[data-v-29f287e2]{color:#000;line-height:2;padding:10px;margin:0}.smallPreview .title[data-v-29f287e2]{font-size:1.2em}.content a[data-v-29f287e2]:hover{color:#000}.linkUnderImage[data-v-29f287e2]{line-height:2}.content .imgWrapper[data-v-29f287e2]{height:250px;overflow:hidden}.content img[data-v-29f287e2]{width:100%}@media(min-width:41em){.smallPreview[data-v-29f287e2]{display:inline-block;margin:5px}}@media(min-width:48em){.smallPreview[data-v-29f287e2]{margin:20px}}@media(min-width:90em){.largePreview[data-v-29f287e2]{display:inline-block;margin:20px}}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/TeaHouse.vue"],names:[],mappings:"AACA,8DACE,sBAAsB,AACtB,cAAc,AACd,mBAAmB,AACnB,kBAAmB,AACnB,kBAAkB,AAClB,uEAA2E,AACnE,+DAAmE,AAC3E,sDAAuD,AACvD,iDAAkD,AAClD,8CAAgD,AAChD,YAAY,AACZ,UAAW,CACZ,AACD,4EACE,WAAW,AACX,kBAAkB,AAClB,cAAc,AACd,MAAM,AACN,OAAO,AACP,SAAS,AACT,QAAQ,AACR,gBAAiB,CAClB,AACD,0EACE,2EAA+E,AACvE,kEAAuE,CAChF,AACD,+BACE,WAAW,AACX,YAAY,AACZ,aAAc,CACf,AACD,oDACE,YAAa,CACd,AAGD,4BACE,cAAe,AACf,aAAc,CACf,AACD,mCACE,WAAW,AACX,cAAc,AACd,aAAa,AACb,QAAS,CACV,AACD,sCACG,eAAgB,CAClB,AACD,kCACE,UAAW,CACZ,AACD,iCACE,aAAc,CACf,AACD,sCACE,aAAa,AACb,eAAgB,CACjB,AACD,8BACE,UAAW,CACZ,AACD,uBACA,+BACI,qBAAqB,AACrB,UAAW,CACd,CACA,AACD,uBACA,+BACI,WAAY,CACf,CACA,AACD,uBACA,+BACI,qBAAqB,AACrB,WAAY,CACf,CACA",file:"TeaHouse.vue",sourcesContent:["\n.smallPreview[data-v-29f287e2], .largePreview[data-v-29f287e2] {\r\n  background-color:#FFF;\r\n  margin:0 auto;\r\n  margin-bottom:20px;\r\n  text-align: center;\r\n  position:relative;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  -o-transition:all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n  height:25em;\r\n  width:25em;\n}\n.smallPreview[data-v-29f287e2]:before, .largePreview[data-v-29f287e2]:before {\r\n  content:'';\r\n  position:absolute;\r\n  display:block;\r\n  top:0;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  padding-top:100%;\n}\n.smallPreview[data-v-29f287e2]:hover, .largePreview[data-v-29f287e2]:hover {\r\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.smallPreview[data-v-29f287e2] {\r\n  width:12em;\r\n  height:17em;\r\n  display:block;\n}\n.smallPreview .content .imgWrapper[data-v-29f287e2]  {\r\n  height:120px;\n}\n.content[data-v-29f287e2] {\n}\n.content a[data-v-29f287e2]  {\r\n  display: block;\r\n  color:#7d8066;\n}\n.content a .title[data-v-29f287e2] {\r\n  color:#000;\r\n  line-height:2; \r\n  padding:10px;\r\n  margin:0;\n}\n.smallPreview .title[data-v-29f287e2] {\r\n   font-size:1.2em;\n}\n.content a[data-v-29f287e2]:hover {\r\n  color:#000;\n}\n.linkUnderImage[data-v-29f287e2] {\r\n  line-height:2;\n}\n.content .imgWrapper[data-v-29f287e2] {\r\n  height:250px;\r\n  overflow:hidden;\n}\n.content img[data-v-29f287e2] {\r\n  width:100%;\n}\n@media(min-width:41em) {\n.smallPreview[data-v-29f287e2] {\r\n    display:inline-block;\r\n    margin:5px;\n}\n}\n@media(min-width:48em) {\n.smallPreview[data-v-29f287e2] {\r\n    margin:20px;\n}\n}\n@media(min-width:90em) {\n.largePreview[data-v-29f287e2] {\r\n    display:inline-block;\r\n    margin:20px;\n}\n}\r\n"],sourceRoot:""}])},187:function(e,n){e.exports={cities:[{name:"Helsingfors"},{name:"Stockholm"},{name:"Oslo"}]}},189:function(e,n,t){e.exports=t.p+"img/helsingfors_thumbnail.d1dd493.jpg"},190:function(e,n,t){e.exports=t.p+"img/oslo.a46061e.jpg"},191:function(e,n,t){e.exports=t.p+"img/oslo_thumbnail.117fb07.jpg"},192:function(e,n,t){e.exports=t.p+"img/stockholm.4cfdeac.jpg"},193:function(e,n,t){e.exports=t.p+"img/stockholm_thumbnail.2b4f7a9.jpg"},196:function(e,n,t){function a(e){t(204)}var i=t(18)(t(179),t(199),a,"data-v-29f287e2",null);e.exports=i.exports},197:function(e,n,t){function a(e){t(203)}var i=t(18)(t(180),t(198),a,"data-v-180a1581",null);e.exports=i.exports},198:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"teaHouseWrapper"},[t("div",{staticClass:"innerWrapper"},e._l(e.orderedTeaHouses,function(n){return t("TeaHouse",{key:n.name,attrs:{name:n.name,isThumbnail:e.isThumbnail}})}))])},staticRenderFns:[]}},199:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:[{smallPreview:e.isThumbnail,largePreview:!e.isThumbnail}]},[e.isMounted?t("div",{staticClass:"content"},[t("nuxt-link",{attrs:{to:{path:"/teahouses/"+e.name.toLowerCase()}}},[t("h1",{staticClass:"title"},[e._v(" "+e._s(e.name))]),t("div",{staticClass:"imgWrapper"},[e.isThumbnail?t("img",{attrs:{src:e.getBackgroundImageURL(e.large,e.name+"_thumbnail.jpg")}}):t("img",{attrs:{src:e.getBackgroundImageURL(e.large,e.name+".jpg")}})])]),t("nuxt-link",{staticClass:"linkUnderImage",attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"menu"}}},[e._v("View Menu")]),t("nuxt-link",{staticClass:"linkUnderImage",attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"hours"}}},[e._v("Opening Hours")]),t("nuxt-link",{staticClass:"linkUnderImage",attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"contact"}}},[e._v("Contact Us")])],1):e._e()])},staticRenderFns:[]}},203:function(e,n,t){var a=t(181);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("8613f9c6",a,!0)},204:function(e,n,t){var a=t(182);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("3f2f8fae",a,!0)},220:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(197),i=t.n(a);n.default={components:{TeaHouses:i.a}}},233:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},257:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mainContent"},[e._m(0),t("TeaHouses")],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"text"},[t("h1",{staticClass:"title"},[e._v(" Our Tea Houses ")]),t("p",[e._v("\n    Our restaurants / tehouses serves fairtrade and organic food. \n    You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just a cup of tea. \n    Which is excellent on it's own of course!\n     ")]),t("p",[e._v("We currently have three Tea Houses in Scandinavia:")]),t("p",[e._v(" Choose a Tea House you want to visit ")])])}]}},269:function(e,n,t){var a=t(233);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("1c80f620",a,!0)}});