// eslint-disable-next-line
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/vue-base"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
