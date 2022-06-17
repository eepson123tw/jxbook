import{r as m,a as o,b as i,e as t,t as p,d as c,f as u,F as d,o as g}from"./vue.esm-bundler.9f980739.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{s as f,u as b}from"./index.fd4c9e8b.js";import"./iframe.24ee6969.js";import"./instrumenter.a58ba764.js";const n={name:"haha-test",props:{label:{type:String,required:!0},backgroundColor:{type:String},footer:{type:String}},setup(e){return e=m(e),{classes:o(()=>({})),style:o(()=>({backgroundColor:e.backgroundColor}))}}},h=t("label",{for:"email"},"email",-1),v=t("input",{type:"email",name:"email",id:"email"},null,-1);function H(e,A,s,l,x,B){return g(),i(d,null,[t("div",{style:c(l.style)},p(s.label),5),u(e.$slots,"footer"),h,v],64)}var a=y(n,[["render",H]]);n.__docgenInfo={displayName:"haha-test",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"backgroundColor",type:{name:"string"}},{name:"footer",type:{name:"string"}}],slots:[{name:"footer"}]};var I={title:"Design/Atom/testCom",component:a,argTypes:{backgroundColor:{control:"color"}},args:{primary:!0},parameters:{storySource:{source:`// Hahatest.stories.js

// @ts-ignore
import Hahatest from "./Hahatest.vue";
import { screen, userEvent } from "@storybook/testing-library";

export default {
  title: "Design/Atom/testCom", //\u9577\u51FA\u9801\u9762\u7D50\u69CB
  component: Hahatest, //\u4F7F\u7528\u7684component template
  argTypes: {
    backgroundColor: { control: "color" }
  },
  args: {
    primary: true
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" }
      ]
    }
  }
  // decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })]
};

const Template = args => ({
  components: { Hahatest },
  setup() {
    return { args };
  },
  template: '<Hahatest v-bind="args" />'
});

//\u{1F447} Each story then reuses that template
export const Primary = Template.bind({}); // javascript bind

Primary.args = { backgroundColor: "#ff0", label: "HAHAHA" };

// Primary.storyName = "I am the primary"; //\u91CD\u65B0\u547D\u540D

const Template2 = args => ({
  components: { Hahatest },
  setup() {
    return { args };
  },
  template: \`
  <Hahatest v-bind="args">
    <template v-slot:footer>
      <footer v-if="args.footer" v-html="args.footer" />
    </template>
  </Hahatest>\`
});

export const CustomFooter = Template2.bind({});
CustomFooter.args = {
  label: "HAHA",
  footer: \`<a href="https://storybook.js.org/">Built with Storybook</a>
 \`
};
CustomFooter.play = async () => {
  const emailInput = screen.getByLabelText("email", {
    selector: "input"
  });
  await userEvent.type(emailInput, "example-email@email.com", {
    delay: 100
  });
};
`,locationsMap:{primary:{startLoc:{col:17,line:28},endLoc:{col:2,line:34},startBody:{col:17,line:28},endBody:{col:2,line:34}},"custom-footer":{startLoc:{col:18,line:43},endLoc:{col:2,line:54},startBody:{col:18,line:43},endBody:{col:2,line:54}}}},backgrounds:{values:[{name:"red",value:"#f00"},{name:"green",value:"#0f0"},{name:"blue",value:"#00f"}]}}};const k=e=>({components:{Hahatest:a},setup(){return{args:e}},template:'<Hahatest v-bind="args" />'}),_=k.bind({});_.args={backgroundColor:"#ff0",label:"HAHAHA"};const C=e=>({components:{Hahatest:a},setup(){return{args:e}},template:`
  <Hahatest v-bind="args">
    <template v-slot:footer>
      <footer v-if="args.footer" v-html="args.footer" />
    </template>
  </Hahatest>`}),r=C.bind({});r.args={label:"HAHA",footer:`<a href="https://storybook.js.org/">Built with Storybook</a>
 `};r.play=async()=>{const e=f.getByLabelText("email",{selector:"input"});await b.type(e,"example-email@email.com",{delay:100})};const P=["Primary","CustomFooter"];export{r as CustomFooter,_ as Primary,P as __namedExportsOrder,I as default};
//# sourceMappingURL=HahaTest.stories.fb690239.js.map
