// eslint-disable-next-line
require("./patch");

module.exports = {
  extends: ["clarity/base", "clarity/typescript-base", "clarity/react-base"],
  env: { browser: true },
};
