import{b as v,aP as c,bQ as u,a as w,d as i,h as t,S as x,V as S,bC as g,ag as _,ak as k,a_ as C,a9 as I,I as $,B as R,Z as T,a5 as d,n as A,bA as D,aR as F,cp as L}from"./index.c40f852e.js";const q=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){A.warning(a("users.2fa_already_enabled")),n();return}const e=await p();D(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();F(e,()=>{L({...d(),otp:!0}),n()})};return t(T,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(S,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(_,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[k(()=>a("users.or_manual")),":"," ",t(C,{get color(){return I()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t($,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(R,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{q as default};
