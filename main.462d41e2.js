parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){return i(t)||c(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return e}}function i(t){if(Array.isArray(t))return t}var u,a=document.querySelector(".button"),f=document.querySelector(".game-score"),s=document.querySelectorAll(".field-row"),l=document.querySelector(".message-start"),d=document.querySelector(".message-win"),m=document.querySelector(".message-lose"),y=4,v=0,h=!1,b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function p(){v=0,b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],m.classList.contains("hidden")||m.classList.add("hidden"),d.classList.contains("hidden")||d.classList.add("hidden")}function S(){for(var t=0;t<y;t++)for(var n=0;n<y;n++){var e=s[t].children[n],r=b[t][n];0===r?(e.textContent="",e.className="field-cell"):(e.textContent=r,e.className="field-cell field-cell--".concat(r))}f.textContent=v}function w(){var t=n(g(),2),e=t[0],r=t[1];b[e][r]=Math.random()<.9?2:4}function g(){var t=[];return b.forEach(function(n,e){n.forEach(function(n,r){0===n&&t.push([e,r])})}),t[Math.floor(Math.random()*t.length)]}function A(t){switch(u=b,t.key){case"ArrowLeft":L();break;case"ArrowRight":k();break;case"ArrowDown":E();break;case"ArrowUp":j();break;default:return}for(var n=0;n<y;n++)for(var e=0;e<y;e++)u[n][e]!==b[n][e]&&(b=u,w(),S());h&&d.classList.remove("hidden"),C()||(m.classList.remove("hidden"),document.removeEventListener("keydown",A))}function L(){M()&&(u=u.map(function(t){var n=t.filter(function(t){return 0!==t});return n.forEach(function(t,e){t===n[e+1]&&(n[e]*=2,n.splice(e+1,1),v+=n[e],2048===n[e]&&(h=!0))}),n.concat(Array(y-n.length).fill(0))}))}function k(){M()&&(x(),L(),x())}function E(){q(),k(),q()}function j(){q(),L(),q()}function q(){u=u[0].map(function(t,n){return u.map(function(t){return t[n]})})}function x(){u.forEach(function(t){return t.reverse()})}function C(){return!!M()||(q(),I())}function M(){for(var n=function(t){if(u[t].some(function(t){return 0===t})||u[t].some(function(n,e){return n===u[t][e+1]}))return{v:!0}},e=0;e<y;e++){var r=n(e);if("object"===t(r))return r.v}return!1}function I(){for(var n=function(t){if(u[t].some(function(n,e){return n===u[t][e+1]}))return{v:!0}},e=0;e<y;e++){var r=n(e);if("object"===t(r))return r.v}return!1}a.addEventListener("click",function(t){document.addEventListener("keydown",A),"Start"===a.innerText?(a.classList.replace("start","restart"),a.innerText="Restart",l.classList.add("hidden")):(h=!1,p()),w(),w(),S()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.462d41e2.js.map