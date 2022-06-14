// Hahatest.stories.js

import Hahatest from "./Hahatest.vue";
import { screen, userEvent } from "@storybook/testing-library";

export default {
  title: "Design/Atom/testCom", //長出頁面結構
  component: Hahatest, //使用的component template
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

//👇 Each story then reuses that template
export const Primary = Template.bind({}); // javascript bind

Primary.args = { backgroundColor: "#ff0", label: "HAHAHA" };

// Primary.storyName = "I am the primary"; //重新命名

const Template2 = args => ({
  components: { Hahatest },
  setup() {
    return { args };
  },
  template: `
  <Hahatest v-bind="args">
    <template v-slot:footer>
      <footer v-if="args.footer" v-html="args.footer" />
    </template>
  </Hahatest>`
});

export const CustomFooter = Template2.bind({});
CustomFooter.args = {
  label: "HAHA",
  footer: `<a href="https://storybook.js.org/">Built with Storybook</a>
 `
};
CustomFooter.play = async () => {
  const emailInput = screen.getByLabelText("email", {
    selector: "input"
  });
  await userEvent.type(emailInput, "example-email@email.com", {
    delay: 100
  });
};
