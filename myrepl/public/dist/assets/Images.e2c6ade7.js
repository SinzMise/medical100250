import{j as e,a8 as c,ai as x,e as p,w as h,aF as $,X as b,aE as k,aH as I,ct as u,al as _,r as o,bI as C,ag as v,ah as y,d as M,x as g,o as d,c7 as E,l as m,br as L,bs as S}from"./index.aa5c3cc6.js";import{b as F}from"./Folder.ad2a8d85.js";import{a as G,M as H}from"./Layout.04c532e6.js";import{c as O,a as z}from"./useUtil.4e55fdda.js";import{I as A}from"./ImageWithError.17b65078.js";import{O as P,g as T}from"./icon.46ac4302.js";import{G as W}from"./GridItem.da3c4270.js";import"./Paginator.1ae8bee7.js";import"./index.ed532f77.js";import"./index.8943b213.js";import"./api.25b7d67a.js";import"./Markdown.ed3209a8.js";import"./index.35d8322d.js";import"./FolderTree.c0c53743.js";const B=t=>{const{isHide:i}=O();if(i(t.obj)||t.obj.type!==P.IMAGE)return null;const{setPathAs:n}=G(),r=e(x,{get color(){return c()},boxSize:"$12",get as(){return T(t.obj)}}),[a,l]=p(!1),f=h(()=>$()&&(a()||t.obj.selected)),{show:w}=F({id:1}),{rawLink:j}=z();return e(H.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return e(b,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${c()}`}},onMouseEnter:()=>{l(!0),n(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:()=>{l(!1)},onContextMenu:s=>{k(()=>{I(!1),u(t.index,!0,!0)}),w(s,{props:t.obj})},get children(){return e(_,{w:"$full",pos:"relative",get children(){return[e(o,{get when(){return f()},get children(){return e(C,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:s=>{u(t.index,s.target.checked)}})}}),e(A,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return e(v,{size:"lg"})},fallbackErr:r,get src(){return j(t.obj)},loading:"lazy",onClick:()=>{y.emit("gallery",t.obj.name)}})]}})}})}})},re=t=>{const i=M(),n=h(()=>e(E,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return e(g,{get each(){return d.objs.filter(r=>r.is_dir)},children:(r,a)=>e(W,{obj:r,get index(){return a()}})})}}));return e(b,{spacing:"$2",w:"$full",get children(){return[e(o,{get when(){return m.show_folder_in_image_view==="top"},get children(){return n()}}),e(o,{get when(){return t.images.length>0},get fallback(){return e(L,{m:"$2",get children(){return i("home.no_images")}})},get children(){return e(S,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return e(g,{get each(){return d.objs},children:(r,a)=>e(B,{obj:r,get index(){return a()}})})}})}}),e(o,{get when(){return m.show_folder_in_image_view==="bottom"},get children(){return n()}})]}})};export{re as default};
