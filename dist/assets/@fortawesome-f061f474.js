import{d as M2,c as y,w as Ba,h as Q3}from"./@vue-4033c0a7.js";function b3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function m(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?b3(Object(e),!0).forEach(function(r){x(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):b3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function k1(c){return k1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k1(c)}function Fa(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function N3(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Da(c,a,e){return a&&N3(c.prototype,a),e&&N3(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function C2(c,a){return qa(c)||Ua(c,a)||J3(c,a)||Oa()}function o1(c){return Ra(c)||Ea(c)||J3(c)||Ga()}function Ra(c){if(Array.isArray(c))return i2(c)}function qa(c){if(Array.isArray(c))return c}function Ea(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Ua(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,f=!1,s,l;try{for(e=e.call(c);!(i=(s=e.next()).done)&&(r.push(s.value),!(a&&r.length===a));i=!0);}catch(n){f=!0,l=n}finally{try{!i&&e.return!=null&&e.return()}finally{if(f)throw l}}return r}}function J3(c,a){if(c){if(typeof c=="string")return i2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i2(c,a)}}function i2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Ga(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S3=function(){},p2={},c4={},a4=null,e4={mark:S3,measure:S3};try{typeof window<"u"&&(p2=window),typeof document<"u"&&(c4=document),typeof MutationObserver<"u"&&(a4=MutationObserver),typeof performance<"u"&&(e4=performance)}catch{}var Wa=p2.navigator||{},k3=Wa.userAgent,w3=k3===void 0?"":k3,O=p2,u=c4,A3=a4,M1=e4;O.document;var E=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",r4=~w3.indexOf("MSIE")||~w3.indexOf("Trident/"),C1,p1,u1,L1,d1,D="___FONT_AWESOME___",f2=16,i4="fa",f4="svg-inline--fa",_="data-fa-i2svg",s2="data-fa-pseudo-element",Ia="data-fa-pseudo-element-pending",u2="data-prefix",L2="data-icon",y3="fontawesome-i2svg",Za="async",ja=["HTML","HEAD","STYLE","SCRIPT"],s4=function(){try{return!0}catch{return!1}}(),p="classic",L="sharp",d2=[p,L];function t1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[p]}})}var i1=t1((C1={},x(C1,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(C1,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),C1)),f1=t1((p1={},x(p1,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(p1,L,{solid:"fass",regular:"fasr",light:"fasl"}),p1)),s1=t1((u1={},x(u1,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(u1,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),u1)),_a=t1((L1={},x(L1,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(L1,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),L1)),Ya=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,l4="fa-layers-text",Xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ka=t1((d1={},x(d1,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(d1,L,{900:"fass",400:"fasr",300:"fasl"}),d1)),n4=[1,2,3,4,5,6,7,8,9,10],$a=n4.concat([11,12,13,14,15,16,17,18,19,20]),Qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(f1[p]).map(l1.add.bind(l1));Object.keys(f1[L]).map(l1.add.bind(l1));var Ja=[].concat(d2,o1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(n4.map(function(c){return"".concat(c,"x")})).concat($a.map(function(c){return"w-".concat(c)})),a1=O.FontAwesomeConfig||{};function ce(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function ae(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(u&&typeof u.querySelector=="function"){var ee=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ee.forEach(function(c){var a=C2(c,2),e=a[0],r=a[1],i=ae(ce(e));i!=null&&(a1[r]=i)})}var o4={styleDefault:"solid",familyDefault:"classic",cssPrefix:i4,replacementClass:f4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a1.familyPrefix&&(a1.cssPrefix=a1.familyPrefix);var Q=m(m({},o4),a1);Q.autoReplaceSvg||(Q.observeMutations=!1);var z={};Object.keys(o4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){Q[c]=e,e1.forEach(function(r){return r(z)})},get:function(){return Q[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,e1.forEach(function(e){return e(z)})},get:function(){return Q.cssPrefix}});O.FontAwesomeConfig=z;var e1=[];function re(c){return e1.push(c),function(){e1.splice(e1.indexOf(c),1)}}var G=f2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ie(c){if(!(!c||!E)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=u.head.childNodes,r=null,i=e.length-1;i>-1;i--){var f=e[i],s=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=f)}return u.head.insertBefore(a,r),c}}var fe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n1(){for(var c=12,a="";c-- >0;)a+=fe[Math.random()*62|0];return a}function J(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function g2(c){return c.classList?J(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function t4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function se(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(t4(c[e]),'" ')},"").trim()}function T1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function x2(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}function le(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(f," ").concat(s," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:n,path:t}}function ne(c){var a=c.transform,e=c.width,r=e===void 0?f2:e,i=c.height,f=i===void 0?f2:i,s=c.startCentered,l=s===void 0?!1:s,n="";return l&&r4?n+="translate(".concat(a.x/G-r/2,"em, ").concat(a.y/G-f/2,"em) "):l?n+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):n+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),n+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var oe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function m4(){var c=i4,a=f4,e=z.cssPrefix,r=z.replacementClass,i=oe;if(e!==c||r!==a){var f=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(f,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var P3=!1;function c2(){z.autoAddCss&&!P3&&(ie(m4()),P3=!0)}var te={mixout:function(){return{dom:{css:m4,insertCss:c2}}},hooks:function(){return{beforeDOMElementCreation:function(){c2()},beforeI2svg:function(){c2()}}}},R=O||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var T=R[D],z4=[],me=function c(){u.removeEventListener("DOMContentLoaded",c),w1=1,z4.map(function(a){return a()})},w1=!1;E&&(w1=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),w1||u.addEventListener("DOMContentLoaded",me));function ze(c){E&&(w1?setTimeout(c,0):z4.push(c))}function m1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,f=i===void 0?[]:i;return typeof c=="string"?t4(c):"<".concat(a," ").concat(se(r),">").concat(f.map(m1).join(""),"</").concat(a,">")}function T3(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var ve=function(a,e){return function(r,i,f,s){return a.call(e,r,i,f,s)}},a2=function(a,e,r,i){var f=Object.keys(a),s=f.length,l=i!==void 0?ve(e,i):e,n,t,o;for(r===void 0?(n=1,o=a[f[0]]):(n=0,o=r);n<s;n++)t=f[n],o=l(o,a[t],t,a);return o};function He(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var f=c.charCodeAt(e++);(f&64512)==56320?a.push(((i&1023)<<10)+(f&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function l2(c){var a=He(c);return a.length===1?a[0].toString(16):null}function he(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function B3(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function n2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,f=B3(a);typeof T.hooks.addPack=="function"&&!i?T.hooks.addPack(c,B3(a)):T.styles[c]=m(m({},T.styles[c]||{}),f),c==="fas"&&n2("fa",a)}var g1,x1,b1,X=T.styles,Ve=T.shims,Me=(g1={},x(g1,p,Object.values(s1[p])),x(g1,L,Object.values(s1[L])),g1),b2=null,v4={},H4={},h4={},V4={},M4={},Ce=(x1={},x(x1,p,Object.keys(i1[p])),x(x1,L,Object.keys(i1[L])),x1);function pe(c){return~Ja.indexOf(c)}function ue(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!pe(i)?i:null}var C4=function(){var a=function(f){return a2(X,function(s,l,n){return s[n]=a2(l,f,{}),s},{})};v4=a(function(i,f,s){if(f[3]&&(i[f[3]]=s),f[2]){var l=f[2].filter(function(n){return typeof n=="number"});l.forEach(function(n){i[n.toString(16)]=s})}return i}),H4=a(function(i,f,s){if(i[s]=s,f[2]){var l=f[2].filter(function(n){return typeof n=="string"});l.forEach(function(n){i[n]=s})}return i}),M4=a(function(i,f,s){var l=f[2];return i[s]=s,l.forEach(function(n){i[n]=s}),i});var e="far"in X||z.autoFetchSvg,r=a2(Ve,function(i,f){var s=f[0],l=f[1],n=f[2];return l==="far"&&!e&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:n}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:n}),i},{names:{},unicodes:{}});h4=r.names,V4=r.unicodes,b2=B1(z.styleDefault,{family:z.familyDefault})};re(function(c){b2=B1(c.styleDefault,{family:z.familyDefault})});C4();function N2(c,a){return(v4[c]||{})[a]}function Le(c,a){return(H4[c]||{})[a]}function j(c,a){return(M4[c]||{})[a]}function p4(c){return h4[c]||{prefix:null,iconName:null}}function de(c){var a=V4[c],e=N2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return b2}var S2=function(){return{prefix:null,iconName:null,rest:[]}};function B1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?p:e,i=i1[r][c],f=f1[r][c]||f1[r][i],s=c in T.styles?c:null;return f||s||null}var F3=(b1={},x(b1,p,Object.keys(s1[p])),x(b1,L,Object.keys(s1[L])),b1);function F1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,f=(a={},x(a,p,"".concat(z.cssPrefix,"-").concat(p)),x(a,L,"".concat(z.cssPrefix,"-").concat(L)),a),s=null,l=p;(c.includes(f[p])||c.some(function(t){return F3[p].includes(t)}))&&(l=p),(c.includes(f[L])||c.some(function(t){return F3[L].includes(t)}))&&(l=L);var n=c.reduce(function(t,o){var v=ue(z.cssPrefix,o);if(X[o]?(o=Me[l].includes(o)?_a[l][o]:o,s=o,t.prefix=o):Ce[l].indexOf(o)>-1?(s=o,t.prefix=B1(o,{family:l})):v?t.iconName=v:o!==z.replacementClass&&o!==f[p]&&o!==f[L]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var V=s==="fa"?p4(t.iconName):{},M=j(t.prefix,t.iconName);V.prefix&&(s=null),t.iconName=V.iconName||M||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!X.far&&X.fas&&!z.autoFetchSvg&&(t.prefix="fas")}return t},S2());return(c.includes("fa-brands")||c.includes("fab"))&&(n.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(n.prefix="fad"),!n.prefix&&l===L&&(X.fass||z.autoFetchSvg)&&(n.prefix="fass",n.iconName=j(n.prefix,n.iconName)||n.iconName),(n.prefix==="fa"||s==="fa")&&(n.prefix=W()||"fas"),n}var ge=function(){function c(){Fa(this,c),this.definitions={}}return Da(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),f=0;f<r;f++)i[f]=arguments[f];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){e.definitions[l]=m(m({},e.definitions[l]||{}),s[l]),n2(l,s[l]);var n=s1[p][l];n&&n2(n,s[l]),C4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(f){var s=i[f],l=s.prefix,n=s.iconName,t=s.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(e[l][v]=t)}),e[l][n]=t}),e}}]),c}(),D3=[],K={},$={},xe=Object.keys($);function be(c,a){var e=a.mixoutsTo;return D3=c,K={},Object.keys($).forEach(function(r){xe.indexOf(r)===-1&&delete $[r]}),D3.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(e[s]=i[s]),k1(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){e[s]||(e[s]={}),e[s][l]=i[s][l]})}),r.hooks){var f=r.hooks();Object.keys(f).forEach(function(s){K[s]||(K[s]=[]),K[s].push(f[s])})}r.provides&&r.provides($)}),e}function o2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var f=K[c]||[];return f.forEach(function(s){a=s.apply(null,[a].concat(r))}),a}function Y(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=K[c]||[];i.forEach(function(f){f.apply(null,e)})}function q(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function t2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||W();if(a)return a=j(e,a)||a,T3(u4.definitions,e,a)||T3(T.styles,e,a)}var u4=new ge,Ne=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Y("noAuto")},Se={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(Y("beforeI2svg",a),q("pseudoElements2svg",a),q("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,ze(function(){we({autoReplaceSvgRoot:e}),Y("watch",a)})}},ke={icon:function(a){if(a===null)return null;if(k1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=B1(a[0]);return{prefix:r,iconName:j(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(Ya))){var i=F1(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||W(),iconName:j(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var f=W();return{prefix:f,iconName:j(f,a)||a}}}},w={noAuto:Ne,config:z,dom:Se,parse:ke,library:u4,findIconDefinition:t2,toHtml:m1},we=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?u:e;(Object.keys(T.styles).length>0||z.autoFetchSvg)&&E&&z.autoReplaceSvg&&w.dom.i2svg({node:r})};function D1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return m1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(E){var r=u.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Ae(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,f=c.styles,s=c.transform;if(x2(s)&&e.found&&!r.found){var l=e.width,n=e.height,t={x:l/n/2,y:.5};i.style=T1(m(m({},f),{},{"transform-origin":"".concat(t.x+s.x/16,"em ").concat(t.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function ye(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,f=c.symbol,s=f===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:s}),children:r}]}]}function k2(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,f=c.iconName,s=c.transform,l=c.symbol,n=c.title,t=c.maskId,o=c.titleId,v=c.extra,V=c.watchable,M=V===void 0?!1:V,b=r.found?r:e,N=b.width,S=b.height,H=i==="fak",h=[z.replacementClass,f?"".concat(z.cssPrefix,"-").concat(f):""].filter(function(U){return v.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(v.classes).join(" "),C={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":i,"data-icon":f,class:h,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(S)})},d=H&&!~v.classes.indexOf("fa-fw")?{width:"".concat(N/S*16*.0625,"em")}:{};M&&(C.attributes[_]=""),n&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(o||n1())},children:[n]}),delete C.attributes.title);var g=m(m({},C),{},{prefix:i,iconName:f,main:e,mask:r,maskId:t,transform:s,symbol:l,styles:m(m({},d),v.styles)}),B=r.found&&e.found?q("generateAbstractMask",g)||{children:[],attributes:{}}:q("generateAbstractIcon",g)||{children:[],attributes:{}},A=B.children,J1=B.attributes;return g.children=A,g.attributes=J1,l?ye(g):Ae(g)}function R3(c){var a=c.content,e=c.width,r=c.height,i=c.transform,f=c.title,s=c.extra,l=c.watchable,n=l===void 0?!1:l,t=m(m(m({},s.attributes),f?{title:f}:{}),{},{class:s.classes.join(" ")});n&&(t[_]="");var o=m({},s.styles);x2(i)&&(o.transform=ne({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var v=T1(o);v.length>0&&(t.style=v);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),f&&V.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),V}function Pe(c){var a=c.content,e=c.title,r=c.extra,i=m(m(m({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),f=T1(r.styles);f.length>0&&(i.style=f);var s=[];return s.push({tag:"span",attributes:i,children:[a]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var e2=T.styles;function m2(c){var a=c[0],e=c[1],r=c.slice(4),i=C2(r,1),f=i[0],s=null;return Array.isArray(f)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Z.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Z.PRIMARY),fill:"currentColor",d:f[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:a,height:e,icon:s}}var Te={found:!1,width:512,height:512};function Be(c,a){!s4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function z2(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=W()),new Promise(function(r,i){if(q("missingIconAbstract"),e==="fa"){var f=p4(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&e2[a]&&e2[a][c]){var s=e2[a][c];return r(m2(s))}Be(c,a),r(m(m({},Te),{},{icon:z.showMissingIcons&&c?q("missingIconAbstract")||{}:{}}))})}var q3=function(){},v2=z.measurePerformance&&M1&&M1.mark&&M1.measure?M1:{mark:q3,measure:q3},c1='FA "6.4.0"',Fe=function(a){return v2.mark("".concat(c1," ").concat(a," begins")),function(){return L4(a)}},L4=function(a){v2.mark("".concat(c1," ").concat(a," ends")),v2.measure("".concat(c1," ").concat(a),"".concat(c1," ").concat(a," begins"),"".concat(c1," ").concat(a," ends"))},w2={begin:Fe,end:L4},N1=function(){};function E3(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}function De(c){var a=c.getAttribute?c.getAttribute(u2):null,e=c.getAttribute?c.getAttribute(L2):null;return a&&e}function Re(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function qe(){if(z.autoReplaceSvg===!0)return S1.replace;var c=S1[z.autoReplaceSvg];return c||S1.replace}function Ee(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function Ue(c){return u.createElement(c)}function d4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Ee:Ue:e;if(typeof c=="string")return u.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(s){i.setAttribute(s,c.attributes[s])});var f=c.children||[];return f.forEach(function(s){i.appendChild(d4(s,{ceFn:r}))}),i}function Ge(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var S1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(d4(i),e)}),e.getAttribute(_)===null&&z.keepOriginalSource){var r=u.createComment(Ge(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~g2(e).indexOf(z.replacementClass))return S1.replace(a);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var f=r[0].attributes.class.split(" ").reduce(function(l,n){return n===z.replacementClass||n.match(i)?l.toSvg.push(n):l.toNode.push(n),l},{toNode:[],toSvg:[]});r[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",f.toNode.join(" "))}var s=r.map(function(l){return m1(l)}).join(`
`);e.setAttribute(_,""),e.innerHTML=s}};function U3(c){c()}function g4(c,a){var e=typeof a=="function"?a:N1;if(c.length===0)e();else{var r=U3;z.mutateApproach===Za&&(r=O.requestAnimationFrame||U3),r(function(){var i=qe(),f=w2.begin("mutate");c.map(i),f(),e()})}}var A2=!1;function x4(){A2=!0}function H2(){A2=!1}var A1=null;function G3(c){if(A3&&z.observeMutations){var a=c.treeCallback,e=a===void 0?N1:a,r=c.nodeCallback,i=r===void 0?N1:r,f=c.pseudoElementsCallback,s=f===void 0?N1:f,l=c.observeMutationsRoot,n=l===void 0?u:l;A1=new A3(function(t){if(!A2){var o=W();J(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!E3(v.addedNodes[0])&&(z.searchPseudoElements&&s(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&z.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&E3(v.target)&&~Qa.indexOf(v.attributeName))if(v.attributeName==="class"&&De(v.target)){var V=F1(g2(v.target)),M=V.prefix,b=V.iconName;v.target.setAttribute(u2,M||o),b&&v.target.setAttribute(L2,b)}else Re(v.target)&&i(v.target)})}}),E&&A1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Oe(){A1&&A1.disconnect()}function We(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var f=i.split(":"),s=f[0],l=f.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),e}function Ie(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=F1(g2(c));return i.prefix||(i.prefix=W()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Le(i.prefix,c.innerText)||N2(i.prefix,l2(c.innerText))),!i.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Ze(c){var a=J(c.attributes).reduce(function(i,f){return i.name!=="class"&&i.name!=="style"&&(i[f.name]=f.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||n1()):(a["aria-hidden"]="true",a.focusable="false")),a}function je(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ie(c),r=e.iconName,i=e.prefix,f=e.rest,s=Ze(c),l=o2("parseNodeAttributes",{},c),n=a.styleParser?We(c):[];return m({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:n,attributes:s}},l)}var _e=T.styles;function b4(c){var a=z.autoReplaceSvg==="nest"?O3(c,{styleParser:!1}):O3(c);return~a.extra.classes.indexOf(l4)?q("generateLayersText",c,a):q("generateSvgReplacementMutation",c,a)}var I=new Set;d2.map(function(c){I.add("fa-".concat(c))});Object.keys(i1[p]).map(I.add.bind(I));Object.keys(i1[L]).map(I.add.bind(I));I=o1(I);function W3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var e=u.documentElement.classList,r=function(v){return e.add("".concat(y3,"-").concat(v))},i=function(v){return e.remove("".concat(y3,"-").concat(v))},f=z.autoFetchSvg?I:d2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(_e));f.includes("fa")||f.push("fa");var s=[".".concat(l4,":not([").concat(_,"])")].concat(f.map(function(o){return".".concat(o,":not([").concat(_,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=J(c.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var n=w2.begin("onTree"),t=l.reduce(function(o,v){try{var V=b4(v);V&&o.push(V)}catch(M){s4||M.name==="MissingIcon"&&console.error(M)}return o},[]);return new Promise(function(o,v){Promise.all(t).then(function(V){g4(V,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),n(),o()})}).catch(function(V){n(),v(V)})})}function Ye(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;b4(c).then(function(e){e&&g4([e],a)})}function Xe(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:t2(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:t2(i||{})),c(r,m(m({},e),{},{mask:i}))}}var Ke=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?F:r,f=e.symbol,s=f===void 0?!1:f,l=e.mask,n=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,v=e.title,V=v===void 0?null:v,M=e.titleId,b=M===void 0?null:M,N=e.classes,S=N===void 0?[]:N,H=e.attributes,h=H===void 0?{}:H,C=e.styles,d=C===void 0?{}:C;if(a){var g=a.prefix,B=a.iconName,A=a.icon;return D1(m({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(V?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(b||n1()):(h["aria-hidden"]="true",h.focusable="false")),k2({icons:{main:m2(A),mask:n?m2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:B,transform:m(m({},F),i),symbol:s,title:V,maskId:o,titleId:b,extra:{attributes:h,styles:d,classes:S}})})}},$e={mixout:function(){return{icon:Xe(Ke)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=W3,e.nodeCallback=Ye,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?u:r,f=e.callback,s=f===void 0?function(){}:f;return W3(i,s)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,f=r.title,s=r.titleId,l=r.prefix,n=r.transform,t=r.symbol,o=r.mask,v=r.maskId,V=r.extra;return new Promise(function(M,b){Promise.all([z2(i,l),o.iconName?z2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var S=C2(N,2),H=S[0],h=S[1];M([e,k2({icons:{main:H,mask:h},prefix:l,iconName:i,transform:n,symbol:t,maskId:v,title:f,titleId:s,extra:V,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,f=e.main,s=e.transform,l=e.styles,n=T1(l);n.length>0&&(i.style=n);var t;return x2(s)&&(t=q("generateAbstractTransformGrouping",{main:f,transform:s,containerWidth:f.width,iconWidth:f.width})),r.push(t||f.icon),{children:r,attributes:i}}}},Qe={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,f=i===void 0?[]:i;return D1({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:e,params:r});var s=[];return e(function(l){Array.isArray(l)?l.map(function(n){s=s.concat(n.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(o1(f)).join(" ")},children:s}]})}}}},Je={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,f=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,n=r.attributes,t=n===void 0?{}:n,o=r.styles,v=o===void 0?{}:o;return D1({type:"counter",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:r}),Pe({content:e.toString(),title:f,extra:{attributes:t,styles:v,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(o1(l))}})})}}}},cr={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,f=i===void 0?F:i,s=r.title,l=s===void 0?null:s,n=r.classes,t=n===void 0?[]:n,o=r.attributes,v=o===void 0?{}:o,V=r.styles,M=V===void 0?{}:V;return D1({type:"text",content:e},function(){return Y("beforeDOMElementCreation",{content:e,params:r}),R3({content:e,transform:m(m({},F),f),title:l,extra:{attributes:v,styles:M,classes:["".concat(z.cssPrefix,"-layers-text")].concat(o1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,f=r.transform,s=r.extra,l=null,n=null;if(r4){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,n=o.height/t}return z.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,R3({content:e.innerHTML,width:l,height:n,transform:f,title:i,extra:s,watchable:!0})])}}},ar=new RegExp('"',"ug"),I3=[1105920,1112319];function er(c){var a=c.replace(ar,""),e=he(a,0),r=e>=I3[0]&&e<=I3[1],i=a.length===2?a[0]===a[1]:!1;return{value:l2(i?a[0]:a),isSecondary:r||i}}function Z3(c,a){var e="".concat(Ia).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var f=J(c.children),s=f.filter(function(A){return A.getAttribute(s2)===a})[0],l=O.getComputedStyle(c,a),n=l.getPropertyValue("font-family").match(Xa),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(s&&!n)return c.removeChild(s),r();if(n&&o!=="none"&&o!==""){var v=l.getPropertyValue("content"),V=~["Sharp"].indexOf(n[2])?L:p,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(n[2])?f1[V][n[2].toLowerCase()]:Ka[V][t],b=er(v),N=b.value,S=b.isSecondary,H=n[0].startsWith("FontAwesome"),h=N2(M,N),C=h;if(H){var d=de(N);d.iconName&&d.prefix&&(h=d.iconName,M=d.prefix)}if(h&&!S&&(!s||s.getAttribute(u2)!==M||s.getAttribute(L2)!==C)){c.setAttribute(e,C),s&&c.removeChild(s);var g=je(),B=g.extra;B.attributes[s2]=a,z2(h,M).then(function(A){var J1=k2(m(m({},g),{},{icons:{main:A,mask:S2()},prefix:M,iconName:C,extra:B,watchable:!0})),U=u.createElement("svg");a==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=J1.map(function(Ta){return m1(Ta)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ya={exports:{}};(function(c){(function(a){var e=function(H,h,C){if(!t(h)||v(h)||V(h)||M(h)||n(h))return h;var d,g=0,B=0;if(o(h))for(d=[],B=h.length;g<B;g++)d.push(e(H,h[g],C));else{d={};for(var A in h)Object.prototype.hasOwnProperty.call(h,A)&&(d[H(A,C)]=e(H,h[A],C))}return d},r=function(H,h){h=h||{};var C=h.separator||"_",d=h.split||/(?=[A-Z])/;return H.split(d).join(C)},i=function(H){return b(H)?H:(H=H.replace(/[\-_\s]+(.)?/g,function(h,C){return C?C.toUpperCase():""}),H.substr(0,1).toLowerCase()+H.substr(1))},f=function(H){var h=i(H);return h.substr(0,1).toUpperCase()+h.substr(1)},s=function(H,h){return r(H,h).toLowerCase()},l=Object.prototype.toString,n=function(H){return typeof H=="function"},t=function(H){return H===Object(H)},o=function(H){return l.call(H)=="[object Array]"},v=function(H){return l.call(H)=="[object Date]"},V=function(H){return l.call(H)=="[object RegExp]"},M=function(H){return l.call(H)=="[object Boolean]"},b=function(H){return H=H-0,H===H},N=function(H,h){var C=h&&"process"in h?h.process:h;return typeof C!="function"?H:function(d,g){return C(d,H,g)}},S={camelize:i,decamelize:s,pascalize:f,depascalize:s,camelizeKeys:function(H,h){return e(N(i,h),H)},decamelizeKeys:function(H,h){return e(N(s,h),H,h)},pascalizeKeys:function(H,h){return e(N(f,h),H)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=S:a.humps=S})(yE)})(ya);var PE=ya.exports,TE=["class","style"];function BE(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),i=PE.camelize(e.slice(0,r)),f=e.slice(r+1).trim();return a[i]=f,a},{})}function FE(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function x3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var r=(c.children||[]).map(function(n){return x3(n)}),i=Object.keys(c.attributes||{}).reduce(function(n,t){var o=c.attributes[t];switch(t){case"class":n.class=FE(o);break;case"style":n.style=BE(o);break;default:n.attrs[t]=o}return n},{attrs:{},class:{},style:{}});e.class;var f=e.style,s=f===void 0?{}:f,l=NE(e,TE);return Q3(c.tag,P(P(P({},a),{},{class:i.class,style:P(P({},i.style),s)},i.attrs),l),r)}var Pa=!1;try{Pa=!0}catch{}function DE(){if(!Pa&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function r1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?k({},c,a):{}}function RE(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},k(a,"fa-".concat(c.size),c.size!==null),k(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),k(a,"fa-pull-".concat(c.pull),c.pull!==null),k(a,"fa-swap-opacity",c.swapOpacity),k(a,"fa-bounce",c.bounce),k(a,"fa-shake",c.shake),k(a,"fa-beat",c.beat),k(a,"fa-fade",c.fade),k(a,"fa-beat-fade",c.beatFade),k(a,"fa-flash",c.flash),k(a,"fa-spin-pulse",c.spinPulse),k(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(r){return e[r]?r:null}).filter(function(r){return r})}function $3(c){if(c&&P1(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(y1.icon)return y1.icon(c);if(c===null)return null;if(P1(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var OE=M2({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var r=e.attrs,i=y(function(){return $3(a.icon)}),f=y(function(){return r1("classes",RE(a))}),s=y(function(){return r1("transform",typeof a.transform=="string"?y1.transform(a.transform):a.transform)}),l=y(function(){return r1("mask",$3(a.mask))}),n=y(function(){return vr(i.value,P(P(P(P({},f.value),s.value),l.value),{},{symbol:a.symbol,title:a.title}))});Ba(n,function(o){if(!o)return DE("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var t=y(function(){return n.value?x3(n.value.abstract[0],{},r):null});return function(){return t.value}}});M2({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var r=e.slots,i=N4.familyPrefix,f=y(function(){return["".concat(i,"-layers")].concat(h2(a.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Q3("div",{class:f.value},r.default?r.default():[])}}});M2({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var r=e.attrs,i=N4.familyPrefix,f=y(function(){return r1("classes",[].concat(h2(a.counter?["".concat(i,"-layers-counter")]:[]),h2(a.position?["".concat(i,"-layers-").concat(a.position)]:[])))}),s=y(function(){return r1("transform",typeof a.transform=="string"?y1.transform(a.transform):a.transform)}),l=y(function(){var t=Hr(a.value.toString(),P(P({},s.value),f.value)),o=t.abstract;return a.counter&&(o[0].attributes.class=o[0].attributes.class.replace("fa-layers-text","")),o[0]}),n=y(function(){return x3(l.value,{},r)});return function(){return n.value}}});export{OE as F,GE as a,UE as i,EE as l};