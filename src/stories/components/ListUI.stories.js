// Hahatest.stories.js

// @ts-ignore
import ListUI from "./ListUI.vue";
// @ts-ignore
import ListItem from "./ListItem.vue";

export default {
  title: "Design/Atom/List", //長出頁面結構
  component: ListUI, //使用的component template
  subcomponents: { ListItem },
  argTypes: {
    backgroundColor: { control: "color" },
    list: {
      type: { name: "Array", required: true },
      description: "陣列資料",
      table: {
        //建立可收縮的樣態
        category: "list",
        //子層收縮
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
        component: "列表組件" //覆蓋默認組件描述。
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

//👇 Each story then reuses that template
export const Empty = Template.bind({}); // javascript bind

Empty.args = { list: [] };

export const OneItem = args => ({
  components: { ListUI },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ListUI v-bind="args"></ListUI>'
});

OneItem.args = {
  list: ["第一筆"]
};
