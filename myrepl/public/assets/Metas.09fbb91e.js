import{a as $,b as k,aP as y,bQ as l,d as C,cw as M,h as e,a2 as o,B as c,Y as B,cx as S,cy as v,cz as d,t as g,cA as u,cB as x,cC as n,bA as h,n as F,V as A}from"./index.c40f852e.js";import{o as D}from"./index.c693502e.js";import{D as H}from"./DeletePopover.79ffffa6.js";import{W as L}from"./Wether.789c93f4.js";const z=()=>{const r=$();D("manage.sidemenu.metas");const{to:i}=k(),[p,m]=y(()=>l.get("/admin/meta/list")),[f,b]=C([]),a=async()=>{const t=await m();h(t,s=>b(s.content))};a();const[w,T]=M(t=>l.post(`/admin/meta/delete?id=${t}`));return e(A,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(B,{w:"$full",overflowX:"auto",get children(){return e(S,{highlightOnHover:!0,dense:!0,get children(){return[e(v,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(x,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(L,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{F.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{z as default};
