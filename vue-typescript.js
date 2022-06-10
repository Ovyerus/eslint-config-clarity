// eslint-disable-next-line
require("./patch");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/vue-base"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
