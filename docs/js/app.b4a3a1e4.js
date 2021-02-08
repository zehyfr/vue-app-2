(function(e){function t(t){for(var n,c,a=t[0],u=t[1],s=t[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"51f41449","chunk-2d0aa7e1":"afb7682d"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(e);var s=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-app-2/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/fav"}},[e._v("Favories")]),e._v(" | "),r("router-link",{attrs:{to:"/cart"}},[e._v("Cart")])],1),r("router-view"),r("div",{attrs:{id:"main"}})],1)},i=[],c=(r("034f"),r("2877")),a={},u=Object(c["a"])(a,o,i,!1,null,null,null),s=u.exports,l=r("9483");Object(l["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Home"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:e.input},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.input=t.target.value)}}}),r("div",{attrs:{id:"recipesList"}},e._l(e.recipes,(function(e){return r("div",{key:e.title},[r("RecipeBox",{attrs:{title:e.title,srcImg:e.image,recipeId:e.id}})],1)})),0)])},d=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"recipeBox"}},[n("img",{attrs:{id:"recipePicture",src:e.srcImg}}),n("span",{attrs:{id:"recipeTitle"}},[e._v(e._s(e.title))]),n("img",{staticClass:"rButton",attrs:{src:r("b6fc")}}),n("img",{staticClass:"rButton",attrs:{src:r("e359")}})])},h=[],g={name:"RecipeBox",props:["title","recipeId","srcImg"]},m=g,b=(r("ffd6"),Object(c["a"])(m,v,h,!1,null,"cd9bf74a",null)),A=b.exports,j={name:"Home",components:{RecipeBox:A},data:function(){return{recipes:[{title:"Tartiflette"}],url:"https://api.spoonacular.com/recipes/complexSearch?apiKey=68e2fea5053d408383160530db1a36cb&query=",input:""}},methods:{search:function(e){var t=this;fetch(this.url+this.input).then((function(e){return e.json()})).then((function(e){return t.recipes=e["results"]})).catch((function(e){return alert("Error : "+e)}))}}},y=j,E=Object(c["a"])(y,f,d,!1,null,null,null),O=E.exports;n["a"].use(p["a"]);var w=[{path:"/",name:"Home",component:O},{path:"/cart",name:"Cart",component:function(){return r.e("about").then(r.bind(null,"b789"))}},{path:"/fav",name:"Favories",component:function(){return r.e("chunk-2d0aa7e1").then(r.bind(null,"10f2"))}}],k=new p["a"]({routes:w}),C=k;n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,r){},9325:function(e,t,r){},b6fc:function(e,t){e.exports="data:image/png;base64,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"},e359:function(e,t,r){e.exports=r.p+"img/plus.c68bec15.png"},ffd6:function(e,t,r){"use strict";r("9325")}});
//# sourceMappingURL=app.b4a3a1e4.js.map