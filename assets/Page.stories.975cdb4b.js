import{w as c,u as l}from"./index.fd4c9e8b.js";import{M as g}from"./Header.c16d4b8e.js";import{b as d,p as m,m as u,j as h,o as y}from"./vue.esm-bundler.9f980739.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"./iframe.24ee6969.js";import"./instrumenter.a58ba764.js";import"./Button.83653ba1.js";const n={name:"my-page",components:{MyHeader:g},data(){return{user:null}},methods:{onLogin(){this.user={name:"Jane Doe"}},onLogout(){this.user=null},onCreateAccount(){this.user={name:"Jane Doe"}}}},v=u('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function x(o,r,t,w,s,e){const p=h("my-header");return y(),d("article",null,[m(p,{user:s.user,onLogin:e.onLogin,onLogout:e.onLogout,onCreateAccount:e.onCreateAccount},null,8,["user","onLogin","onLogout","onCreateAccount"]),v])}var a=f(n,[["render",x]]);n.__docgenInfo={displayName:"my-page",exportName:"default",description:"",tags:{}};var P={title:"Example/Page",component:a,parameters:{storySource:{source:`import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyPage },

  // Here we define the \`template\`
  template: '<my-page />',
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
`,locationsMap:{"logged-out":{startLoc:{col:17,line:13},endLoc:{col:2,line:19},startBody:{col:17,line:13},endBody:{col:2,line:19}},"logged-in":{startLoc:{col:17,line:13},endLoc:{col:2,line:19},startBody:{col:17,line:13},endBody:{col:2,line:19}}}},layout:"fullscreen"}};const i=()=>({components:{MyPage:a},template:"<my-page />"}),S=i.bind({}),b=i.bind({});b.play=async({canvasElement:o})=>{const t=await c(o).getByRole("button",{name:/Log in/i});await l.click(t)};const z=["LoggedOut","LoggedIn"];export{b as LoggedIn,S as LoggedOut,z as __namedExportsOrder,P as default};
//# sourceMappingURL=Page.stories.975cdb4b.js.map
