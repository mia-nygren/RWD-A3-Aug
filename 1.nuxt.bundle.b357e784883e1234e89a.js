webpackJsonp([1],{224:function(e,t,n){var r=n(8)(n(428),n(442),null,null,null);e.exports=r.exports},225:function(e,t,n){"use strict";function r(e){return e.toLowerCase().split(" ").join("")}n.d(t,"d",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o});var a="small",i="medium",o="large"},226:function(e,t,n){function r(e){n(277)}var a=n(8)(n(230),n(274),r,"data-v-375bf7d0",null);e.exports=a.exports},227:function(e,t,n){function r(e){return n(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./blueberrymuffin-large-hd.jpg":234,"./blueberrymuffin-large.jpg":235,"./blueberrymuffin-medium.jpg":236,"./blueberrymuffin-small.jpg":237,"./brownie-large-hd.jpg":238,"./brownie-large.jpg":239,"./brownie-medium.jpg":240,"./brownie-small.jpg":241,"./carrotcake-large-hd.jpg":242,"./carrotcake-large.jpg":243,"./carrotcake-medium.jpg":244,"./carrotcake-small.jpg":245,"./helsingfors-large-hd.jpg":246,"./helsingfors-large.jpg":247,"./helsingfors-medium.jpg":248,"./helsingfors-small.jpg":249,"./helsingfors-thumbnail-large-hd.jpg":250,"./helsingfors-thumbnail-large.jpg":251,"./helsingfors-thumbnail-medium.jpg":252,"./helsingfors-thumbnail-small.jpg":253,"./oslo-large-hd.jpg":254,"./oslo-large.jpg":255,"./oslo-medium.jpg":256,"./oslo-small.jpg":257,"./oslo-thumbnail-large-hd.jpg":258,"./oslo-thumbnail-large.jpg":259,"./oslo-thumbnail-medium.jpg":260,"./oslo-thumbnail-small.jpg":261,"./stockholm-large-hd.jpg":262,"./stockholm-large.jpg":263,"./stockholm-medium.jpg":264,"./stockholm-small.jpg":265,"./stockholm-thumbnail-large-hd.jpg":266,"./stockholm-thumbnail-large.jpg":267,"./stockholm-thumbnail-medium.jpg":268,"./stockholm-thumbnail-small.jpg":269};r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=227},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(225);t.default={props:{fileName:{type:String,required:!0},fileEnding:{type:String,required:!1,default:".jpg"},getImageSrc:{type:Function,required:!0},sizes:{type:String,required:!1,default:"(max-width: 40em) 100vw, 60vw"},alt:{type:String,reguired:!0}},data:function(){return{small:r.a,medium:r.b,large:r.c}}}},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r);t.default={layout:"default",props:{monday:{type:String,required:!0},tuesday:{type:String,required:!0},wednesday:{type:String,required:!0},thursday:{type:String,required:!0},friday:{type:String,required:!0},sathurday:{type:String,required:!0},sunday:{type:String,required:!0}},data:function(){return{weekdays:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",sathurday:"Sathurday",sunday:"Sunday"}}},methods:{capitalize:function(e){return a.a.capitalize(e)}}}},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(226),a=n.n(r);t.default={components:{Hours:a.a},props:{displayTitle:{type:Boolean,required:!1,default:!1}}}},232:function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,'dl[data-v-375bf7d0]{padding-bottom:1em;display:block}dd[data-v-375bf7d0],dt[data-v-375bf7d0]{padding:1em .1em .2em;border-bottom:1px solid #c7baad}dt[data-v-375bf7d0]{font-weight:600;float:left;clear:left;width:100px;font-weight:700;color:#927c67;text-align:left}dt[data-v-375bf7d0]:after{content:":"}dd[data-v-375bf7d0]{text-align:right}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/opening-hours/Hours.vue"],names:[],mappings:"AA2EA,oBACG,mBAAmB,AACnB,aAAc,CAChB,AACD,wCACE,sBAA8B,AAC9B,+BAAgC,CACjC,AACD,oBACI,gBAAiB,AACjB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,gBAAkB,AAClB,cAAe,AACf,eAAiB,CACpB,AACD,0BACI,WAAa,CAChB,AACD,oBACI,gBAAkB,CACrB",file:"Hours.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* CSS utifrån exemplet: Formating a data list http://www.the-art-of-web.com/css/format-dl/ */\ndl[data-v-375bf7d0] {\r\n   padding-bottom:1em;\r\n   display:block;\n}\ndd[data-v-375bf7d0], dt[data-v-375bf7d0] {\r\n  padding:1em 0.1em 0.2em 0.1em;\r\n  border-bottom:1px solid #C7BAAD;\n}\ndt[data-v-375bf7d0] {\r\n    font-weight: 600;\r\n    float: left;\r\n    clear: left;\r\n    width: 100px;\r\n    font-weight: bold;\r\n    color: #927C67;\r\n    text-align: left;\n}\ndt[data-v-375bf7d0]:after {\r\n    content: ":";\n}\ndd[data-v-375bf7d0] {\r\n    text-align: right;\n}\r\n'],sourceRoot:""}])},234:function(e,t,n){e.exports=n.p+"img/blueberrymuffin-large-hd.c422c03.jpg"},235:function(e,t,n){e.exports=n.p+"img/blueberrymuffin-large.e473afb.jpg"},236:function(e,t,n){e.exports=n.p+"img/blueberrymuffin-medium.99e3a68.jpg"},237:function(e,t,n){e.exports=n.p+"img/blueberrymuffin-small.98965e1.jpg"},238:function(e,t,n){e.exports=n.p+"img/brownie-large-hd.dee3a68.jpg"},239:function(e,t,n){e.exports=n.p+"img/brownie-large.62e7f9c.jpg"},240:function(e,t,n){e.exports=n.p+"img/brownie-medium.f1a09a2.jpg"},241:function(e,t,n){e.exports=n.p+"img/brownie-small.5965a6e.jpg"},242:function(e,t,n){e.exports=n.p+"img/carrotcake-large-hd.4a54b2c.jpg"},243:function(e,t,n){e.exports=n.p+"img/carrotcake-large.b8ce0cb.jpg"},244:function(e,t,n){e.exports=n.p+"img/carrotcake-medium.9c0b6f5.jpg"},245:function(e,t,n){e.exports=n.p+"img/carrotcake-small.a40529b.jpg"},246:function(e,t,n){e.exports=n.p+"img/helsingfors-large-hd.d62d228.jpg"},247:function(e,t,n){e.exports=n.p+"img/helsingfors-large.efb96de.jpg"},248:function(e,t,n){e.exports=n.p+"img/helsingfors-medium.878874a.jpg"},249:function(e,t,n){e.exports=n.p+"img/helsingfors-small.9c7c2ff.jpg"},250:function(e,t,n){e.exports=n.p+"img/helsingfors-thumbnail-large-hd.878874a.jpg"},251:function(e,t,n){e.exports=n.p+"img/helsingfors-thumbnail-large.4f617e2.jpg"},252:function(e,t,n){e.exports=n.p+"img/helsingfors-thumbnail-medium.9c7c2ff.jpg"},253:function(e,t,n){e.exports=n.p+"img/helsingfors-thumbnail-small.4bf4e51.jpg"},254:function(e,t,n){e.exports=n.p+"img/oslo-large-hd.b3702a3.jpg"},255:function(e,t,n){e.exports=n.p+"img/oslo-large.ba0dd37.jpg"},256:function(e,t,n){e.exports=n.p+"img/oslo-medium.d93a04d.jpg"},257:function(e,t,n){e.exports=n.p+"img/oslo-small.88bec8c.jpg"},258:function(e,t,n){e.exports=n.p+"img/oslo-thumbnail-large-hd.d93a04d.jpg"},259:function(e,t,n){e.exports=n.p+"img/oslo-thumbnail-large.b32bf7e.jpg"},260:function(e,t,n){e.exports=n.p+"img/oslo-thumbnail-medium.88bec8c.jpg"},261:function(e,t,n){e.exports=n.p+"img/oslo-thumbnail-small.5ad477f.jpg"},262:function(e,t,n){e.exports=n.p+"img/stockholm-large-hd.6faeb22.jpg"},263:function(e,t,n){e.exports=n.p+"img/stockholm-large.4971b70.jpg"},264:function(e,t,n){e.exports=n.p+"img/stockholm-medium.859954a.jpg"},265:function(e,t,n){e.exports=n.p+"img/stockholm-small.53359bc.jpg"},266:function(e,t,n){e.exports=n.p+"img/stockholm-thumbnail-large-hd.859954a.jpg"},267:function(e,t,n){e.exports=n.p+"img/stockholm-thumbnail-large.5d62df6.jpg"},268:function(e,t,n){e.exports=n.p+"img/stockholm-thumbnail-medium.53359bc.jpg"},269:function(e,t,n){e.exports=n.p+"img/stockholm-thumbnail-small.494c5ba.jpg"},271:function(e,t,n){var r=n(8)(n(229),n(273),null,null,null);e.exports=r.exports},272:function(e,t,n){var r=n(8)(n(231),n(276),null,null,null);e.exports=r.exports},273:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.getImageSrc(e.medium,e.fileName,e.fileEnding),srcset:e.getImageSrc(e.small,e.fileName,e.fileEnding)+" 350w,"+e.getImageSrc(e.medium,e.fileName,e.fileEnding)+" 600w,"+e.getImageSrc(e.large,e.fileName,e.fileEnding)+" 850w,"+e.getImageSrc(e.large+"-hd",e.fileName,e.fileEnding)+" 1300w",sizes:e.sizes,alt:e.alt}})},staticRenderFns:[]}},274:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{staticStyle:{width:"100%"}},[n("dt",[e._v(e._s(e.weekdays.monday))]),n("dd",[e._v(e._s(e.monday))]),n("dt",[e._v(e._s(e.weekdays.tuesday))]),n("dd",[e._v(e._s(e.tuesday))]),n("dt",[e._v(e._s(e.weekdays.wednesday))]),n("dd",[e._v(e._s(e.wednesday))]),n("dt",[e._v(e._s(e.weekdays.thursday))]),n("dd",[e._v(e._s(e.thursday))]),n("dt",[e._v(e._s(e.weekdays.friday))]),n("dd",[e._v(e._s(e.friday))]),n("dt",[e._v(e._s(e.weekdays.sathurday))]),n("dd",[e._v(e._s(e.sathurday))]),n("dt",[e._v(e._s(e.weekdays.sunday))]),n("dd",[e._v(e._s(e.sunday))])])},staticRenderFns:[]}},276:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e.displayTitle?n("h2",{staticClass:"hoursTitle"},[e._v("Helsingfors")]):e._e(),n("hours",{attrs:{monday:"10am-18pm",tuesday:"10am-18pm",wednesday:"10am-19pm",thursday:"10am-19pm",friday:"12am-21pm",sathurday:"12am-21pm",sunday:"Closed"}})],1)},staticRenderFns:[]}},277:function(e,t,n){var r=n(232);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(13)("29152722",r,!0)},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(271),a=n.n(r),i=n(227);t.default={components:{SrcSet:a.a},props:{item:{type:Object,required:!0},price:{type:String,required:!0},currency:{type:String,required:!1,default:"SEK"},month:{type:String,required:!0},fileName:{type:String,required:!0}},methods:{getImageSrc:function(e,t,n){var r=t.toLowerCase()+"-"+e+n;try{return i("./"+r)}catch(e){console.log("could not find the image at path: "+r)}}}}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={watch:{$route:function(e,t){this.$gmapDefaultResizeBus.$emit("resize")}},props:{infoText:{type:String,required:!1,default:null},coordinates:{type:Object,required:!0}}}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r);t.default={props:{title:{type:String,required:!1,default:null},currency:{type:String,required:!1,default:"SEK"},items:{type:Array,required:!0,default:function(){return[]}}},methods:{capitalize:function(e){return a.a.capitalize(e)}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(289),o=n.n(i);t.default={props:{currency:{type:String,required:!1,default:"SEK"},drinks:{type:Array,required:!1,default:function(){return[]}},breakfast:{type:Array,required:!1,default:null},brunch:{type:Array,required:!1,default:function(){return[]}},lunch:{type:Array,required:!1,default:function(){return[]}},dessert:{type:Array,required:!1,default:function(){return[]}}},components:{InnerTable:o.a},methods:{getCategoryId:function(e){return this.menu.categories.indexOf(e)},getItemsOfCategory:function(e){var t=this.getCategoryId(e);return a.a.filter(this.menu.items,["category",t])}},computed:{orderItems:function(e,t){return a.a.orderBy(e,t)}}}},283:function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".wrapper[data-v-0d7d2c5e]{padding-top:0;padding-bottom:4em}h2[data-v-0d7d2c5e]{font-size:1.2em;line-height:1.4;padding-top:1.2em;padding-bottom:1.2em}#food[data-v-0d7d2c5e]{font-size:1.2em;border-bottom:2px solid #000;margin-top:2em}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/Menu.vue"],names:[],mappings:"AACA,0BACE,cAAc,AACd,kBAAmB,CACpB,AACD,oBACE,gBAAiB,AACjB,gBAAgB,AAChB,kBAAkB,AAClB,oBAAqB,CACtB,AACD,uBACE,gBAAgB,AAChB,6BAA8B,AAC9B,cAAe,CAChB",file:"Menu.vue",sourcesContent:["\n.wrapper[data-v-0d7d2c5e] {\r\n  padding-top:0;\r\n  padding-bottom:4em;\n}\nh2[data-v-0d7d2c5e] {\r\n  font-size: 1.2em;\r\n  line-height:1.4;\r\n  padding-top:1.2em;\r\n  padding-bottom:1.2em;\n}\n#food[data-v-0d7d2c5e] {\r\n  font-size:1.2em;\r\n  border-bottom: 2px solid #000;\r\n  margin-top:2em;\n}\r\n\r\n"],sourceRoot:""}])},284:function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".imgWrapper img[data-v-2403ac52]{max-width:100%}.imgWrapper[data-v-2403ac52]{width:100%;margin:1em 0}.featured p[data-v-2403ac52]{font-size:1em}.featured[data-v-2403ac52]{padding-bottom:3em}.price[data-v-2403ac52]{font-weight:700}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/FeaturedMenuItem.vue"],names:[],mappings:"AACA,iCACE,cAAe,CAChB,AACD,6BACE,WAAW,AACX,YAAiB,CAClB,AACD,6BACE,aAAc,CACf,AACD,2BACE,kBAAmB,CACpB,AACD,wBACE,eAAiB,CAClB",file:"FeaturedMenuItem.vue",sourcesContent:["\n.imgWrapper img[data-v-2403ac52]{\r\n  max-width:100%;\n}\n.imgWrapper[data-v-2403ac52] {\r\n  width:100%;\r\n  margin:1em 0 1em;\n}\n.featured p[data-v-2403ac52] {\r\n  font-size:1em;\n}\n.featured[data-v-2403ac52] {\r\n  padding-bottom:3em;\n}\n.price[data-v-2403ac52] {\r\n  font-weight: 700;\n}\r\n"],sourceRoot:""}])},285:function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".map-container{min-width:200px;width:100%;min-height:100px;margin-bottom:4em}.vue-map,.vue-map-container{min-height:300px}@media (min-width:30em){.map-container,.vue-map,.vue-map-container{min-height:400px}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/GoogleMap.vue"],names:[],mappings:"AACA,eAAe,gBAAgB,WAAW,iBAAiB,iBAAiB,CAC3E,AACD,4BAA4B,gBAAgB,CAC3C,AACD,wBAGA,2CAA4B,gBAAgB,CAC3C,CACA",file:"GoogleMap.vue",sourcesContent:["\n.map-container{min-width:200px;width:100%;min-height:100px;margin-bottom:4em\n}\n.vue-map-container,.vue-map{min-height:300px\n}\n@media (min-width: 30em){\n.map-container{min-height:400px\n}\n.vue-map-container,.vue-map{min-height:400px\n}\n}\n"],sourceRoot:""}])},286:function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,"table[data-v-b89f30ec]{width:100%;border-collapse:collapse;border-spacing:0}th[data-v-b89f30ec]{padding:1em 0 .5em;text-align:left}td[data-v-b89f30ec]{border-bottom:1px dotted #c7baad}tr[data-v-b89f30ec]{width:100%}.text .menuTitle[data-v-b89f30ec]{padding-top:1.2em!important;font-size:1.2em!important}.item[data-v-b89f30ec]{min-width:50%;text-align:left}.price[data-v-b89f30ec]{min-width:3em;text-align:right;color:#7d8066}.price span[data-v-b89f30ec]{font-size:.8em;color:#7d8066}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/teahouses/InnerTable.vue"],names:[],mappings:"AACA,uBAAuB,WAAW,yBAAyB,gBAAgB,CAC1E,AACD,oBAAoB,mBAAqB,eAAe,CACvD,AACD,oBAAoB,gCAAgC,CACnD,AACD,oBAAoB,UAAU,CAC7B,AACD,kCAAkC,4BAA6B,yBAA0B,CACxF,AACD,uBAAuB,cAAc,eAAe,CACnD,AACD,wBAAwB,cAAc,iBAAiB,aAAa,CACnE,AACD,6BAA6B,eAAgB,aAAa,CACzD",file:"InnerTable.vue",sourcesContent:["\ntable[data-v-b89f30ec]{width:100%;border-collapse:collapse;border-spacing:0\n}\nth[data-v-b89f30ec]{padding:1em 0 .5em 0;text-align:left\n}\ntd[data-v-b89f30ec]{border-bottom:1px dotted #C7BAAD\n}\ntr[data-v-b89f30ec]{width:100%\n}\n.text .menuTitle[data-v-b89f30ec]{padding-top:1.2em !important;font-size:1.2em !important\n}\n.item[data-v-b89f30ec]{min-width:50%;text-align:left\n}\n.price[data-v-b89f30ec]{min-width:3em;text-align:right;color:#7d8066\n}\n.price span[data-v-b89f30ec]{font-size:0.8em;color:#7d8066\n}\n"],sourceRoot:""}])},287:function(e,t,n){function r(e){n(296)}var a=n(8)(n(279),n(292),r,"data-v-2403ac52",null);e.exports=a.exports},288:function(e,t,n){function r(e){n(297)}var a=n(8)(n(280),n(293),r,null,null);e.exports=a.exports},289:function(e,t,n){function r(e){n(298)}var a=n(8)(n(281),n(294),r,"data-v-b89f30ec",null);e.exports=a.exports},290:function(e,t,n){function r(e){n(295)}var a=n(8)(n(282),n(291),r,"data-v-0d7d2c5e",null);e.exports=a.exports},291:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("h1",{staticClass:"centered",attrs:{id:"food",name:"menu"}},[e._v("MENU")]),n("inner-table",{attrs:{title:"Breakfast",items:e.breakfast,currency:e.currency}}),n("inner-table",{attrs:{title:"Brunch",items:e.brunch,currency:e.currency}}),n("inner-table",{attrs:{title:"Lunch",items:e.lunch,currency:e.currency}}),n("inner-table",{attrs:{title:"Drinks",items:e.drinks,currency:e.currency}}),n("inner-table",{attrs:{title:"Dessert",items:e.dessert,currency:e.currency}})],1)},staticRenderFns:[]}},292:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"featured"},[n("h3",[e._v(" Dessert of the month ("+e._s(e.month)+")")]),n("p",[e._v(" "+e._s(e.item.name)+". Price "),n("span",{staticClass:"price"},[e._v(e._s(e.price))]),n("span",{domProps:{innerHTML:e._s(e.currency)}}),e._v(" (usually "+e._s(e.item.price)+" "),n("span",{domProps:{innerHTML:e._s(e.currency)}}),e._v(")")]),n("div",{staticClass:"imgWrapper"},[n("src-set",{attrs:{"get-image-src":e.getImageSrc,"file-name":e.fileName}})],1)])},staticRenderFns:[]}},293:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-container"},[n("gmap-map",{attrs:{center:e.coordinates,zoom:12}},[n("gmap-marker",{attrs:{position:e.coordinates}}),null!==e.infoText?n("gmap-info-window",{attrs:{position:e.coordinates}},[e._v("\n      "+e._s(e.infoText)+"\n    ")]):e._e()],1)],1)},staticRenderFns:[]}},294:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length>0?n("div",[null!==e.title?n("h2",{staticClass:"menuTitle"},[e._v(e._s(e.title))]):e._e(),e._l(e.items,function(t){return n("table",{key:t},[n("thead",[n("tr",[n("th",{attrs:{scope:"col",colspan:"2"}},[e._v(e._s(e.capitalize(t.name)))])])]),n("tbody",e._l(t.items,function(t){return n("tr",{key:t.name},[n("td",{staticClass:"item"},[e._v(e._s(t.name)+" ")]),n("td",{staticClass:"price"},[e._v(e._s(t.price)+" "),n("span",{domProps:{innerHTML:e._s(e.currency)}})])])}))])})],2):e._e()},staticRenderFns:[]}},295:function(e,t,n){var r=n(283);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(13)("58daf262",r,!0)},296:function(e,t,n){var r=n(284);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(13)("b9bdd87a",r,!0)},297:function(e,t,n){var r=n(285);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(13)("29dbe8fd",r,!0)},298:function(e,t,n){var r=n(286);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(13)("67365bfa",r,!0)},428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(272),a=n.n(r),i=n(290),o=n.n(i),s=n(287),d=n.n(s),c=n(288),m=n.n(c);t.default={layout:"teahouse",components:{Hours:a.a,Menu:o.a,FeaturedMenuItem:d.a,GoogleMaps:m.a},fetch:function(e){var t=e.store;e.params;t.dispatch("changeHeaderImageFileName","Stockholm"),t.dispatch("resetHeaderTextandTitle")},computed:{getTitle:function(){return this.title}},data:function(){return{title:"Stockholm",drinks:[{name:"tea",items:[{name:"Earl Grey",price:"25"},{name:"Green tea",price:"25"},{name:"Oolong",price:"25"},{name:"White tea",price:"25"},{name:"Yellow tea",price:"25"}]},{name:"juice",items:[{name:"Orange",price:"35"},{name:"Apple, carrot and ginger",price:"45"}]}],brunch:[{name:"Sallads",items:[{name:"Beetroot and goat cheese",price:"85"},{name:"Salmon and quinoa",price:"85"}]},{name:"Toast",items:[{name:"Tomato, cheese and salsa",price:"55"},{name:"Avocado and chillitoast",price:"55"}]}],breakfast:[{name:"Bread/Toast",items:[{name:"Mushroom toast with chestnuts",price:"55"},{name:"Toasted organic croissant",price:"40"}]},{name:"Porrige",items:[{name:"Gluten free organic porridge",price:"35"},{name:"Blueberry porrige",price:"85"}]},{name:"Eggs",items:[{name:"Organic baked eggs with smoked salmon",price:"55"},{name:"Organic scrambled eggs",price:"45"}]},{name:"Fruit",items:[{name:"Banana with almondbutter and hempseeds",price:"35"},{name:"Organic Fruit Bowl",price:"40"}]}],desserts:[{name:"Cake",items:[{name:"Gluten free brownie",price:"35"},{name:"Carrot Cake",price:"35"}]},{name:"Muffins",items:[{name:"Organic baked eggs with smoked salmon",price:"55"},{name:"Organic scrambled eggs",price:"45"}]},{name:"Ice Cream",items:[{name:"Mushroom toast with chestnuts",price:"55"},{name:"Toasted organic croissant",price:"40"}]},{name:"Fruit",items:[{name:"Banana with almondbutter and hempseeds",price:"35"},{name:"Organic Fruit Bowl",price:"40"}]}]}}}},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("h1",{staticClass:"title centered"},[e._v(" "+e._s(e.getTitle))]),n("p",[e._v(" Welcome to our tea house in "+e._s(e.getTitle)+". Our goal is to only serve fairtrade and organic food. \n  And we are well on our way! The items on our menu is a healthy choice for everyone.\n  ")]),n("p",[e._v("Every day our staff bake bread that is ready for breakfast. Lorem ipsum dolor sit amet, \n  consectetur adipiscing elit. Vivamus eget imperdiet arcu.")]),n("Menu",{attrs:{drinks:e.drinks,brunch:e.brunch,breakfast:e.breakfast,currency:"SEK"}}),n("featured-menu-item",{attrs:{item:{name:"Chocolate Brownie",price:"35"},price:"15",month:"August",fileName:"brownie",currency:"SEK"}}),n("h3",[e._v(" Vegan food and/or allergies?")]),n("p",[e._v("Don't worry, we have plenty of options, just ask! ")]),n("h1",{attrs:{id:"find us",name:"find us"}},[e._v("Find us ")]),n("p",[e._v(" Address: "),n("a",{attrs:{href:"https://www.google.se/maps/place/Stockholm",target:"-blank"}},[e._v(e._s(e.title))]),e._v("  ... ")]),n("google-maps",{staticClass:"jsOnly",attrs:{infoText:"Tea2go in Stockholm",coordinates:{lat:59.346152,lng:18.067175}}}),n("h1",{attrs:{id:"contact",name:"contact"}},[e._v("Contact us ")]),n("p",[e._v("Contact information here")]),n("h2",{attrs:{id:"hours"}},[e._v("Opening Hours ")]),n("hours")],1)},staticRenderFns:[]}}});