import{j as e,af as O,ai as _,a8 as T,o as i,X as l,br as y,aP as I,aj as h,bM as P,b_ as x,d as b,w as d,b$ as $,ae as k,a6 as L,B as m,aa as S,x as A,ab as D,c0 as f,r as g,a1 as v,bX as j,C as V,c1 as R,J as o,K as a,bY as C,c2 as M,e as z,aS as F,Q as B,R as W,ac as X}from"./index.aa5c3cc6.js";import{a as w,b as H}from"./useUtil.4e55fdda.js";import{g as U,O as u}from"./icon.46ac4302.js";import{n as G}from"./index.ed532f77.js";import{T as J}from"./Layout.04c532e6.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return U(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>$(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(k,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(K,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Y=r=>{const{currentObjLink:n}=w(),s=d(()=>f(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},q=r=>()=>e(Y,{scheme:r}),N=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.f8993571.js"),["assets/html.f8993571.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.210408eb.js"),["assets/aliyun_video.210408eb.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js","assets/video_box.4a15ce7e.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.95ac4fa6.js"),["assets/markdown.95ac4fa6.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/Markdown.ed3209a8.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.db26e5f7.js"),["assets/markdown_with_word_wrap.db26e5f7.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/Markdown.ed3209a8.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.272758f0.js"),["assets/url.272758f0.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.67f7dece.js"),["assets/text-editor.67f7dece.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.035421e9.js"),["assets/image.035421e9.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/ImageWithError.17b65078.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.00d944c8.js"),["assets/video.00d944c8.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js","assets/video_box.4a15ce7e.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.87c9bcbd.js"),["assets/audio.87c9bcbd.js","assets/audio.e5b5af14.css","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.990eeb6a.js"),["assets/ipa.990eeb6a.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.df9425d3.js"),["assets/plist.df9425d3.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css","assets/useUtil.4e55fdda.js","assets/api.25b7d67a.js","assets/icon.46ac4302.js","assets/index.8943b213.js","assets/index.ed532f77.js","assets/Layout.04c532e6.js","assets/Markdown.ed3209a8.js","assets/index.35d8322d.js","assets/FolderTree.c0c53743.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.17577e29.js"),["assets/aliyun_office.17577e29.js","assets/index.aa5c3cc6.js","assets/index.d81a3e4b.css"]))}],Z=r=>{const n=[];return N.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>Q),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ie as a};
