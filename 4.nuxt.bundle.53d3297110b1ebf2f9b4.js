webpackJsonp([4],{166:function(e,t,A){function n(e){A(352)}var a=A(20)(A(304),A(336),n,null,null);e.exports=a.exports},193:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7AARRHVja3kAAQAEAAAAWgAA/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAGgwAACFIAABJlAAAlnf/bAIQACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0MgEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8IAEQgA0gDSAwEiAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAABAgb/2gAIAQEAAAAA7IyFjSACaIQJVRpCCrmyagFssszohNRKFWwECKIUsqI0BBBYazVyaRZYsgpAKWEqLFWM0WFEaSVFuYtKQ1AIFlgCVaQzVQXITUVRBbIqRBdSy3NZNCIlRbS5WIaiCUFoRLFIrLUGs6M6kIosjSKhpEE3CzJQFWGbLNCRQLYTWYtsGSqJRFuFVZItWTeYNDKpbEKJqQtCCKQ1IsLbC5ssS2RaiyWgiNM2kKhKKlk1ELC3NLEs1E0QIpRLlVzTUSy5m4tyl1msiv/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAxAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAJBAAAgIDAAIDAAMBAQAAAAAAAAERMRAhQSBRAmFxEjKBMEL/2gAIAQEAAT8Act4ZJI2aNDeebE0SoFGJgnQqJ1ieDoRqjhLxqSS/3wrwVId6GRhwakZwnUF1iBs2zeJzJb0QQPZGs/eIksjDwviNsnWsUNzhiUkeCIkgYlhop45lqSBSMiBojGxEEto6RhaJztoSKJ2OBWdLOCIeJ9limdj+mbHmSSdY1jUST9EyIuqGUsLaKPkJ6Kwm5Jt4lFIdkFEGl7xBzxn0TJY/iUNyi2LQniJQ8bNwWiWXYno0v04TC+/GxoSkiCWbZEkMpZ+iBpYeOn0xJwQ48F6INLp2RqWUWQTB/pZ0fxEjcuD9YiSdC9l4XyJOQIjptiYmujG9kyTskUnRPXkqwr2JboSKGIj0SQPCWJxZBVY0ToTJYh/g9Uzfsa0J6xEmjhbIkb80M28bOjg7ZskdkPG8JwWiikN/8EhaJEx4jZCJ9DvH8jpA9Yk6b8Jw8zBeI2Jj/D7ZeOY/1EQpKGcEpZTP5azaJxBEEaxZZBBJeeeC28rS8FElYZJobOCcLDxQrHeOY16OEF4fg8PbH4cIFMaHJKO7J8Iw3o3I54NeHC8UyymbgjFsVE7xErxTggZwke/J7I0fgliNE+xLKw9eKq/NEezvgqNDOjeIIgQ9kY4eyCnh3hqHmBrooZONQN4ooSlH2QIaFJbIIhMg+sdobJfcUxM4K8pwdwlJVstFY5nrNwMn7YoQ5bxHXisJDObOlk73hj0VYt4pCbJJPeJIOjWpkkTPslYiBEH4hDWzg6Poi1I9Gzasme4Q6zoZebJh4mJOiZNMspEaFo6J7PvEyt4spjcos/CF7NM0kQoEsQPG+4S1s1I9CWrJJ9DqSt4axRGpHYtSKjZwdYfDqGPmH/U6hWf+8Kh2sKh0dHzL/qscYqWP/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwBE/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwBE/9k="},229:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=A(272),a=A.n(n),i=A(274),o=A.n(i),r=A(273),s=A.n(r);t.default={components:{headerImage:a.a,Navigation:o.a,Logo:s.a}}},230:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{type:String,required:!1,default:null},text:{type:String,required:!1,default:null}},computed:{backgroundImageUrl:function(){return this.$store.state.headerImageURL},getTitle:function(){return null!==this.title?this.title:this.$store.state.headerTitle},getText:function(){return null!==this.text?this.text:this.$store.state.headerText}}}},231:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=A(269);A.n(n);t.default={data:function(){return{menuButton:null,mainNavigation:null,checked:!1,isOpen:!1}},methods:{toggleMenu:function(){console.log(this.isOpen),console.log("clicked the menubtn")},hideMenu:function(){console.log("clicked OUTSIDE OF MENU or on menuButton !"),this.checked=!1}},directives:{onClickaway:n.directive}}},236:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,'.logo a[data-v-049c031e]{color:#000}.logo[data-v-049c031e]{position:relative;margin:0 auto;height:100%;margin-left:-35px}.logo[data-v-049c031e]:before{content:"";display:block;padding-top:3em}.logoContent[data-v-049c031e]{position:absolute;top:0;right:0;left:0;bottom:0}.imgWrapper[data-v-049c031e]{height:100%}.logoContent img[data-v-049c031e]{height:90%;display:block;margin:0 auto}@media(min-width:30em){.logo[data-v-049c031e]:before{padding-top:5em}}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Logo.vue"],names:[],mappings:"AACA,yBACC,UAAW,CACX,AACD,uBACC,kBAAkB,AAClB,cAAc,AACd,YAAY,AACZ,iBAAkB,CAClB,AACD,8BACC,WAAW,AACX,cAAc,AACd,eAAgB,CAChB,AACD,8BACC,kBAAkB,AAClB,MAAM,AACN,QAAQ,AACR,OAAO,AACP,QAAS,CACT,AACD,6BACC,WAAY,CACZ,AACD,kCACC,WAAW,AACX,cAAc,AACd,aAAc,CACd,AACD,uBACA,8BACC,eAAgB,CAChB,CACA",file:"Logo.vue",sourcesContent:["\n.logo a[data-v-049c031e] {  \r\n\tcolor:#000;\n}\n.logo[data-v-049c031e] {\r\n\tposition:relative;\r\n\tmargin:0 auto;\r\n\theight:100%;\r\n\tmargin-left:-35px;\n}\n.logo[data-v-049c031e]:before {\r\n\tcontent:'';\r\n\tdisplay:block;\r\n\tpadding-top:3em;\n}\n.logoContent[data-v-049c031e] {\t\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tright:0;\r\n\tleft:0;\r\n\tbottom:0;\n}\n.imgWrapper[data-v-049c031e] {\r\n\theight:100%;\n}\n.logoContent img[data-v-049c031e] {\r\n\theight:90%;\r\n\tdisplay:block;\r\n\tmargin:0 auto;\n}\n@media(min-width:30em) {\n.logo[data-v-049c031e]:before {\r\n\tpadding-top:5em;\n}\n}\r\n"],sourceRoot:""}])},237:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,".navigation[data-v-15fcebda]{position:absolute;top:50px;right:0;left:-120%;bottom:0;height:auto;width:33em;height:200px;width:14em;list-style-type:none;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);background:#fff;z-index:999}.navigation a[data-v-15fcebda]{color:#5a5651}.navigation a[data-v-15fcebda]:hover{background-color:#f1ede9}.navigation .nuxt-link-active[data-v-15fcebda],.navigation .nuxt-link-exact-active[data-v-15fcebda]{color:#fff;background-color:#7d8066;font-weight:700}.navigation .nuxt-link-active[data-v-15fcebda]:hover{background-color:#7d8066}.navigation li[data-v-15fcebda]{height:50px}.navigation li a[data-v-15fcebda]{height:100%;line-height:50px;display:block;padding-left:1.5em}.navTrigger[data-v-15fcebda]{position:absolute;clip:rect(0,0,0,0)}#menuButton[data-v-15fcebda]{color:#5a5651;width:55px;height:50px;line-height:50px;position:absolute;display:block;float:left;padding-left:5px;text-align:center;text-transform:uppercase;font-size:2.1em;cursor:pointer;-webkit-transform:scaleX(1.4);-ms-transform:scaleX(1.4);transform:scaleX(1.4);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);box-shadow:0 5px 10px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);background:#fff;z-index:999}.navBackground[data-v-15fcebda],.navigation[data-v-15fcebda],.navTrigger+label[data-v-15fcebda]{-webkit-transition:left .2s;-o-transition:left .2s;transition:left .2s}.navTrigger:checked~.navigation[data-v-15fcebda]{display:block;left:0}@media (min-width:55em){#menuButton[data-v-15fcebda],.navBackground[data-v-15fcebda],.navTrigger[data-v-15fcebda]{display:none}.navigation[data-v-15fcebda]{top:0;left:0;-webkit-box-sizing:initial;box-sizing:initial;padding:0;width:33em;height:50px}.nav li a[data-v-15fcebda]{padding:0}.nav .home[data-v-15fcebda]{width:5em}.nav .teaHouses[data-v-15fcebda],.teaVarieties[data-v-15fcebda]{width:9em}.nav .openingHours[data-v-15fcebda]{width:10em}.nav ul[data-v-15fcebda]{text-align:center}.nav ul li[data-v-15fcebda]{margin:0;float:left}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Navigation.vue"],names:[],mappings:"AACA,6BAA6B,kBAAkB,SAAS,QAAQ,WAAW,SAAS,YAAY,WAAW,aAAa,WAAW,qBAAqB,wEAA0E,gEAAkE,gBAAgB,WAAW,CAC9T,AACD,+BAA+B,aAAa,CAC3C,AACD,qCAAqC,wBAAwB,CAC5D,AACD,oGAAoG,WAAW,yBAAyB,eAAe,CACtJ,AACD,qDAAqD,wBAAwB,CAC5E,AACD,gCAAgC,WAAW,CAC1C,AACD,kCAAkC,YAAY,iBAAiB,cAAc,kBAAkB,CAC9F,AACD,6BAA6B,kBAAkB,kBAAqB,CACnE,AACD,6BAA6B,cAAc,WAAW,YAAY,iBAAiB,kBAAkB,cAAc,WAAW,iBAAiB,kBAAkB,yBAAyB,gBAAgB,eAAe,8BAAgC,0BAA4B,sBAAwB,wEAA0E,gEAAkE,gBAAgB,WAAW,CACnd,AACD,gGAAgG,4BAA6B,uBAAwB,mBAAoB,CACxK,AACD,iDAAmD,cAAc,MAAM,CACtE,AACD,wBACA,0FAA0F,YAAY,CACrG,AACD,6BAA6B,MAAM,OAAO,2BAA2B,mBAAmB,UAAU,WAAW,WAAW,CACvH,AACD,2BAA2B,SAAS,CACnC,AACD,4BAA4B,SAAS,CACpC,AACD,gEAAgE,SAAS,CACxE,AACD,oCAAoC,UAAU,CAC7C,AACD,yBAAyB,iBAAiB,CACzC,AACD,4BAA4B,SAAS,UAAU,CAC9C,CACA",file:"Navigation.vue",sourcesContent:["\n.navigation[data-v-15fcebda]{position:absolute;top:50px;right:0;left:-120%;bottom:0;height:auto;width:33em;height:200px;width:14em;list-style-type:none;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.19),0 2px 6px rgba(0,0,0,0.23);box-shadow:0 5px 10px rgba(0,0,0,0.19),0 2px 6px rgba(0,0,0,0.23);background:#FFF;z-index:999\n}\n.navigation a[data-v-15fcebda]{color:#5A5651\n}\n.navigation a[data-v-15fcebda]:hover{background-color:#F1EDE9\n}\n.navigation .nuxt-link-active[data-v-15fcebda],.navigation .nuxt-link-exact-active[data-v-15fcebda]{color:#FFF;background-color:#7d8066;font-weight:700\n}\n.navigation .nuxt-link-active[data-v-15fcebda]:hover{background-color:#7d8066\n}\n.navigation li[data-v-15fcebda]{height:50px\n}\n.navigation li a[data-v-15fcebda]{height:100%;line-height:50px;display:block;padding-left:1.5em\n}\n.navTrigger[data-v-15fcebda]{position:absolute;clip:rect(0, 0, 0, 0)\n}\n#menuButton[data-v-15fcebda]{color:#5A5651;width:55px;height:50px;line-height:50px;position:absolute;display:block;float:left;padding-left:5px;text-align:center;text-transform:uppercase;font-size:2.1em;cursor:pointer;-webkit-transform:scale(1.4, 1);-ms-transform:scale(1.4, 1);transform:scale(1.4, 1);-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.19),0 2px 6px rgba(0,0,0,0.23);box-shadow:0 5px 10px rgba(0,0,0,0.19),0 2px 6px rgba(0,0,0,0.23);background:#FFF;z-index:999\n}\n.navTrigger+label[data-v-15fcebda],.navigation[data-v-15fcebda],.navBackground[data-v-15fcebda]{-webkit-transition:left 0.2s;-o-transition:left 0.2s;transition:left 0.2s\n}\n.navTrigger:checked ~ .navigation[data-v-15fcebda]{display:block;left:0\n}\n@media (min-width: 55em){\n#menuButton[data-v-15fcebda],.navTrigger[data-v-15fcebda],.navBackground[data-v-15fcebda]{display:none\n}\n.navigation[data-v-15fcebda]{top:0;left:0;-webkit-box-sizing:initial;box-sizing:initial;padding:0;width:33em;height:50px\n}\n.nav li a[data-v-15fcebda]{padding:0\n}\n.nav .home[data-v-15fcebda]{width:5em\n}\n.nav .teaHouses[data-v-15fcebda],.teaVarieties[data-v-15fcebda]{width:9em\n}\n.nav .openingHours[data-v-15fcebda]{width:10em\n}\n.nav ul[data-v-15fcebda]{text-align:center\n}\n.nav ul li[data-v-15fcebda]{margin:0;float:left\n}\n}\n"],sourceRoot:""}])},241:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,'.headerImageWrapper{position:relative;z-index:1;width:100%;height:auto;max-height:35em;overflow:hidden;-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);-o-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.headerImage img{width:110%;float:right;clear:both}.box{position:relative;background-size:cover;background-repeat:no-repeat;height:100%}.box:before{content:"";display:block;padding-top:50%}.content{left:0;text-align:center;overflow:hidden}.content,.headlineText{position:absolute;top:0;bottom:0;right:0}.headlineText{left:50%;margin-left:-24em;z-index:5;padding-top:100px;font-weight:400;font-size:.3em;line-height:1.4;color:#656263}.headlineText h3{font-size:4em}.headlineText,.headlineText p{text-align:left}.headlineText p{font-size:3em;width:15em;margin:0 auto}@media(min-width:18.6em){.headlineText{font-size:.4em;text-align:center}.headlineText p{font-size:2.5em;text-align:justify;width:auto}}@media(min-width:40em){.headlineText{width:48em;margin-left:-24em;font-size:.5em;line-height:1.2;padding-top:110px}}@media(min-width:55em){.headlineText{font-size:.8em;line-height:1.4;padding-top:150px}.headlineText p{font-size:2em;margin-top:10px}}',"",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/HeaderImage.vue"],names:[],mappings:"AACA,oBACI,kBAAkB,AAClB,UAAU,AACV,WAAW,AACX,YAAY,AACZ,gBAAgB,AAChB,gBAAiB,AACjB,sDAAuD,AACvD,iDAAkD,AAClD,6CAAgD,CACnD,AACD,iBACE,WAAW,AACX,YAAY,AACZ,UAAW,CACZ,AACD,KACI,kBAAmB,AACnB,sBAAuB,AACvB,4BAA6B,AAC7B,WAAY,CACf,AACD,YACI,WAAW,AACX,cAAc,AACd,eAAgB,CACnB,AACD,SAGI,OAAQ,AAGR,kBAAmB,AACnB,eAAgB,CACnB,AACD,uBARI,kBAAoB,AACpB,MAAO,AAEP,SAAU,AACV,OAAS,CAiBZ,AAbD,cAGI,SAAS,AAGT,kBAAkB,AAClB,UAAU,AACV,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,aAAe,CAClB,AACD,iBACI,aAAc,CACjB,AACD,8BACI,eAAiB,CACpB,AACD,gBACI,cAAc,AACd,WAAW,AACX,aAAc,CACjB,AACD,yBACA,cACI,eAAgB,AAChB,iBAAkB,CACrB,AACD,gBACI,gBAAgB,AAChB,mBAAmB,AACnB,UAAW,CACd,CACA,AACD,uBACA,cACI,WAAW,AACX,kBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,CACA,AACD,uBACA,cACI,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,gBACI,cAAc,AACd,eAAgB,CACnB,CACA",file:"HeaderImage.vue",sourcesContent:["\n.headerImageWrapper {\n    position:relative;\n    z-index:1;\n    width:100%;\n    height:auto;\n    max-height:35em;\n    overflow: hidden;\n    -webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);\n    -o-transition:all 0.3s cubic-bezier(.25,.8,.25,1);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.headerImage img {\n  width:110%;\n  float:right;\n  clear:both;\n}\n.box { /* Tip taken from a tutorial/article http://www.mademyday.de/css-height-equals-width-with-pure-css.html */ \n    position: relative;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height:100%;\n}\n.box:before {\n    content:'';\n    display:block;\n    padding-top:50%;\n}\n.content{   \n    position:  absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    text-align: center;\n    overflow: hidden\n}\n.headlineText {\n    position:absolute;\n    top:0;\n    left:50%;\n    right:0;\n    bottom:0;\n    margin-left:-24em;\n    z-index:5;\n    padding-top: 100px;\n    font-weight: 400;\n    font-size: .3em;\n    line-height: 1.4;\n    color: #656263;\n}\n.headlineText h3 {\n    font-size:4em;\n}\n.headlineText, .headlineText p {\n    text-align: left;\n}\n.headlineText p {\n    font-size:3em;\n    width:15em; \n    margin:0 auto;\n}\n@media(min-width:18.6em) {\n.headlineText {\n    font-size: .4em;\n    text-align:center;\n}\n.headlineText p {\n    font-size:2.5em;\n    text-align:justify;\n    width:auto;\n}\n}\n@media(min-width:40em) {\n.headlineText {\n    width:48em;\n    margin-left:-24em;\n    font-size: .5em;\n    line-height: 1.2;\n    padding-top: 110px;\n}\n}\n@media(min-width:55em) {\n.headlineText {\n    font-size: .8em;\n    line-height: 1.4;\n    padding-top: 150px;\n}\n.headlineText p {\n    font-size:2em;\n    margin-top:10px;\n}\n}\n@media(min-width:62em) {\n}\n@media(min-width:80em) {\n}\n\n"],sourceRoot:""}])},242:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,".footerBase[data-v-447e42e1]{width:100%;padding:10px 20px;background-color:#f1ede9;background-image:url("+A(193)+");height:200px}.footerBase p[data-v-447e42e1]{display:block}.copyright[data-v-447e42e1]{font-family:sans-serif}@media(min-width:33em){.textWrapper[data-v-447e42e1]{margin:0 auto;position:relative;max-width:33em}.footerBase[data-v-447e42e1]{text-align:left}.footerBase p[data-v-447e42e1]{display:inline}.contact[data-v-447e42e1]{position:absolute;top:0;right:0}.copyright[data-v-447e42e1]{position:absolute;top:0;left:0}}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Footer.vue"],names:[],mappings:"AACA,6BACE,WAAW,AACX,kBAAmB,AACnB,yBAA0B,AAC1B,+CAAyE,AACzE,YAAa,CACd,AACD,+BACE,aAAc,CACf,AACD,4BACE,sBAAwB,CACzB,AACD,uBACA,8BACI,cAAc,AACd,kBAAkB,AAClB,cAAe,CAClB,AACD,6BACI,eAAiB,CACpB,AACD,+BACE,cAAe,CAChB,AACD,0BACI,kBAAkB,AAClB,MAAM,AACN,OAAQ,CACX,AACD,4BACG,kBAAkB,AAClB,MAAM,AACN,MAAO,CACT,CACA",file:"Footer.vue",sourcesContent:["\n.footerBase[data-v-447e42e1] {\n  width:100%;\n  padding: 10px 20px;\n  background-color: #F1EDE9;\n  background-image: url('../assets/images/grunge-background-seamless.jpg');\n  height:200px;\n}\n.footerBase p[data-v-447e42e1] {\n  display:block;\n}\n.copyright[data-v-447e42e1] {\n  font-family: sans-serif;\n}\n@media(min-width:33em){\n.textWrapper[data-v-447e42e1] {\n    margin:0 auto;\n    position:relative;\n    max-width:33em;\n}\n.footerBase[data-v-447e42e1] {\n    text-align: left;\n}\n.footerBase p[data-v-447e42e1] {\n  display:inline;\n}\n.contact[data-v-447e42e1] {\n    position:absolute;\n    top:0;\n    right:0;\n}\n.copyright[data-v-447e42e1] {\n   position:absolute;\n   top:0;\n   left:0;\n}\n}\n"],sourceRoot:""}])},243:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,".logoWrapper{position:relative;z-index:777;padding:5px;padding-top:7px;-webkit-box-shadow:0 5px 5px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23);box-shadow:0 5px 5px rgba(0,0,0,.19),0 2px 6px rgba(0,0,0,.23)}","",{version:3,sources:["D:/www/2017/RWD-A3-omeximination/components/Header.vue"],names:[],mappings:"AACA,aACE,kBAAkB,AAClB,YAAa,AACb,YAAY,AACZ,gBAAgB,AAChB,uEAAiF,AACzE,8DAAyE,CAClF",file:"Header.vue",sourcesContent:["\n.logoWrapper {\r\n  position:relative;\r\n  z-index: 777;\r\n  padding:5px;\r\n  padding-top:7px;\r\n  -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\r\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);\n}\r\n"],sourceRoot:""}])},250:function(e,t,A){e.exports=A.p+"img/logo.078d456.svg"},269:function(e,t,A){"use strict";function n(e,t){a(e);var A=t.value;if("function"==typeof A){var n=!1;setTimeout(function(){n=!0},0),e[o]=function(t){if(n&&!e.contains(t.target))return A(t)},document.documentElement.addEventListener("click",e[o],!1)}}function a(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var i=A(1);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.1.0 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler",r={bind:n,update:function(e,t){t.value!==t.oldValue&&n(e,t)},unbind:a},s={directives:{onClickaway:r}};t.version="2.1.0",t.directive=r,t.mixin=s},270:function(e,t,A){function n(e){A(293)}var a=A(20)(null,A(283),n,"data-v-447e42e1",null);e.exports=a.exports},271:function(e,t,A){function n(e){A(294)}var a=A(20)(A(229),A(284),n,null,null);e.exports=a.exports},272:function(e,t,A){function n(e){A(292)}var a=A(20)(A(230),A(282),n,null,null);e.exports=a.exports},273:function(e,t,A){function n(e){A(287)}var a=A(20)(null,A(278),n,"data-v-049c031e",null);e.exports=a.exports},274:function(e,t,A){function n(e){A(288)}var a=A(20)(A(231),A(279),n,"data-v-15fcebda",null);e.exports=a.exports},278:function(e,t,A){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("div",{staticClass:"logoContent"},[n("div",{staticClass:"imgWrapper"},[n("img",{attrs:{src:A(250),alt:"Logotyp"}})])])])}]}},279:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"nav",attrs:{"aria-label":"Main Menu"}},[A("nav",[A("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideMenu,expression:"hideMenu"}]},[A("label",{attrs:{id:"menuButton",for:"navTrigger"}},[e._v("≡")]),A("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"navTrigger",attrs:{type:"checkbox",id:"navTrigger"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{__c:function(t){var A=e.checked,n=t.target,a=!!n.checked;if(Array.isArray(A)){var i=e._i(A,null);a?i<0&&(e.checked=A.concat(null)):i>-1&&(e.checked=A.slice(0,i).concat(A.slice(i+1)))}else e.checked=a}}}),A("ul",{staticClass:"navigation"},[A("li",{staticClass:"home",on:{click:e.hideMenu}},[A("nuxt-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),A("li",{staticClass:"teaVarieties",on:{click:e.hideMenu}},[A("nuxt-link",{attrs:{to:"/tea"}},[e._v("Tea Varieties")])],1),A("li",{staticClass:"teaHouses",on:{click:e.hideMenu}},[A("nuxt-link",{attrs:{to:"/teahouses"}},[e._v("Tea Houses")])],1),A("li",{staticClass:"openingHours",on:{click:e.hideMenu}},[A("nuxt-link",{attrs:{to:"/hours"}},[e._v("Opening hours")])],1)])])])])},staticRenderFns:[]}},282:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"headerImageWrapper"},[A("div",{staticClass:"box"},[A("div",{staticClass:"content headerImage"},[A("img",{attrs:{src:e.backgroundImageUrl,alt:"background Image"}}),A("div",{staticClass:"headlineText"},[A("h3",[e._v("\n          "+e._s(e.getTitle)+"\n        ")]),A("p",[e._v(e._s(e.getText)+" ")])])])])])},staticRenderFns:[]}},283:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"footer"},[A("footer",[A("div",{staticClass:"footerBase"},[A("div",{staticClass:"textWrapper"},[A("p",{staticClass:"copyright"},[e._v(" © 2017  Tea2Go")]),A("p",{staticClass:"contact"},[e._v("Contact: info@tea2go.com ")])])])])])}]}},284:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"header"},[A("header",[A("navigation"),A("header-image"),A("div",{staticClass:"logoWrapper lighten"},[A("logo")],1)],1)])},staticRenderFns:[]}},287:function(e,t,A){var n=A(236);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("f7785358",n,!0)},288:function(e,t,A){var n=A(237);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("d77d3e26",n,!0)},292:function(e,t,A){var n=A(241);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("9d41d93c",n,!0)},293:function(e,t,A){var n=A(242);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("7cda151e",n,!0)},294:function(e,t,A){var n=A(243);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("805a7de6",n,!0)},304:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=A(271),a=A.n(n),i=A(270),o=A.n(i),r=A(74),s=A.n(r);t.default={components:{Header:a.a,Footerpart:o.a},mounted:function(){this.$store.commit("changeHeaderImageURL",s.a)}}},319:function(e,t,A){t=e.exports=A(13)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"default.vue",sourceRoot:""}])},336:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("section",{staticClass:"container"},[A("Header"),A("div",{staticClass:"main"},[A("main",[A("nuxt")],1)]),A("Footerpart")],1)},staticRenderFns:[]}},352:function(e,t,A){var n=A(319);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);A(14)("0845b535",n,!0)}});