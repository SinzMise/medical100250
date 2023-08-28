import{bo as o,b as c}from"./index.fc57db4e.js";const i=(s="/",t="")=>o.post("/fs/get",{path:s,password:t}),u=(s="/",t="",e=1,n=0,r=!1,a)=>o.post("/fs/list",{path:s,password:t,page:e,per_page:n,refresh:r},{cancelToken:a}),d=(s="/",t="",e=!1)=>o.post("/fs/dirs",{path:s,password:t,force_root:e}),m=s=>o.post("/fs/mkdir",{path:s}),y=(s,t)=>o.post("/fs/rename",{path:s,name:t}),v=(s,t)=>o.post("/fs/batch_rename",{src_dir:s,rename_objects:t}),h=(s,t,e)=>o.post("/fs/move",{src_dir:s,dst_dir:t,names:e}),l=(s,t)=>o.post("/fs/recursive_move",{src_dir:s,dst_dir:t}),b=(s,t,e)=>o.post("/fs/copy",{src_dir:s,dst_dir:t,names:e}),w=(s,t)=>o.post("/fs/remove",{dir:s,names:t}),x=s=>o.post("/fs/remove_empty_directory",{src_dir:s}),R=(s,t)=>o.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(s),Password:t}}),_=(s,t,e)=>o.post(`/fs/add_${e}`,{path:s,urls:t}),f=async(s,t=!0)=>{try{const e=await c.get(s,{responseType:"blob",params:t?{ts:new Date().getTime()}:void 0}),n=await e.data.arrayBuffer(),r=e.headers["content-type"];return{content:n,contentType:r}}catch(e){return t?await f(s,!1):{content:`Failed to fetch ${s}: ${e}`,contentType:""}}},T=async(s,t,e="",n=0,r=1,a=100)=>o.post("/fs/search",{parent:s,keywords:t,scope:n,page:r,per_page:a,password:e}),g=async(s=["/"],t=-1)=>o.post("/admin/index/build",{paths:s,max_depth:t}),D=async(s=[],t=-1)=>o.post("/admin/index/update",{paths:s,max_depth:t});export{u as a,f as b,b as c,h as d,w as e,i as f,y as g,R as h,m as i,l as j,x as k,v as l,d as m,T as n,_ as o,g as p,D as u};
