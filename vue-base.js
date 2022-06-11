const { vue3Rules } = require("./util/vue");

module.exports = {
  extends: "plugin:vue/base",
  rules: {
    // Essential
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-child-content": "error",
    "vue/no-computed-properties-in-data": "error",
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": "error",
    "vue/no-ref-as-operand": "error",
    "vue/no-reserved-component-names": [
      "error",
      { disallowVue3BuiltInComponents: true },
    ],
    "vue/no-reserved-keys": "error",
    "vue/no-reserved-props": "error",
    "vue/no-setup-props-destructure": "error",
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "warn",
    "vue/no-template-key": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "warn",
    "vue/no-use-computed-property-like-method": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/no-useless-template-attributes": "error",
    "vue/no-v-text-v-html-on-component": "error",
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/return-in-emits-validator": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-attribute-name": "error",
    "vue/valid-define-emits": "error",
    "vue/valid-define-props": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",

    // Strongly Recommended
    "vue/attribute-hyphenation": "error",
    "vue/component-definition-name-casing": "error",
    "vue/no-template-shadow": "warn",
    "vue/one-component-per-file": "error",
    "vue/prop-name-casing": "error",
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/v-bind-style": "error",
    "vue/v-on-style": "error",
    "vue/v-slot-style": "error",

    // Recommended
    "vue/attributes-order": "error",
    "vue/component-tags-order": [
      "error",
      {
        order: [
          "template",
          "script:not([setup])",
          "script[setup]",
          "style:not([scoped])",
          "style[scoped]",
        ],
      },
    ],
    "vue/no-lone-template": "error",
    "vue/no-multiple-slot-args": "error",
    "vue/no-v-html": "error",
    "vue/order-in-components": "error",
    "vue/this-in-template": "error",

    // Uncategorised
    "vue/component-api-style": ["error", ["script-setup", "composition"]],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
    "vue/component-options-name-casing": "error",
    "vue/custom-event-name-casing": "error",
    "vue/html-button-has-type": "warn",
    "vue/html-comment-content-newline": "error",
    "vue/html-comment-content-spacing": "error",
    "vue/html-comment-indent": "error",
    "vue/match-component-file-name": [
      "error",
      { extensions: ["js", "jsx", "ts", "tsx", "vue"], shouldMatchCase: false },
    ],
    "vue/match-component-import-name": "warn",
    "vue/no-empty-component-block": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-potential-component-option-typo": [
      "error",
      { presets: ["vue", "vue-router", "nuxt"] },
    ],
    "vue/no-static-inline-styles": "warn",
    "vue/no-template-target-blank": "error",
    "vue/no-this-in-before-route-enter": "error",
    "vue/no-undef-properties": "error",
    "vue/no-unused-properties": "error",
    "vue/no-unused-refs": "error",
    "vue/no-useless-mustaches": "error",
    "vue/no-useless-v-bind": "error",
    "vue/no-v-text": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/prefer-prop-type-boolean-first": "error",
    "vue/prefer-separate-static-class": "error",
    "vue/prefer-true-attribute-shorthand": "error",
    "vue/require-direct-export": "error",
    "vue/v-for-delimiter-style": "error",
    ...vue3Rules,
  },
};
