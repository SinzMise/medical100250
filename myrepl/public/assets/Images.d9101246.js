import{e,a3 as c,ad as j,c as x,k as h,aA as $,V as b,az as k,aC as _,cv as u,ag as C,S as o,bJ as I,ab as v,ac as y,u as M,m as g,N as m,c9 as S,l as d,bs as L,bt as z}from"./index.70e78c9e.js";import{b as A}from"./Folder.ec5cdabd.js";import{u as E}from"./index.354acf28.js";import{d as G,a as O}from"./useUtil.07cc3c78.js";import{I as F}from"./ImageWithError.b28a6244.js";import{O as H,g as P}from"./icon.6bcc6818.js";import{M as T}from"./Layout.6e39c096.js";import{G as V}from"./GridItem.8243bba4.js";import"./video_box.632a71fe.js";import"./index.15f6370b.js";import"./Paginator.371230ed.js";import"./index.72beae5f.js";import"./api.7b052662.js";import"./EncodingSelect.f0c3667d.js";import"./FolderTree.81fe5fa5.js";const W=t=>{const{isHide:i}=G();if(i(t.obj)||t.obj.type!==H.IMAGE)return null;const{setPathAs:n}=E(),r=e(j,{get color(){return c()},boxSize:"$12",get as(){return P(t.obj)}}),[a,l]=x(!1),f=h(()=>$()&&(a()||t.obj.selected)),{show:w}=A({id:1}),{rawLink:p}=O();return e(T.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return e(b,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${c()}`}},onMouseEnter:()=>{l(!0),n(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:()=>{l(!1)},onContextMenu:s=>{k(()=>{_(!1),u(t.index,!0,!0)}),w(s,{props:t.obj})},get children(){return e(C,{w:"$full",pos:"relative",get children(){return[e(o,{get when(){return f()},get children(){return e(I,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:s=>{u(t.index,s.target.checked)}})}}),e(F,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return e(v,{size:"lg"})},fallbackErr:r,get src(){return p(t.obj)},loading:"lazy",onClick:()=>{y.emit("gallery",t.obj.name)}})]}})}})}})},ae=t=>{const i=M(),n=h(()=>e(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return e(g,{get each(){return m.objs.filter(r=>r.is_dir)},children:(r,a)=>e(V,{obj:r,get index(){return a()}})})}}));return e(b,{spacing:"$2",w:"$full",get children(){return[e(o,{get when(){return d.show_folder_in_image_view==="top"},get children(){return n()}}),e(o,{get when(){return t.images.length>0},get fallback(){return e(L,{m:"$2",get children(){return i("home.no_images")}})},get children(){return e(z,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return e(g,{get each(){return m.objs},children:(r,a)=>e(W,{obj:r,get index(){return a()}})})}})}}),e(o,{get when(){return d.show_folder_in_image_view==="bottom"},get children(){return n()}})]}})};export{ae as default};
