(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa7e1"],{"10f2":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"favories"},[i("div",{attrs:{id:"recipesList"}},e._l(e.recipes,(function(e){return i("div",{key:e.title},[i("RecipeBox",{attrs:{title:e.title,srcImg:e.srcImg,recipeId:e.recipeId}})],1)})),0)])},a=[],n=i("d4a0"),r={name:"Favories",components:{RecipeBox:n["a"]},data:function(){return{recipes:[]}},methods:{getFavList:function(){null!==localStorage.getItem("listFav")&&(this.recipes=JSON.parse(localStorage.getItem("listFav")))}},beforeMount:function(){this.getFavList()}},c=r,o=i("2877"),l=Object(o["a"])(c,s,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0aa7e1.5eaedf77.js.map