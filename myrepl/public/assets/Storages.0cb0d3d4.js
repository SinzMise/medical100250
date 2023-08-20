import{d as v,u as k,a as f,bj as l,j as e,N as B,a8 as L,a1 as c,aP as S,bL as T,aj as M,Z as O,B as o,aN as j,bp as g,n as p,X as C,e as $,w as I,r as N,b3 as P,b4 as R,b5 as V,b6 as A,b7 as F,b8 as H,b9 as W,x as w,ba as X,bb as G,bc as Z,c7 as q}from"./index.aa5c3cc6.js";import{o as z}from"./index.8943b213.js";import{D as E}from"./DeletePopover.15533367.js";const J=t=>{const a=v(),{to:i}=k(),[d,u]=f(()=>l.post(`/admin/storage/delete?id=${t.storage.id}`)),[h,s]=f(()=>l.post(`/admin/storage/${t.storage.disabled?"enable":"disable"}?id=${t.storage.id}`));return e(C,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return B("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${L()}`}},get children(){return[e(c,{spacing:"$2",get children(){return[e(S,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),e(T,{colorScheme:"info",get children(){return a(`drivers.drivers.${t.storage.driver}`)}})]}}),e(c,{get children(){return[e(S,{get children(){return[M(()=>a("storages.common.status")),":\xA0"]}}),e(O,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),e(S,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),e(c,{spacing:"$2",get children(){return[e(o,{onClick:()=>{i(`/@manage/storages/edit/${t.storage.id}`)},get children(){return a("global.edit")}}),e(o,{get loading(){return h()},get colorScheme(){return t.storage.disabled?"success":"warning"},onClick:async()=>{const n=await s();j(n,()=>{t.refresh()})},get children(){return a(`global.${t.storage.disabled?"enable":"disable"}`)}}),e(E,{get name(){return t.storage.mount_path},get loading(){return d()},onClick:async()=>{const n=await u();g(n,()=>{p.success(a("global.delete_success")),t.refresh()})}})]}})]}})},ee=()=>{const t=v();z("manage.sidemenu.storages");const{to:a}=k(),[i,d]=f(()=>l.get("/admin/storage/list")),[u,h]=$([]),s=async()=>{const r=await d();g(r,m=>h(m.content))},[n,x]=$([]),[b,_]=$([]);(async()=>{const r=await l.get("/admin/driver/names");g(r,m=>x(m))})(),s();const D=async()=>{const r=await l.post("/admin/storage/load_all");g(r,()=>{p.success(t("storages.other.start_load_success"))})},y=I(()=>u().filter(r=>b().length===0?!0:b().includes(r.driver)));return e(C,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(c,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:s,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{a("/@manage/storages/add")},get children(){return t("global.add")}}),e(o,{colorScheme:"warning",get loading(){return i()},onClick:D,get children(){return t("storages.other.load_all")}}),e(N,{get when(){return n().length>0},get children(){return e(P,{multiple:!0,get value(){return b()},onChange:_,get children(){return[e(R,{get children(){return[e(V,{get children(){return t("storages.other.filter_by_driver")}}),e(A,{}),e(F,{})]}}),e(H,{get children(){return e(W,{get children(){return e(w,{get each(){return n()},children:r=>e(X,{value:r,get children(){return[e(G,{get children(){return t(`drivers.drivers.${r}`)}}),e(Z,{})]}})})}})}})]}})}})]}}),e(q,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(w,{get each(){return y()},children:r=>e(J,{storage:r,refresh:s})})}})]}})};export{ee as default};
