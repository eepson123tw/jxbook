module.exports = {
  printWidth: 120, //一行的字符數，如果超過會進行換行，默認為80
  tabWidth: 2, //一個tab代表幾個空格數
  useTabs: false, //是否使用tab進行縮進，默認為false，表示用空格進行縮減
  singleQuote: false, //字符串是否使用單引號，默認為false，使用雙引號
  semi: true, //行位是否使用分號，默認為true
  trailingComma: "none", // 選項：none|es5|all， 在物件或陣列最後一個元素後面是否加逗號（在ES5中加尾逗號）
  bracketSpacing: true, // 物件，陣列及括號與文字之間加空格 "{ foo: bar }"
  jsxSingleQuote: true, // 在jsx使用單引號而不是雙引號
  arrowParens: "avoid" // 只有單一參數時，省略括號
};
