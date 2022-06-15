import "tailwindcss/tailwind.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  options: {
    storySort: {
      order: ["Introduction", "Design", "Example"]
    }
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    // Opt-out of inline rendering
    // inlineStories: false docs顯示方式
  }
};
export const globalTypes = {
  theme: {
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark", "mid"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true
    }
  }
};
