import{d as E,e as i,a as o,bj as c,j as t,br as m,cd as A,aq as g,B as u,bp as l,n as h,I as F,a1 as N,$ as P}from"./index.aa5c3cc6.js";import{o as z}from"./index.8943b213.js";import{c as J}from"./useUtil.4e55fdda.js";import{G}from"./index.510cd30c.js";import{I as d}from"./SettingItem.137597b1.js";import"./api.25b7d67a.js";import"./index.ed532f77.js";import"./item_type.be442da4.js";const re=()=>{const r=E();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[q,S]=i(""),[a,Q]=i([]),[U,j]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[B,H]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[M,O]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await j();l(e,n=>{var C,T,I,L,w;_(((C=n.find(s=>s.key==="aria2_uri"))==null?void 0:C.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),S(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[R,x]=o(()=>c.post("/admin/setting/reset_token")),{copy:D}=J();return t(P,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return B()},onClick:async()=>{const e=await H();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return M()},onClick:async()=>{const e=await O();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(F,{get value(){return q()},readOnly:!0}),t(N,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{D(q())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return R()},onClick:async()=>{const e=await x();l(e,n=>{h.success(r("settings_other.reset_token_success")),S(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{re as default};
