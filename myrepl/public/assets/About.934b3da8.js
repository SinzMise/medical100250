import{d as a,Y as r,j as t,$ as o}from"./index.44827053.js";import{o as n}from"./index.5469abef.js";import{M as s}from"./EncodingSelect.ba94388f.js";import"./useUtil.828c8880.js";import"./api.e1d4f6e5.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),l=()=>{a(),n("manage.sidemenu.about");const[e]=r(i);return t(o,{get loading(){return e.loading},get children(){return t(s,{get children(){return e()}})}})};export{l as default};
