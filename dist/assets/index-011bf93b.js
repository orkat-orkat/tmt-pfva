import{b as d,o as h,e as y,f as r,g as a,j as l,k as c,F as P,d as T,l as R,m as w}from"./@vue-4033c0a7.js";import{c as A,a as O}from"./vue-router-01b7dfe8.js";import{l as V,i as I,a as b,F as k}from"./@fortawesome-f061f474.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))_(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&_(u)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const v=(t,i)=>{const e=t.__vccOpts||t;for(const[_,n]of i)e[_]=n;return e},$={},D={class:"footer-list"},F=r("li",null,"Portfolio",-1),C={class:"footer"},j=r("small",{class:"copyright"},"Copyright © 2022-2023 Tommy. All Rights Reserved.",-1);function N(t,i){const e=d("RouterLink"),_=d("font-awesome-icon");return h(),y(P,null,[r("ul",D,[F,r("li",null,[a(e,{to:"/Top"},{default:l(()=>[c("Top Page")]),_:1})]),r("li",null,[a(e,{to:"/ProjectList"},{default:l(()=>[c("Project List")]),_:1})]),r("li",null,[a(e,{to:"/Test2"},{default:l(()=>[c("Test2")]),_:1})]),r("li",null,[a(e,{to:"/Future"},{default:l(()=>[c("Future")]),_:1})])]),r("h2",C,[a(_,{icon:"fa-solid fa-coffee",class:"green"}),c(),j,c(),a(_,{icon:"fa-solid fa-leaf",class:"green"})])],64)}const S=v($,[["render",N]]),x={},B={class:"nav"},U={class:"title"},q={class:"header-list"},H={class:"btn-contact"};function M(t,i){const e=d("RouterLink");return h(),y("div",B,[r("h1",U,[a(e,{to:"/Top"},{default:l(()=>[c("Tommy's Portfolio")]),_:1})]),r("nav",null,[r("ul",q,[r("li",null,[a(e,{to:"/About"},{default:l(()=>[c("About")]),_:1})]),r("li",null,[a(e,{to:"/CV"},{default:l(()=>[c("CV ")]),_:1})]),r("li",null,[a(e,{to:"/English"},{default:l(()=>[c("English")]),_:1})]),r("li",H,[a(e,{to:"/Contact"},{default:l(()=>[c("Contact")]),_:1})])])])])}const W=v(x,[["render",M]]),X={class:"wrap"},z={class:"main"},K=T({__name:"App",setup(t){return(i,e)=>{const _=d("RouterView");return h(),y("div",X,[a(W),r("main",z,[a(_)]),a(S)])}}});const G="modulepreload",J=function(t){return"/"+t},E={},s=function(i,e,_){if(!e||e.length===0)return i();const n=document.getElementsByTagName("link");return Promise.all(e.map(o=>{if(o=J(o),o in E)return;E[o]=!0;const u=o.endsWith(".css"),L=u?'[rel="stylesheet"]':"";if(!!_)for(let m=n.length-1;m>=0;m--){const f=n[m];if(f.href===o&&(!u||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${L}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":G,u||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),u)return new Promise((m,f)=>{p.addEventListener("load",m),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>i())},Q={},Y={class:"contents"},Z=R('<h4 class="subtitle1">Not Found page </h4><div class="self-wrap"><div class="self-items">1</div><div class="self-items">2</div><div class="self-items">3</div></div><p>アクセスしたページは存在しません。</p>',3);function tt(t,i){const e=d("RouterLink");return h(),y("div",Y,[Z,r("div",null,[a(e,{to:{name:"Top"}},{default:l(()=>[c("Top")]),_:1}),c("に戻る")])])}const g=v(Q,[["render",tt]]),et=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),ot=[{path:"/Top",name:"Top",component:async()=>await s(()=>import("./Top-e5eaa7c1.js"),["assets/Top-e5eaa7c1.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Top-12ac5be7.css"])},{path:"/About",name:"About",component:async()=>await s(()=>import("./About-ad5fa4f0.js"),["assets/About-ad5fa4f0.js","assets/Feature-8d7a9879.js","assets/nekoshadow1-b88edd1a.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Feature-f3924a3a.css"])},{path:"/CV",name:"CV",component:async()=>await s(()=>import("./CV-283cb0f3.js"),["assets/CV-283cb0f3.js","assets/Skills-135b4aae.js","assets/MicrosoftAzureFunadmentals-078645bb.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Contact",name:"Contact",component:async()=>await s(()=>import("./Contact-e546a1a3.js"),["assets/Contact-e546a1a3.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Skills",name:"Skills",component:async()=>await s(()=>import("./Skills-135b4aae.js"),["assets/Skills-135b4aae.js","assets/MicrosoftAzureFunadmentals-078645bb.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/ProjectList",name:"ProjectList",component:async()=>await s(()=>import("./ProjectList-a311c592.js"),["assets/ProjectList-a311c592.js","assets/Projects-c49627f5.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Projects-296fc1de.css"])},{path:"/Projects",name:"Projects",component:async()=>await s(()=>import("./Projects-c49627f5.js"),["assets/Projects-c49627f5.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Projects-296fc1de.css"])},{path:"/Output",name:"Output",component:async()=>await s(()=>import("./Output-6eba5068.js"),["assets/Output-6eba5068.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Feature",name:"Feature",component:async()=>await s(()=>import("./Feature-8d7a9879.js"),["assets/Feature-8d7a9879.js","assets/nekoshadow1-b88edd1a.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Feature-f3924a3a.css"])},{path:"/ProgrammingList",name:"ProgrammingList",component:async()=>await s(()=>import("./ProgrammingList-fea7f9a0.js"),["assets/ProgrammingList-fea7f9a0.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/English",name:"English",component:async()=>await s(()=>import("./English-8899f86c.js"),["assets/English-8899f86c.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Booklist",name:"Booklist",component:async()=>await s(()=>import("./Booklist-b00d8bd7.js"),["assets/Booklist-b00d8bd7.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/UXStudy",name:"UXStudy",component:async()=>await s(()=>import("./UXStudy-63d12523.js"),["assets/UXStudy-63d12523.js","assets/@vue-4033c0a7.js"])},{path:"/Future",name:"Future",component:async()=>await s(()=>import("./Future-6bd4028c.js"),["assets/Future-6bd4028c.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Test",name:"Test",component:async()=>await s(()=>import("./Test-9af8b581.js"),["assets/Test-9af8b581.js","assets/MicrosoftAzureFunadmentals-078645bb.js","assets/nekoshadow1-b88edd1a.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js"])},{path:"/Test2",name:"Test2",component:async()=>await s(()=>import("./Test2-759d3034.js"),["assets/Test2-759d3034.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Test2-15d29ec0.css"])},{path:"/",name:"none",component:async()=>await s(()=>import("./Top-e5eaa7c1.js"),["assets/Top-e5eaa7c1.js","assets/@vue-4033c0a7.js","assets/vue-router-01b7dfe8.js","assets/@fortawesome-f061f474.js","assets/Top-12ac5be7.css"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:async()=>await s(()=>Promise.resolve().then(()=>et),void 0)},{path:"/:catchAll(.*)",component:g}],nt=A({history:O("/"),routes:ot});V.add(I,b);w(K).component("FontAwesomeIcon",k).use(nt).mount("#app");export{v as _};
