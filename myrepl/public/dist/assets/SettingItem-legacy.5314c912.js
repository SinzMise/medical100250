!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.99094962.js","./index-legacy.eff0a9af.js","./item_type-legacy.d1f1c701.js","./index-legacy.bd84f2f0.js"],(function(r){"use strict";var n,t,u,l,i,c,a,o,g,d,f,h,v,b,y,s,p,O,m,w,k,j,x,C,D,E,T,A;return{setters:[function(e){n=e.d,t=e.j,u=e.r,l=e.b1,i=e.aj,c=e.ai,a=e.U,o=e.al,g=e.V,d=e.I,f=e.c6,h=e.T,v=e.b3,b=e.b4,y=e.b5,s=e.b6,p=e.b7,O=e.b8,m=e.b9,w=e.x,k=e.ba,j=e.bb,x=e.bc,C=e.F,D=e.bd},function(e){E=e.F},function(e){T=e.T},function(e){A=e.o}],execute:function(){r("I",(function(r){var N=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,a;return t(l,(n={},"for",(a={}).for=a.for||{},a.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",a.children=a.children||{},a.children.get=function(){return[i((function(){return N("settings.".concat(r.key))})),t(u,{get when(){return r.flag===E.DEPRECATED},get children(){return t(c,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,a),n))}}),t(a,{get fallback(){return t(o,{get children(){return N("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[T.String,T.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===T.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===E.READONLY},get children(){return[t(b,{get children(){return[t(y,{get children(){return N("global.choose")}}),t(s,{}),t(p,{})]}}),t(O,{get children(){return t(m,{get children(){return t(w,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(k,{value:e,get children(){return[t(j,{get children(){return N("settings.".concat(r.key,"s.").concat(e))}}),t(x,{})]}})}})}})}})]}})}})]}}),t(C,{get children(){return i((function(){return!!r.help}),!0)()?N("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();
