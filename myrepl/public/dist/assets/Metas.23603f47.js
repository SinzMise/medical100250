import{d as $,u as k,a as M,bj as l,e as y,cf as C,j as e,a1 as o,B as c,Z as S,cg as j,ch as v,ci as d,x as g,cj as u,ck as x,cl as n,bp as h,n as B,X as F}from"./index.aa5c3cc6.js";import{o as D}from"./index.8943b213.js";import{D as H}from"./DeletePopover.15533367.js";import{W as L}from"./Wether.0b47d441.js";const O=()=>{const r=$();D("manage.sidemenu.metas");const{to:i}=k(),[p,m]=M(()=>l.get("/admin/meta/list")),[f,b]=y([]),a=async()=>{const t=await m();h(t,s=>b(s.content))};a();const[w,T]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(j,{highlightOnHover:!0,dense:!0,get children(){return[e(v,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(x,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(L,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{B.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{O as default};
