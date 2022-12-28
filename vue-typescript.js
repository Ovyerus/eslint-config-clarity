// eslint-disable-next-line
require("./patch");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/vue-base"],
  parser: "vue-eslint-parser",
  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
  },
  rules: {
    // This gets caught by Typescript
    "vue/no-undef-properties": "off",
  },
};
