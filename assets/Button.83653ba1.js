import{r as s,a as r,b as l,t as u,n as m,d as c,o as b}from"./vue.esm-bundler.9f980739.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const n={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(o){return["small","medium","large"].indexOf(o)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(o,{emit:t}){return o=s(o),{classes:r(()=>({"storybook-button":!0,"storybook-button--primary":o.primary,"storybook-button--secondary":!o.primary,[`storybook-button--${o.size||"medium"}`]:!0})),style:r(()=>({backgroundColor:o.backgroundColor})),onClick(){t("click")}}}};function y(o,t,a,e,p,f){return b(),l("button",{type:"button",class:m(e.classes),onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i)),style:c(e.style)},u(a.label),7)}var x=d(n,[["render",y]]);n.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};export{x as M};
//# sourceMappingURL=Button.83653ba1.js.map