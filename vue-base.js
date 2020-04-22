module.exports = {
  parser: ["vue-eslint-parser"],
  plugins: ["vue"],
  extends: ["plugin:vue/recommended"],
  rules: {
    "vue/component-tags-order": [
      "error",
      { order: ["template", "script", "style"] },
    ],
    "vue/camelcase": "error",
    "vue/component-name-in-template-casing": "error",
    "vue/no-boolean-default": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-static-inline-styles": "error",
    "vue/no-template-target-blank": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/require-direct-export": "error",
    "vue/v-on-function-call": ["error", "never"],
  },
};
