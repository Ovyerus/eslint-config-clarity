module.exports = {
  extends: "plugin:vue/base",
  rules: {
    // Essential
    "vue/multi-word-component-names": "warn",
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-child-content": "error",
    "vue/no-computed-properties-in-data": "error",
    // "vue/no-custom-modifiers-on-v-model": "warn", vue 2
    "vue/no-deprecated-data-object-declaration": "error", // vue 3
    "vue/no-deprecated-destroyed-lifecycle": "error", // vue 3
    "vue/no-deprecated-dollar-listeners-api": "error", // vue 3
    "vue/no-deprecated-dollar-scopedslots-api": "error", // vue 3
    "vue/no-deprecated-events-api": "error", // vue 3
    "vue/no-deprecated-filter": "error", // vue 3
    "vue/no-deprecated-functional-template": "error", // vue 3
    "vue/no-deprecated-html-element-is": "error", // vue 3
    "vue/no-deprecated-inline-template": "error", // vue 3
    "vue/no-deprecated-props-default-this": "error", // vue 3
    "vue/no-deprecated-router-link-tag-prop": "error", // vue 3
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-deprecated-v-bind-sync": "error", // vue 3
    "vue/no-deprecated-v-is": "error", // vue 3
    "vue/no-deprecated-v-on-native-modifier": "error", // vue 3
    "vue/no-deprecated-v-on-number-modifiers": "error", // vue 3
    "vue/no-deprecated-vue-config-keycodes": "error", // vue 3
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-expose-after-await": "error", // vue 3
    "vue/no-lifecycle-after-await": "error", // vue 3
    // "vue/no-multiple-template-root": "error", // vue 2
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": "error",
    "vue/no-ref-as-operand": "error",
    // maybe enable options
    "vue/no-reserved-component-names": "error",
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
    "vue/no-v-for-template-key-on-child": "error", // vue 3
    // "vue/no-v-for-template-key": "error", // vue 2
    // "vue/no-v-model-argument": "error", // vue 2
    "vue/no-v-text-v-html-on-component": "error",
    "vue/no-watch-after-await": "error", // vue 3
    "vue/prefer-import-from-vue": "error", // vue 3
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-slots-as-functions": "error", // vue 3
    "vue/require-toggle-inside-transition": "error", // vue 3
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/return-in-emits-validator": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-attribute-name": "error",
    "vue/valid-define-emits": "error",
    "vue/valid-define-props": "error",
    // "vue/valid-model-definition": "error", // vue 2
    "vue/valid-next-tick": "error",
    "vue/valid-template-root": "error",
    // "vue/valid-v-bind-sync": "error", // vue 3
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-is": "error", // vue 3
    "vue/valid-v-memo": "error", // vue 3
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",

    // Strongly Recommended
    "vue/attribute-hypenation": "error",
    "vue/component-definition-name-casing": "error",
    "vue/no-template-shadow": "warn",
    "vue/one-component-per-file": "error",
    "vue/prop-name-casing": "error",
    "vue/require-default-prop": "error",
    "vue/require-explicit-emits": "error", // vue 3
    "vue/require-prop-types": "error",
    "vue/v-bind-style": "error",
    "vue/v-on-event-hyphenation": ["error", "always", { autofix: true }], // vue 3
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
    "vue/component-api-style": ["error", ["script-setup", "composition"]], // todo: change in vue 2
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
    "vue/component-options-name-casing": "error",
    "vue/custom-event-name-casing": "error",
    "vue/define-macros-order": "error", // vue 3
    "vue/html-button-has-type": "warn",
    "vue/html-comment-content-newline": "error",
    "vue/html-comment-content-spacing": "error",
    "vue/html-comment-indent": "error",
    "vue/match-component-file-name": [
      "error",
      { extensions: ["js", "jsx", "ts", "tsx", "vue"], shouldMatchCase: false },
    ],
    "vue/match-component-import-name": "warn",
    "vue/no-duplicate-attr-inheritance": "error", // vue 3
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
    // vue/no-unsupported-features for vue 2
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
    "vue/require-expose": "error", // vue 3
    "vue/v-for-delimiter-style": "error",
  },
};
