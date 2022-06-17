var l=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&r(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&r(t,n,e[n]);return t};import{M as s}from"./Header.c16d4b8e.js";import"./Button.83653ba1.js";import"./vue.esm-bundler.9f980739.js";import"./plugin-vue_export-helper.21dcd24c.js";var b={title:"Example/Header",component:s,parameters:{storySource:{source:`import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}},"logged-out":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}}}},layout:"fullscreen"}};const d=t=>({components:{MyHeader:s},setup(){return a({},t)},template:'<my-header :user="user" />'}),u=d.bind({});u.args={user:{name:"Jane Doe"}};const m=d.bind({});m.args={user:null};const f=["LoggedIn","LoggedOut"];export{u as LoggedIn,m as LoggedOut,f as __namedExportsOrder,b as default};
//# sourceMappingURL=Header.stories.efdea225.js.map
