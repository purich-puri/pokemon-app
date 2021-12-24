(function(e){function t(t){for(var o,a,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4763d56b"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/pokemon-app/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03fc":function(e,t,n){e.exports=n.p+"img/pokeball-img.9264d5ec.png"},"4f11":function(e,t,n){"use strict";n("d07c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var u=Object(o["x"])("Header"),i=Object(o["x"])("router-view"),s=Object(o["x"])("Footer");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(u),Object(o["h"])(i),Object(o["h"])(s)],64)}var c=n("03fc"),a=n.n(c),u=function(e){return Object(o["t"])("data-v-352d4a0a"),e=e(),Object(o["r"])(),e},i={id:"nav"},s=u((function(){return Object(o["f"])("img",{src:a.a,alt:"pokemon logo",class:"w-10 h-10"},null,-1)})),f={class:"flex gap-2"},p=Object(o["g"])("HOME"),l=Object(o["g"])(" | "),b=Object(o["g"])("ABOUT");function d(e,t){var n=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["e"])("div",i,[Object(o["h"])(n,{to:"/"},{default:Object(o["C"])((function(){return[s]})),_:1}),Object(o["f"])("div",f,[Object(o["h"])(n,{to:"/"},{default:Object(o["C"])((function(){return[p]})),_:1}),l,Object(o["h"])(n,{to:"/about"},{default:Object(o["C"])((function(){return[b]})),_:1})])])}n("5764");var m=n("6b0d"),j=n.n(m);const O={},h=j()(O,[["render",d],["__scopeId","data-v-352d4a0a"]]);var v=h;function k(e,t){return Object(o["q"])(),Object(o["e"])("div",null,"PURICHPURI © 2021")}n("4f11");const g={},P=j()(g,[["render",k],["__scopeId","data-v-22c862ae"]]);var y=P,x={name:"App",components:{Header:v,Footer:y},methods:{}};n("b68a");const w=j()(x,[["render",r]]);var I=w,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function q(e,t,n,r,c,a){var u=Object(o["x"])("PokemonList");return Object(o["q"])(),Object(o["d"])(u)}n("fb6a"),n("a15b"),n("ac1f"),n("466d"),n("b0c0");var C=function(e){return Object(o["t"])("data-v-24f9f3cb"),e=e(),Object(o["r"])(),e},M={class:"home"},H=C((function(){return Object(o["f"])("h3",{class:"flex justify-center text-4xl"},"Pokedex",-1)})),S={class:"list-of-pkmn"},L=["onClick"];function T(e,t,n,r,c,a){var u=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["e"])("div",M,[H,Object(o["f"])("div",S,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(c.pokemon,(function(e){return Object(o["q"])(),Object(o["e"])("div",{class:"pkmn-data pointer",key:e.url.match(/\d+/g).join("").slice(1),onClick:function(t){return a.checkPkmn(e.url)}},[Object(o["h"])(u,{to:{name:"Pokemon",params:{pkmnId:e.url.match(/\d+/g).join("").slice(1)}}},{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["z"])(e.name),1)]})),_:2},1032,["to"])],8,L)})),128))])])}var A=n("1da1"),E=(n("96cf"),{name:"PokemonList",props:{},components:{},data:function(){return{pokemon:[]}},methods:{checkPkmn:function(e){console.log(e),fetch(e).then((function(e){return e.json()})).then((function(){})).catch((function(e){return console.log(e)}))},getPokemon:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,r=o.results,console.log(r),e.pokemon=r;case 9:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getPokemon()}});n("f778");const R=j()(E,[["render",T],["__scopeId","data-v-24f9f3cb"]]);var D=R,U={name:"Home",components:{PokemonList:D},data:function(){return{}},methods:{}};n("8217");const z=j()(U,[["render",q],["__scopeId","data-v-5d36c52c"]]);var F=z;function J(e,t,n,r,c,a){var u=Object(o["x"])("PokemonData");return Object(o["q"])(),Object(o["d"])(u,{pkmnId:n.pkmnId},null,8,["pkmnId"])}var B={class:"flex justify-center"},N=["src","alt"],G=["src","alt"];function K(e,t,n,r,c,a){return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",null,"Name: "+Object(o["z"])(this.name),1),Object(o["f"])("div",B,[Object(o["f"])("img",{class:"w-48",src:this.frontImg,alt:this.name+" front image"},null,8,N),Object(o["f"])("img",{class:"w-48",src:this.backImg,alt:this.name+" back image"},null,8,G)])],64)}var Q={name:"PokemonData",props:{pkmnId:String},data:function(){return{name:"",frontImg:"",backImg:""}},methods:{getPokemon:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/".concat(this.pkmnId)).then((function(e){return e.json()})).then((function(t){e.name=t.name,e.frontImg=t.sprites.front_default,e.backImg=t.sprites.back_default}))}},beforeMount:function(){this.getPokemon()}};const V=j()(Q,[["render",K]]);var W=V,X={name:"Pokemon",props:["pkmnId"],components:{PokemonData:W}};const Y=j()(X,[["render",J]]);var Z=Y,$=[{path:"/",name:"Home",component:F},{path:"/pokemon/:pkmnId",name:"Pokemon",component:Z,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ee=Object(_["a"])({history:Object(_["b"])("/pokemon-app/"),routes:$}),te=ee;n("ba8c");Object(o["c"])(I).use(te).mount("#app")},5764:function(e,t,n){"use strict";n("a7c4")},"69da":function(e,t,n){},"6e69":function(e,t,n){},"702e":function(e,t,n){},8217:function(e,t,n){"use strict";n("6e69")},a7c4:function(e,t,n){},b68a:function(e,t,n){"use strict";n("69da")},ba8c:function(e,t,n){},d07c:function(e,t,n){},f778:function(e,t,n){"use strict";n("702e")}});
//# sourceMappingURL=app.fd46c652.js.map