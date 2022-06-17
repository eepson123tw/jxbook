import{M as o}from"./Button.83653ba1.js";import"./vue.esm-bundler.9f980739.js";import"./plugin-vue_export-helper.21dcd24c.js";var d={parameters:{storySource:{source:`import MyButton from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {
      action: "clicked"
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    }
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" @onClick="onClick" />'
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
`,locationsMap:{primary:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}},secondary:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}},large:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}},small:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}}}}},title:"Example/Button",component:o,argTypes:{backgroundColor:{control:"color"},onClick:{action:"clicked"},size:{control:{type:"select"},options:["small","medium","large"]}}};const n=t=>({components:{MyButton:o},setup(){return{args:t}},template:'<my-button v-bind="args" @onClick="onClick" />'}),e=n.bind({});e.args={primary:!0,label:"Button"};const r=n.bind({});r.args={label:"Button"};const l=n.bind({});l.args={size:"large",label:"Button"};const a=n.bind({});a.args={size:"small",label:"Button"};const p=["Primary","Secondary","Large","Small"];export{l as Large,e as Primary,r as Secondary,a as Small,p as __namedExportsOrder,d as default};
//# sourceMappingURL=Button.stories.41533042.js.map
