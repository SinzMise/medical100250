!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,c=[],a=!0,o=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(u){o=!0,i=u}finally{try{a||null==e.return||e.return()}finally{if(o)throw i}}return c}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.bb192562.js","./File-legacy.b41d9f45.js","./useUtil-legacy.6f696bcd.js","./api-legacy.2477ac06.js","./icon-legacy.0fa728fb.js","./index-legacy.75abc207.js","./index-legacy.92036a02.js","./Layout-legacy.ced141ea.js","./EncodingSelect-legacy.83449ca4.js","./index-legacy.e470b883.js","./FolderTree-legacy.f6297b03.js"],(function(t){"use strict";var e,r,i,c,a,o;return{setters:[function(n){e=n.u,r=n.c,i=n.e,c=n.B,a=n.N},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return i(o,{get children(){return i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
