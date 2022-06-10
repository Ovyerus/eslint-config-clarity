// eslint-disable-next-line
require("./patch");
const { vue3Rules } = require("./util/vue");

module.exports = {
  extends: ["clarity/base", "clarity/vue-base"],
  rules: {
    "vue/component-api-style": ["error", ["options", "composition-vue2"]],
    "vue/no-custom-modifiers-on-v-model": "warn",
    "vue/no-multiple-template-root": "error",
    "vue/no-reserved-component-names": [
      "error",
      { disallowVueBuiltInComponents: true },
    ],
    "vue/no-unsupported-features": ["error", { version: "^2.6.0" }],
    "vue/no-v-for-template-key": "error",
    "vue/no-v-model-argument": "error",
    "vue/valid-model-definition": "error",
    "vue/valid-v-bind-sync": "error",

    // Force turn off Vue 3 rules
    ...Object.fromEntries(
      Object.entries(vue3Rules).map(([key]) => [key, "off"])
    ),
  },
};
