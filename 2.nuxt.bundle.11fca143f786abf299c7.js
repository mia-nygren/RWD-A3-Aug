webpackJsonp([2],{177:function(e,n,t){function a(e){t(367)}var i=t(20)(t(324),t(358),a,null,null);e.exports=i.exports},180:function(e,n,t){"use strict";function a(e){return e.toLowerCase().split(" ").join("")}t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return r});var i="small",o="medium",r="large"},188:function(e,n,t){e.exports=t.p+"img/helsingfors-large.efb96de.jpg"},189:function(e,n,t){function a(e){return t(i(e))}function i(e){var n=o[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var o={"./carrotcake-large-hd.jpg":194,"./carrotcake-large.jpg":195,"./carrotcake-medium.jpg":196,"./carrotcake-small.jpg":197,"./helsingfors-large-hd.jpg":198,"./helsingfors-large.jpg":188,"./helsingfors-medium.jpg":199,"./helsingfors-small.jpg":200,"./helsingfors-thumbnail-large-hd.jpg":201,"./helsingfors-thumbnail-large.jpg":202,"./helsingfors-thumbnail-medium.jpg":203,"./helsingfors-thumbnail-small.jpg":204,"./oslo-large-hd.jpg":205,"./oslo-large.jpg":206,"./oslo-medium.jpg":207,"./oslo-small.jpg":208,"./oslo-thumbnail-large-hd.jpg":209,"./oslo-thumbnail-large.jpg":210,"./oslo-thumbnail-medium.jpg":211,"./oslo-thumbnail-small.jpg":212,"./stockholm-large-hd.jpg":213,"./stockholm-large.jpg":214,"./stockholm-medium.jpg":215,"./stockholm-small.jpg":216,"./stockholm-thumbnail-large-hd.jpg":217,"./stockholm-thumbnail-large.jpg":218,"./stockholm-thumbnail-medium.jpg":219,"./stockholm-thumbnail-small.jpg":220};a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=189},190:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(180);n.default={props:{fileName:{type:String,required:!0},fileEnding:{type:String,required:!1,default:".jpg"},getImageSrc:{type:Function,required:!0},sizes:{type:String,required:!1,default:"(max-width: 40em) 100vw, 60vw"},alt:{type:String,reguired:!0}},data:function(){return{small:a.a,medium:a.b,large:a.c}}}},194:function(e,n,t){e.exports=t.p+"img/carrotcake-large-hd.4a54b2c.jpg"},195:function(e,n,t){e.exports=t.p+"img/carrotcake-large.b8ce0cb.jpg"},196:function(e,n,t){e.exports=t.p+"img/carrotcake-medium.9c0b6f5.jpg"},197:function(e,n,t){e.exports=t.p+"img/carrotcake-small.a40529b.jpg"},198:function(e,n,t){e.exports=t.p+"img/helsingfors-large-hd.d62d228.jpg"},199:function(e,n,t){e.exports=t.p+"img/helsingfors-medium.878874a.jpg"},200:function(e,n,t){e.exports=t.p+"img/helsingfors-small.9c7c2ff.jpg"},201:function(e,n,t){e.exports=t.p+"img/helsingfors-thumbnail-large-hd.878874a.jpg"},202:function(e,n,t){e.exports=t.p+"img/helsingfors-thumbnail-large.4f617e2.jpg"},203:function(e,n,t){e.exports=t.p+"img/helsingfors-thumbnail-medium.9c7c2ff.jpg"},204:function(e,n,t){e.exports=t.p+"img/helsingfors-thumbnail-small.4bf4e51.jpg"},205:function(e,n,t){e.exports=t.p+"img/oslo-large-hd.b3702a3.jpg"},206:function(e,n,t){e.exports=t.p+"img/oslo-large.ba0dd37.jpg"},207:function(e,n,t){e.exports=t.p+"img/oslo-medium.d93a04d.jpg"},208:function(e,n,t){e.exports=t.p+"img/oslo-small.88bec8c.jpg"},209:function(e,n,t){e.exports=t.p+"img/oslo-thumbnail-large-hd.d93a04d.jpg"},210:function(e,n,t){e.exports=t.p+"img/oslo-thumbnail-large.b32bf7e.jpg"},211:function(e,n,t){e.exports=t.p+"img/oslo-thumbnail-medium.88bec8c.jpg"},212:function(e,n,t){e.exports=t.p+"img/oslo-thumbnail-small.5ad477f.jpg"},213:function(e,n,t){e.exports=t.p+"img/stockholm-large-hd.6faeb22.jpg"},214:function(e,n,t){e.exports=t.p+"img/stockholm-large.4971b70.jpg"},215:function(e,n,t){e.exports=t.p+"img/stockholm-medium.859954a.jpg"},216:function(e,n,t){e.exports=t.p+"img/stockholm-small.53359bc.jpg"},217:function(e,n,t){e.exports=t.p+"img/stockholm-thumbnail-large-hd.859954a.jpg"},218:function(e,n,t){e.exports=t.p+"img/stockholm-thumbnail-large.5d62df6.jpg"},219:function(e,n,t){e.exports=t.p+"img/stockholm-thumbnail-medium.53359bc.jpg"},220:function(e,n,t){e.exports=t.p+"img/stockholm-thumbnail-small.494c5ba.jpg"},222:function(e,n,t){var a=t(20)(t(190),t(224),null,null,null);e.exports=a.exports},224:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("img",{attrs:{src:e.getImageSrc(e.medium,e.fileName,".jpg"),srcset:e.getImageSrc(e.small,e.fileName,e.fileEnding)+" 350w,"+e.getImageSrc(e.medium,e.fileName,".jpg")+" 600w,"+e.getImageSrc(e.large,e.fileName,".jpg")+" 850w,"+e.getImageSrc(e.large+"-hd",e.fileName,".jpg")+" 1300w",sizes:e.sizes,alt:e.alt}})},staticRenderFns:[]}},234:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(180),i=t(222),o=t.n(i),r=t(189);n.default={props:{name:{type:String,required:!0,default:""},isThumbnail:{type:Boolean,required:!1,default:!1}},components:{SrcSet:o.a},data:function(){return{cleanSlug:a.d,small:a.a,medium:a.b,large:a.c}},methods:{cleanSlug:function(e){return e.toLowerCase().split(" ").join("")},getImageSrc:function(e,n,t){var a=n.toLowerCase()+"-"+e+t;try{return r("./"+a)}catch(e){console.log("could not find the image at path: "+a)}}}}},235:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(73),i=t.n(a),o=t(50),r=t.n(o),s=t(252),l=t.n(s),A=t(280),p=t.n(A);n.default={layout:"default",props:{isThumbnail:{type:Boolean,required:!1,default:!1}},components:{TeaHouse:p.a},methods:{jsonToArray:function(e){return e[i()(e)[0]]}},computed:{orderedTeaHouses:function(){return r.a.orderBy(this.jsonToArray(l.a),"name")}}}},241:function(e,n,t){n=e.exports=t(13)(!0),n.push([e.i,".teaHouseWrapper[data-v-180a1581]{min-height:20em;height:auto!important;width:100%;padding:20px 0;text-align:center;display:block}.innerWrapper[data-v-180a1581]{margin:0 auto}ul[data-v-180a1581]{padding-left:1.5em;text-decoration:none;list-style-type:none}ul li[data-v-180a1581]{height:44px;line-height:44px}ul li a[data-v-180a1581]{display:block-inline;height:100%}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/TeaHouses.vue"],names:[],mappings:"AACA,kCACE,gBAAgB,AAChB,sBAAuB,AACvB,WAAW,AACX,eAAoB,AACpB,kBAAmB,AACnB,aAAc,CACf,AACD,+BACE,aAAc,CACf,AACD,oBACE,mBAAmB,AACnB,qBAAsB,AACtB,oBAAsB,CACvB,AACD,uBACE,YAAY,AACZ,gBAAiB,CAClB,AACD,yBACE,qBAAqB,AACrB,WAAY,CACb",file:"TeaHouses.vue",sourcesContent:["\n.teaHouseWrapper[data-v-180a1581] {\r\n  min-height:20em;\r\n  height:auto !important;\r\n  width:100%;\r\n  padding:20px 0 20px;\r\n  text-align: center;\r\n  display:block;\n}\n.innerWrapper[data-v-180a1581] {\r\n  margin:0 auto;\n}\nul[data-v-180a1581] {\r\n  padding-left:1.5em;\r\n  text-decoration: none;\r\n  list-style-type: none;\n}\nul li[data-v-180a1581] {\r\n  height:44px;\r\n  line-height:44px;\n}\nul li a[data-v-180a1581] {\r\n  display:block-inline;\r\n  height:100%;\n}\r\n"],sourceRoot:""}])},242:function(e,n,t){n=e.exports=t(13)(!0),n.push([e.i,'.largePreview,.smallPreview{background-color:#fff;margin:0 auto;margin-bottom:20px;text-align:center;position:relative;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);-o-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1);height:23em;width:25em;overflow:hidden}.largePreview:before,.smallPreview:before{content:"";position:absolute;display:block;top:0;left:0;bottom:0;right:0;padding-top:100%}.largePreview:hover,.smallPreview:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.smallPreview{width:12em;height:13em;display:block}.largePreview,.smallPreview{margin-bottom:30px}.card .imgWrapper{position:relative;height:20em;overflow:hidden}.card .imgWrapper:before{content:"";position:absolute;display:block;top:0;left:0;bottom:0;right:0;padding-top:100%}.smallPreview .imgWrapper{height:10em}.card img{height:100%;position:absolute;top:0;left:0;right:0;bottom:0}.content a{height:100%;display:block}.content a .title{color:#000;line-height:3;height:3em;margin:0}.card .title{font-size:1.2em;background:#fff}.content a:hover{color:#000}.linkUnderImage{line-height:2}.content .imgWrapper{overflow:hidden;background-color:#d1d1d1}.content img{width:100%}@media (min-width:41em){.smallPreview{display:inline-block;margin:20px 25px}}@media (min-width:74em){margin:20px 5px}@media (min-width:90em){.largePreview{display:inline-block;margin:20px}}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/assets/styles/card.scss"],names:[],mappings:"AACA,4BAA4B,sBAAsB,cAAc,mBAAmB,kBAAkB,kBAAkB,uEAAyE,+DAAiE,sDAA6D,iDAAwD,8CAAqD,YAAY,WAAW,eAAe,CAChd,AACD,0CAA0C,WAAW,kBAAkB,cAAc,MAAM,OAAO,SAAS,QAAQ,gBAAgB,CAClI,AACD,wCAAwC,2EAA6E,kEAAoE,CACxL,AACD,cAAc,WAAW,YAAY,aAAc,CAClD,AACD,4BAFmD,kBAAkB,CAGpE,AACD,kBAAkB,kBAAkB,YAAY,eAAe,CAC9D,AACD,yBAAyB,WAAW,kBAAkB,cAAc,MAAM,OAAO,SAAS,QAAQ,gBAAgB,CACjH,AACD,0BAA0B,WAAW,CACpC,AACD,UAAU,YAAY,kBAAkB,MAAM,OAAO,QAAQ,QAAQ,CACpE,AACD,WAAW,YAAY,aAAa,CACnC,AACD,kBAAkB,WAAW,cAAc,WAAW,QAAQ,CAC7D,AACD,aAAa,gBAAgB,eAAe,CAC3C,AACD,iBAAiB,UAAU,CAC1B,AACD,gBAAgB,aAAa,CAC5B,AACD,qBAAqB,gBAAgB,wBAAwB,CAC5D,AACD,aAAa,UAAU,CACtB,AACD,wBACA,cAAc,qBAAqB,gBAAgB,CAClD,CACA,AACD,wBAAyB,eAAe,CACvC,AACD,wBACA,cAAc,qBAAqB,WAAW,CAC7C,CACA",file:"card.scss",sourcesContent:["\n.smallPreview,.largePreview{background-color:#FFF;margin:0 auto;margin-bottom:20px;text-align:center;position:relative;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);-webkit-transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);-o-transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);height:23em;width:25em;overflow:hidden\n}\n.smallPreview:before,.largePreview:before{content:'';position:absolute;display:block;top:0;left:0;bottom:0;right:0;padding-top:100%\n}\n.smallPreview:hover,.largePreview:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)\n}\n.smallPreview{width:12em;height:13em;display:block;margin-bottom:30px\n}\n.largePreview{margin-bottom:30px\n}\n.card .imgWrapper{position:relative;height:20em;overflow:hidden\n}\n.card .imgWrapper:before{content:'';position:absolute;display:block;top:0;left:0;bottom:0;right:0;padding-top:100%\n}\n.smallPreview .imgWrapper{height:10em\n}\n.card img{height:100%;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.content a{height:100%;display:block\n}\n.content a .title{color:#000;line-height:3;height:3em;margin:0\n}\n.card .title{font-size:1.2em;background:#FFF\n}\n.content a:hover{color:#000\n}\n.linkUnderImage{line-height:2\n}\n.content .imgWrapper{overflow:hidden;background-color:#D1D1D1\n}\n.content img{width:100%\n}\n@media (min-width: 41em){\n.smallPreview{display:inline-block;margin:20px 25px\n}\n}\n@media (min-width: 74em){margin:20px 5px\n}\n@media (min-width: 90em){\n.largePreview{display:inline-block;margin:20px\n}\n}\n"],sourceRoot:""}])},243:function(e,n,t){n=e.exports=t(13)(!0),n.push([e.i,".largePreview[data-v-29f287e2]{height:25em;width:25em}.smallPreview[data-v-29f287e2]{height:17em}.smallPreview .content .imgWrapper[data-v-29f287e2]{height:120px}.teahouse a[data-v-29f287e2]{display:block;color:#7d8066;height:auto}.linksUnderImage[data-v-29f287e2]{padding:10px 0}.linksUnderImage a[data-v-29f287e2]{height:2em}.content a .title[data-v-29f287e2]{color:#000}.content a[data-v-29f287e2]{display:block;color:#7d8066}.content a .title[data-v-29f287e2]{line-height:2;padding:10px}.content .imgWrapper[data-v-29f287e2]{height:250px}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/TeaHouse.vue"],names:[],mappings:"AAuEA,+BACE,YAAY,AACZ,UAAW,CACZ,AACD,+BACE,WAAY,CACb,AACD,oDACE,YAAa,CACd,AACD,6BACE,cAAe,AACf,cAAc,AACd,WAAY,CACb,AACD,kCACE,cAAgB,CACjB,AACD,oCACE,UAAW,CACZ,AACD,mCACE,UAAW,CAGZ,AACD,4BACE,cAAe,AACf,aAAc,CACf,AACD,mCACE,cAAc,AACd,YAAa,CACd,AACD,sCACE,YAAa,CACd",file:"TeaHouse.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/* Här överskrider jag den css som finns i assets/styles/card.scss \r\n(har skrivit card.scss själv, men det är bättre att ha en gemensam fil för delad css) */\n.largePreview[data-v-29f287e2] {\r\n  height:25em;\r\n  width:25em;\n}\n.smallPreview[data-v-29f287e2] {\r\n  height:17em;\n}\n.smallPreview .content .imgWrapper[data-v-29f287e2]  {\r\n  height:120px;\n}\n.teahouse a[data-v-29f287e2]  {\r\n  display: block;\r\n  color:#7d8066; \r\n  height:auto;\n}\n.linksUnderImage[data-v-29f287e2] {\r\n  padding: 10px 0;\n}\n.linksUnderImage a[data-v-29f287e2] {\r\n  height:2em;\n}\n.content a .title[data-v-29f287e2] {\r\n  color:#000;\r\n  line-height:2; \r\n  padding:10px;\n}\n.content a[data-v-29f287e2]  {\r\n  display: block;\r\n  color:#7d8066;\n}\n.content a .title[data-v-29f287e2] {\r\n  line-height:2; \r\n  padding:10px;\n}\n.content .imgWrapper[data-v-29f287e2] {\r\n  height:250px;\n}\r\n"],sourceRoot:""}])},252:function(e,n){e.exports={cities:[{name:"Helsingfors"},{name:"Stockholm"},{name:"Oslo"}]}},280:function(e,n,t){function a(e){t(300),t(301)}var i=t(20)(t(234),t(288),a,"data-v-29f287e2",null);e.exports=i.exports},281:function(e,n,t){function a(e){t(299)}var i=t(20)(t(235),t(287),a,"data-v-180a1581",null);e.exports=i.exports},287:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"teaHouseWrapper"},[t("div",{staticClass:"innerWrapper"},e._l(e.orderedTeaHouses,function(n){return t("tea-house",{key:n.name,attrs:{name:n.name,"is-thumbnail":e.isThumbnail}})}))])},staticRenderFns:[]}},288:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:["card",{smallPreview:e.isThumbnail,largePreview:!e.isThumbnail}]},[t("div",{staticClass:"content teahouse"},[t("nuxt-link",{attrs:{to:{path:"/teahouses/"+e.cleanSlug(e.name)}}},[t("h1",{staticClass:"title"},[e._v(" "+e._s(e.name))]),t("div",{staticClass:"imgWrapper"},[e.isThumbnail?t("src-set",{attrs:{"get-image-src":e.getImageSrc,"file-name":e.name+"-thumbnail",alt:e.name}}):t("src-set",{attrs:{"get-image-src":e.getImageSrc,"file-name":e.name,alt:e.name}})],1)]),t("div",{staticClass:"linksUnderImage"},[t("nuxt-link",{attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"menu"}}},[e._v("View Menu")]),t("nuxt-link",{attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"hours"}}},[e._v("Opening Hours")]),t("nuxt-link",{attrs:{to:{path:"/teahouses/"+e.name.toLowerCase(),hash:"contact"}}},[e._v("Contact Us")])],1)],1)])},staticRenderFns:[]}},299:function(e,n,t){var a=t(241);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(14)("8613f9c6",a,!0)},300:function(e,n,t){var a=t(242);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(14)("152d8a34",a,!0)},301:function(e,n,t){var a=t(243);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(14)("e04d24a2",a,!0)},324:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(281),i=t.n(a);n.default={components:{TeaHouses:i.a}}},332:function(e,n,t){n=e.exports=t(13)(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},358:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mainContent"},[e._m(0),t("TeaHouses")],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"text"},[t("h1",{staticClass:"title"},[e._v(" Our Tea Houses ")]),t("p",[e._v("\n    Our restaurants / tehouses serves fairtrade and organic food. \n    You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just a cup of tea. \n    Which is excellent on it's own of course!\n     ")]),t("p",[e._v("We currently have three Tea Houses in Scandinavia:")])])}]}},367:function(e,n,t){var a=t(332);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(14)("1c80f620",a,!0)}});