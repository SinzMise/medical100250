import{e as t,m as L,V,k as y,Z as T,$ as w,br as u,K as z,J as x,a as f,u as _,L as M,w as W,v as C,S as p,ad as E,bs as h,c as U,bt as I,X as g,R as s,ah as D,A as n,C as r,bu as Y,bv as F,bw as H,ao as N,D as R,a2 as b,bx as j,by as X,n as q,aY as J,aQ as Q,aR as K,aS as Z,aT as G,aU as e1,ag as v,aW as O,aX as P,bz as t1,bA as n1,bB as r1}from"./index.2ea96c44.js";import{d as o1,e as a1,f as i1,g as s1,h as c1,i as l1,j as m1,k as u1,l as g1,m as d1,b as _1,n as h1,o as p1,c as E1}from"./index.3e839e3c.js";import{A as f1,d as I1,e as v1,f as $1,g as A1,h as S1,i as T1}from"./index.776b467d.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e))(i||{}),w1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(w1||{});const z1=e=>{const o=y(()=>{if(!T.is_admin(w())){if(e.role===void 0)return!1;if(e.role===u.GENERAL&&!T.is_general(w()))return!1}return!0});return t(x,{get fallback(){return t(b1,e)},get children(){return[t(z,{get when(){return!o()},children:null}),t(z,{get when(){return e.children},get children(){return t(L1,e)}})]}})},b1=e=>{const{pathname:o}=f(),a=_(),c=()=>o()===e.to;return t(f1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:M,get href(){return e.to},onClick:l=>{var S;if(k(),e.refresh){(S=l.stopPropagation)==null||S.call(l);let d=e.to;d.startsWith("http")||(d=W(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},L1=e=>{const{pathname:o}=f(),[a,c]=U(o().includes(e.to)),l=_();return t(s,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return l(e.title)}})]}}),t(E,{as:I1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(s,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(V,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(L,{get each(){return e.items},children:o=>t(z1,o)})}});function C1(e){return D({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function D1(e){return D({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const m=n(()=>r(()=>import("./Common.918912f2.js"),["assets/Common.918912f2.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/SettingItem.fbb2c6b4.js","assets/item_type.be442da4.js","assets/index.776b467d.js","assets/ResponsiveGrid.f2f899e4.js"])),A=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:u.GUEST,component:n(()=>r(()=>import("./Profile.0c88b3a4.js"),["assets/Profile.0c88b3a4.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/index.776b467d.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:i1,to:"/@manage/settings/site",component:()=>t(m,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:s1,to:"/@manage/settings/style",component:()=>t(m,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>t(m,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>t(m,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:Y,to:"/@manage/settings/sso",component:()=>t(m,{get group(){return i.SSO}})},{title:"manage.sidemenu.other",icon:m1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.786a006d.js"),["assets/Other.786a006d.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/useUtil.af7d4a0c.js","assets/api.bb9abe10.js","assets/SettingItem.fbb2c6b4.js","assets/item_type.be442da4.js","assets/index.776b467d.js"]))}]},{title:"manage.sidemenu.tasks",icon:D1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:u1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.4a0bb4a3.js"),["assets/Aria2.4a0bb4a3.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/Tasks.11299205.js","assets/Paginator.fd0c4c55.js","assets/index.776b467d.js"]))},{title:"manage.sidemenu.qbit",icon:v1,to:"/@manage/tasks/qbit",component:n(()=>r(()=>import("./Qbit.8ffefb15.js"),["assets/Qbit.8ffefb15.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/Tasks.11299205.js","assets/Paginator.fd0c4c55.js","assets/index.776b467d.js"]))},{title:"manage.sidemenu.upload",icon:g1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.13bf3803.js"),["assets/Upload.13bf3803.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/Tasks.11299205.js","assets/Paginator.fd0c4c55.js","assets/index.776b467d.js"]))},{title:"manage.sidemenu.copy",icon:F,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.47b65b55.js"),["assets/Copy.47b65b55.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/Tasks.11299205.js","assets/Paginator.fd0c4c55.js","assets/index.776b467d.js"]))}]},{title:"manage.sidemenu.users",icon:d1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.5ce43c5b.js"),["assets/Users.5ce43c5b.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/DeletePopover.548c3b68.js","assets/Wether.38d6017b.js"]))},{title:"manage.sidemenu.storages",icon:$1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.e7e027b7.js"),["assets/Storages.e7e027b7.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/DeletePopover.548c3b68.js"]))},{title:"manage.sidemenu.metas",icon:C1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.7e562511.js"),["assets/Metas.7e562511.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/DeletePopover.548c3b68.js","assets/Wether.38d6017b.js"]))},{title:"manage.sidemenu.indexes",icon:_1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.8c741b82.js"),["assets/indexes.8c741b82.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/api.bb9abe10.js","assets/Common.918912f2.js","assets/index.3e839e3c.js","assets/SettingItem.fbb2c6b4.js","assets/item_type.be442da4.js","assets/index.776b467d.js","assets/ResponsiveGrid.f2f899e4.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:A1,component:n(()=>r(()=>import("./backup-restore.f9443429.js"),["assets/backup-restore.f9443429.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js"]))},{title:"manage.sidemenu.about",icon:h1,to:"/@manage/about",role:u.GUEST,component:n(()=>r(()=>import("./About.cb0b5c8a.js"),["assets/About.cb0b5c8a.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/index.3e839e3c.js","assets/EncodingSelect.827c331f.js","assets/useUtil.af7d4a0c.js","assets/api.bb9abe10.js"]))},{title:"manage.sidemenu.docs",icon:S1,to:"https://alist.nn.ci",role:u.GUEST,external:!0},{title:"manage.sidemenu.home",icon:H,to:"/",role:u.GUEST,refresh:!0}],{isOpen:R1,onOpen:O1,onClose:k}=N(),P1=()=>{const e=_(),{to:o}=f();return t(s,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(b,{"aria-label":"menu",get icon(){return t(T1,{})},display:{"@sm":"none"},onClick:O1,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(b,{"aria-label":"logout",get icon(){return t(j,{})},onClick:()=>{X(),q.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(J,{get opened(){return R1()},placement:"left",onClose:k,get children(){return[t(Q,{}),t(K,{get children(){return[t(Z,{}),t(G,{color:"$info9",get children(){return e("manage.title")}}),t(e1,{get children(){return[t($,{items:A}),t(v,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}})]}})]}})]}})},k1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.957d95b3.js"),["assets/AddOrEdit.957d95b3.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f2f899e4.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.957d95b3.js"),["assets/AddOrEdit.957d95b3.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f2f899e4.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.2ab72af9.js"),["assets/AddOrEdit.2ab72af9.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/FolderTree.efac1cf1.js","assets/index.776b467d.js","assets/api.bb9abe10.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.2ab72af9.js"),["assets/AddOrEdit.2ab72af9.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/FolderTree.efac1cf1.js","assets/index.776b467d.js","assets/api.bb9abe10.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.30249260.js"),["assets/AddOrEdit.30249260.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/FolderTree.efac1cf1.js","assets/index.776b467d.js","assets/api.bb9abe10.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.30249260.js"),["assets/AddOrEdit.30249260.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css","assets/FolderTree.efac1cf1.js","assets/index.776b467d.js","assets/api.bb9abe10.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.1ba39d3c.js"),["assets/2fa.1ba39d3c.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.77dd277f.js"),["assets/Messenger.77dd277f.js","assets/index.2ea96c44.js","assets/index.d81a3e4b.css"]))}],B1=e=>(p1(e.title),t(v,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:t1(a.to,"/@manage"),component:a.component||(()=>t(B1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),V1=B(A).concat(k1),y1=()=>{const e=_();return E1(()=>e("manage.title")),t(s,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(P1,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(s,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:A}),t(v,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}}),t(s,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(n1,{get children(){return t(L,{each:V1,children:o=>t(r1,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},U1=Object.freeze(Object.defineProperty({__proto__:null,default:y1},Symbol.toStringTag,{value:"Module"}));export{w1 as F,i as G,U1 as i};
