var I=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,c=(e,o)=>{for(var t in o||(o={}))i.call(o,t)&&p(e,t,o[t]);if(r)for(var t of r(o))y.call(o,t)&&p(e,t,o[t]);return e},m=(e,o)=>b(e,f(o));var d=(e,o)=>{var t={};for(var a in e)i.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&r)for(var a of r(e))o.indexOf(a)<0&&y.call(e,a)&&(t[a]=e[a]);return t};import"./index.84b8e9a5.js";import{c as n,A as u,M as g,I as M,b as l}from"./Props.edf35332.js";import"./iframe.24ee6969.js";import"./string.bf3fd91c.js";const _={},T="wrapper";function x(t){var a=t,{components:e}=a,o=d(a,["components"]);return n(T,m(c(c({},_),o),{components:e,mdxType:"MDXLayout"}),n(g,{title:"Iconography",mdxType:"Meta"}),n("style",null,`
 .font{
  font-size:32px
 }
 .font-mid{
  font-size:45px
 }
 .font-big{
  font-size:44px
 }
  `),n("h1",null,"Iconography"),n(M,{mdxType:"IconGallery"},n(l,{name:"mobile",mdxType:"IconItem"},n("i",{class:"lab la-accessible-icon font"})),n(l,{name:"mobile",mdxType:"IconItem"},n("i",{class:"lab la-accessible-icon font-mid"})),n(l,{name:"mobile",mdxType:"IconItem"},n("i",{class:"lab la-accessible-icon font-big"}))))}x.isMDXComponent=!0;const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const s={title:"Iconography",includeStories:["__page"]},D={};s.parameters=s.parameters||{};s.parameters.docs=m(c({},s.parameters.docs||{}),{page:()=>n(u,{mdxStoryNameToKey:D,mdxComponentAnnotations:s},n(x,null))});const E=["__page"];export{E as __namedExportsOrder,h as __page,s as default};
//# sourceMappingURL=Iconography.stories.9df54fa7.js.map
