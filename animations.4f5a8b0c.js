parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VACp":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=document.querySelector("#homeRedImage"),l=document.querySelector("#homeGreenImage"),c=document.querySelector("#homeRedImageLabel"),u=document.querySelector("#homeGreenImageLabel");if(gsap.registerPlugin(ScrollTrigger),i&&l&&c&&u){var s=gsap.timeline({ease:"Sine.easeOut",duration:1.5});s.from(i,{ease:"Sine.easeOut",duration:1.5,x:-70,y:25},"-=1.5").from(l,{ease:"Sine.easeOut",duration:1.5,x:70,y:25},"-=1.5").from(c,{ease:"Sine.easeOut",duration:1.5,x:-125},"-=1.5").from(u,{ease:"Sine.easeOut",duration:1.5,x:125},"-=1.5");var g=gsap.timeline({scrollTrigger:{trigger:i,toggleActions:"restart none reverse none",start:"40px 10%",end:"100% 15%",scrub:1},ease:"Sine.easeOut",duration:1.5});g.to(i,{ease:"Sine.easeOut",duration:1.5,x:-70,y:25},"-=1.5").to(l,{ease:"Sine.easeOut",duration:1.5,x:70,y:25},"-=1.5").to(c,{ease:"Sine.easeOut",duration:1.5,x:-125},"-=1.5").to(u,{ease:"Sine.easeOut",duration:1.5,x:125},"-=1.5")}var m=document.querySelectorAll(".title-block--regular .title-block__quote"),d=document.querySelectorAll(".title-block--dark-green .title-block__quote"),p=document.querySelectorAll(".title-block--light-green .title-block__quote"),f=[].concat(e(m),e(d),e(p));f.forEach(function(e,r){gsap.timeline({scrollTrigger:{trigger:e,toggleActions:"restart none reverse none"}}).from(e,{x:(r+1)%2!=0?-50:50,y:-15,duration:1,opacity:0})});var y=document.querySelectorAll(".picture-block__image--desktop.picture-animation");y.forEach(function(e){gsap.from(e,{scrollTrigger:{trigger:e,toggleActions:"restart none reverse none",start:"0 90%",end:"90% 0",scrub:1},duration:2,ease:"Sine.easeOut",scale:1.2})});var S=document.querySelectorAll(".picture-block__image--mobile.picture-animation");S.forEach(function(e){gsap.from(e,{scrollTrigger:{trigger:e,toggleActions:"restart none reverse none",start:"0 90%",end:"90% 0",scrub:1},duration:2,ease:"Sine.easeOut",scale:1.2})});var b=document.querySelectorAll(".picture-block__image--desktop.top-picture-animation");b.length>0&&b.forEach(function(e){var r=gsap.timeline({paused:!0});r.to(e,{scale:1.2,duration:1.5,ease:"sine.inOut"}),r.reverse(1.5);gsap.delayedCall(1.5,function(){ScrollTrigger.create({trigger:e,toggleActions:"play none reverse none",start:"0 15%",end:"100% 0",scrub:1,animation:r})})});var v=document.querySelectorAll(".picture-block__image--mobile.top-picture-animation");v.length>0&&v.forEach(function(e){var r=gsap.timeline({paused:!0});r.to(e,{scale:1.2,duration:1.5,ease:"sine.inOut"}),r.reverse(1.5);gsap.delayedCall(1.5,function(){ScrollTrigger.create({trigger:e,toggleActions:"play none reverse none",start:"0 15%",end:"100% 0",scrub:1,animation:r})})});
},{}]},{},["VACp"], null)
//# sourceMappingURL=animations.4f5a8b0c.js.map