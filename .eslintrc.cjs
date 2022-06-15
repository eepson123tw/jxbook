/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:storybook/recommended"
  ],
  env: {
    node: true,
    "vue/setup-compiler-macros": true
  },
  rules: {
    "vue/multi-word-component-names": [
      "warn",
      {
        ignores: []
      }
    ]
  }
};
