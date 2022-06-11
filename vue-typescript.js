// eslint-disable-next-line
require("./patch");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/vue-base"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },
  rules: {
    // This gets caught by Typescript
    "vue/no-undef-properties": "off",
  },
};
