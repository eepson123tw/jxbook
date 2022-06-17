import{b as s,t as f,o as n,F as l,g as v,i as I,j as L,k as b}from"./vue.esm-bundler.9f980739.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={props:{label:{type:String,required:!0,default:""}},setup(){}};function x(e,d,t,m,_,y){return n(),s("li",null,f(t.label),1)}var p=i(c,[["render",x],["__scopeId","data-v-10cd8f5e"]]);c.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}}]};const u={components:{ListItem:p},props:{list:{type:Array,required:!0,default:()=>[]}},setup(){}},U={class:"bg-red-800"},h=I(" \u7A7A\u7A7A\u5982\u4E5F ");function k(e,d,t,m,_,y){var o;const g=L("ListItem");return n(),s("ul",U,[t.list&&((o=t.list)==null?void 0:o.length)?(n(!0),s(l,{key:0},v(t.list,r=>(n(),b(g,{key:r,label:r},null,8,["label"]))),128)):(n(),s(l,{key:1},[h],64))])}var a=i(u,[["render",k],["__scopeId","data-v-3fccaaff"]]);u.__docgenInfo={exportName:"default",displayName:"ListUI",description:"",tags:{},props:[{name:"list",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}}]};var A={title:"Design/Atom/List",component:a,subcomponents:{ListItem:p},argTypes:{backgroundColor:{control:"color"},list:{type:{name:"Array",required:!0},description:"\u9663\u5217\u8CC7\u6599",table:{category:"list",subcategory:"Button colors"},control:{type:"array"}}},parameters:{storySource:{source:`// Hahatest.stories.js

// @ts-ignore
import ListUI from "./ListUI.vue";
// @ts-ignore
import ListItem from "./ListItem.vue";

export default {
  title: "Design/Atom/List", //\u9577\u51FA\u9801\u9762\u7D50\u69CB
  component: ListUI, //\u4F7F\u7528\u7684component template
  subcomponents: { ListItem },
  argTypes: {
    backgroundColor: { control: "color" },
    list: {
      type: { name: "Array", required: true },
      description: "\u9663\u5217\u8CC7\u6599",
      table: {
        //\u5EFA\u7ACB\u53EF\u6536\u7E2E\u7684\u6A23\u614B
        category: "list",
        //\u5B50\u5C64\u6536\u7E2E
        subcategory: "Button colors"
      },
      // defaultValue: "empty",
      control: {
        type: "array"
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: "\u5217\u8868\u7D44\u4EF6" //\u8986\u84CB\u9ED8\u8A8D\u7D44\u4EF6\u63CF\u8FF0\u3002
      }
    },
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
  components: { ListUI },
  setup() {
    return { args };
  },
  template: '<ListUI v-bind="args" />'
});

//\u{1F447} Each story then reuses that template
export const Empty = Template.bind({}); // javascript bind

Empty.args = { list: [] };

export const OneItem = args => ({
  components: { ListUI },
  setup() {
    //\u{1F447} The args will now be passed down to the template
    return { args };
  },
  template: '<ListUI v-bind="args"></ListUI>'
});

OneItem.args = {
  list: ["\u7B2C\u4E00\u7B46"]
};
`,locationsMap:{empty:{startLoc:{col:17,line:46},endLoc:{col:2,line:52},startBody:{col:17,line:46},endBody:{col:2,line:52}},"one-item":{startLoc:{col:23,line:59},endLoc:{col:2,line:66},startBody:{col:23,line:59},endBody:{col:2,line:66}}}},docs:{description:{component:"\u5217\u8868\u7D44\u4EF6"}},backgrounds:{values:[{name:"red",value:"#f00"},{name:"green",value:"#0f0"},{name:"blue",value:"#00f"}]}}};const B=e=>({components:{ListUI:a},setup(){return{args:e}},template:'<ListUI v-bind="args" />'}),E=B.bind({});E.args={list:[]};const T=e=>({components:{ListUI:a},setup(){return{args:e}},template:'<ListUI v-bind="args"></ListUI>'});T.args={list:["\u7B2C\u4E00\u7B46"]};const N=["Empty","OneItem"];export{E as Empty,T as OneItem,N as __namedExportsOrder,A as default};
//# sourceMappingURL=ListUI.stories.5cdd3b80.js.map
