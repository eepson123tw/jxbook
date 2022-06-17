var u=Object.defineProperty,h=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(o,e,s)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,i=(o,e)=>{for(var s in e||(e={}))m.call(e,s)&&p(o,s,e[s]);if(n)for(var s of n(e))d.call(e,s)&&p(o,s,e[s]);return o},l=(o,e)=>h(o,k(e));var c=(o,e)=>{var s={};for(var a in o)m.call(o,a)&&e.indexOf(a)<0&&(s[a]=o[a]);if(o!=null&&n)for(var a of n(o))e.indexOf(a)<0&&d.call(o,a)&&(s[a]=o[a]);return s};import"./index.84b8e9a5.js";import{c as t,A as b,M as x}from"./Props.edf35332.js";import"./iframe.24ee6969.js";import"./string.bf3fd91c.js";var f="/jxbook/assets/code-brackets.9ef6443e.svg",y="/jxbook/assets/colors.ac9401f3.svg",w="/jxbook/assets/comments.f15a6837.svg",v="/jxbook/assets/direction.94a9917f.svg",N="/jxbook/assets/flow.275142c6.svg",j="/jxbook/assets/plugin.57148314.svg",_="/jxbook/assets/repo.fb4ece47.svg",C="/jxbook/assets/stackalt.2ad81543.svg";const D={},S="wrapper";function g(s){var a=s,{components:o}=a,e=c(a,["components"]);return t(S,l(i(i({},D),e),{components:o,mdxType:"MDXLayout"}),t(x,{title:"Introduction",mdxType:"Meta"}),t("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `),t("h1",null,"Welcome to JxBook"),t("p",null,`JxBook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:j,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:C,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:y,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:N,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:_,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:v,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:f,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:w,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in ",t("code",null,"stories/Introduction.stories.mdx")))}g.isMDXComponent=!0;const M=()=>{throw new Error("Docs-only story")};M.parameters={docsOnly:!0};const r={title:"Introduction",includeStories:["__page"]},B={};r.parameters=r.parameters||{};r.parameters.docs=l(i({},r.parameters.docs||{}),{page:()=>t(b,{mdxStoryNameToKey:B,mdxComponentAnnotations:r},t(g,null))});const F=["__page"];export{F as __namedExportsOrder,M as __page,r as default};
//# sourceMappingURL=Introduction.stories.e6c0549c.js.map
