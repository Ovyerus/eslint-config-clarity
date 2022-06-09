// eslint-disable-next-line
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/vue-base"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
