webpackJsonp([10],{169:function(e,n,t){var a=t(18)(t(289),t(317),null,null,null);e.exports=a.exports},178:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:{type:String,required:!0,default:""}}}},179:function(e,n,t){n=e.exports=t(19)(!0),n.push([e.i,".card{background:#fff;border-radius:2px;display:inline-block;margin:1rem;position:relative;width:98%;height:30em;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);-o-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.card:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.notComplete{color:grey}@media (min-width:30em){.card{width:30em}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/categories/Category.vue"],names:[],mappings:"AACA,MACE,gBAAiB,AACjB,kBAAmB,AACnB,qBAAsB,AACtB,YAAa,AACb,kBAAmB,AACnB,UAAW,AACX,YAAY,AACZ,uEAA2E,AACnE,+DAAmE,AAC3E,sDAAwD,AACxD,iDAAmD,AACnD,6CAAgD,CACjD,AACD,YACE,2EAA+E,AACvE,kEAAuE,CAChF,AACD,aACE,UAAW,CACZ,AACD,wBACA,MACQ,UAAW,CAClB,CACA",file:"Category.vue",sourcesContent:["\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 1rem;\n  position: relative;\n  width: 98%;\n  height:30em;\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  -o-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.card:hover {\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.notComplete {\n  color:grey;\n}\n@media (min-width:30em) {\n.card {\n        width:30em;\n}\n}\n\n"],sourceRoot:""}])},180:function(e,n,t){function a(e){t(182)}var r=t(18)(t(178),t(181),a,null,null);e.exports=r.exports},181:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"text"},[t("h1",[e._v(" "+e._s(e.name)+" ")]),t("p",[e._v(" Information om "+e._s(e.name)+" här + bild ")]),t("div",{staticClass:"categoryIMG"}),t("p",{staticClass:"notComplete"},[e._v(" Detta är en prototypsida, som jag inte har hunnit att styla,\n      men som jag har tänkt mig ska innehålla bild och information om det valda teet.")])])},staticRenderFns:[]}},182:function(e,n,t){var a=t(179);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(20)("5ddf1b3e",a,!0)},289:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(180),r=t.n(a);n.default={components:{Category:r.a}}},317:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Category",{attrs:{name:"Green Tea"}})],1)},staticRenderFns:[]}}});