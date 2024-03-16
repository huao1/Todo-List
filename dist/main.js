(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"body {\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    grid-template: clamp(60px, 8vw ,80px) 1fr / clamp(100px, 30%, 300px) 1fr;\n}\n\nheader {\n    background-color: #9CBCB7;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    gap: 16px;\n    height: clamp(60px, 8vw ,80px);\n    border-bottom: #c1c1c1 solid 1px;\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n}\n\np {\n    margin: 0;\n}\n\n.title {\n    margin-left: 30px;\n    margin-top: 0;\n    margin-bottom: 0;\n    color: white;\n    font-size: clamp(26px, 5vw, 50px);\n}\n\n#logo {\n    width: clamp(40px, 5vw, 60px);\n    height: clamp(40px, 5vw, 60px);\n}\n\n#categories {\n    height: 100%;\n    background-color: #eeeeee;\n    border-right: #c1c1c1 solid 1px;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#category-lists {\n    display: flex;\n    flex-direction: column;\n    gap: clamp(12px, 2vw, 20px);\n    margin-left: clamp(14px, 4vw, 60px);\n    margin-top: clamp(12px, 5vw, 40px);\n}\n\n.link-btn {\n    border: none;\n    background-color: #eeeeee;\n    padding: 0;\n    text-align: left;\n    font-weight: 100;\n    font-size: clamp(14px, 3vw, 28px);\n}\n\n.user-category {\n    list-style-type: none;\n    padding: 0;\n    margin-left: clamp(24px, 6vw, 86px);\n}\n\n.user-item {\n    margin-bottom: clamp(12px, 2vw, 20px);\n    font-weight: 100;\n    font-size: clamp(12px, 3vw, 24px);\n}\n\n.link-btn:hover, .user-item:hover {\n    color: #E89275;\n    font-weight: 800;\n}\n\n#list {\n    background-color: white;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding: clamp(12px, 5vw, 40px) 40px 0 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.list-item {\n    background-color: #eeeeee;\n    display: flex;\n    justify-content: space-between;\n    height: clamp(24px, 5vw, 48px);\n    transition: 0.15s;\n}\n\n.list-item:hover {\n    transform: scale(1.02);\n    box-shadow: 4px 4px 8px gray;\n}\n\n.high {\n    background-color: red;\n    width: 3px;\n    height: 100%;\n}\n\n.trash, .edit {\n    width: clamp(12px, 2vw, 24px);\n    height: clamp(12px, 2vw, 24px);\n}\n\n.trash:hover, .edit:hover, .empty {\n    filter: invert(65%) sepia(48%) saturate(558%) hue-rotate(324deg) brightness(97%) contrast(88%);\n}\n\n.list-text {\n    font-size: clamp(10px, 1.5vw, 18px);\n    font-weight: 200;\n}\n\n.left {\n    display: flex;\n    align-items: center;\n    text-align: center;   \n    width: 50%;\n    gap: clamp(4px, 1.75vw, 16px);\n}\n\n.right {\n    margin-right: 16px;\n    display: flex;\n    text-align: center;\n    justify-content: right;\n    align-items: center;\n    width: 40%;\n    gap: clamp(6px, 2.5vw, 40px);\n}\n\n.empty {\n    height: clamp(12px, 2vw, 18px);\n    width: clamp(12px, 2vw, 18px);\n}\n\n\n\n.item-date {\n    font-size: clamp(8px, 1.5vw, 14px);\n    font-weight: 100;\n}\n\n.details {\n    color: #E89275;\n    padding: 0;\n    border-radius: 3px;\n    border: #E89275 solid 2px;\n    width: clamp(50px, 6vw, 75px);\n    height: clamp(18px, 3vw, 25px);\n    font-weight: 800;\n    font-size: clamp(6px, 1.25vw, 12px);\n}\n\n.details:hover {\n    background-color: #E89275;\n    color: white;\n}\n\n.check-box {\n    border: none;\n    padding: 0;\n    height: clamp(12px, 2vw, 18px);\n    width: clamp(12px, 2vw, 18px);\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(a[p]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var p=n[c],s=r.base?p[0]+r.base:p[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var u=t(d),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var p=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=p}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),p=t.n(c),s=t(540),l=t.n(s),d=t(113),u=t.n(d),f=t(523),m={};m.styleTagTransform=u(),m.setAttributes=p(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const g=t.p+"407dadf16f3b5883f7d1.png",h=t.p+"92881cf98b591daca7ae.png",x=t.p+"0f46e2728eb984e21ce8.png",v=t.p+"809a248db96af443443b.png";document.querySelector("#logo").setAttribute("src",g),document.querySelector(".trash").setAttribute("src",h),document.querySelector(".edit").setAttribute("src",x),document.querySelector(".empty").setAttribute("src",v),console.log("This works")})()})();