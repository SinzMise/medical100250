import{d as c,e as r,j as e,a1 as p,B as n,bl as u,cC as g,o as a,cB as f}from"./index.fc57db4e.js";import{a as d}from"./useUtil.74d0d392.js";import{F as h}from"./File.644b3fbe.js";import"./api.4d6ec99d.js";import"./icon.2562458b.js";import"./index.288eef4d.js";import"./index.7f596840.js";import"./Layout.cd0e36c9.js";import"./EncodingSelect.d8c06668.js";import"./index.3677c724.js";import"./FolderTree.4028ea48.js";const U=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{U as default};
