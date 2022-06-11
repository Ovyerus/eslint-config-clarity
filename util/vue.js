/** List of rules to only enable for Vue 3 */
exports.vue3Rules = {
  // Essential
  "vue/no-deprecated-data-object-declaration": "error",
  "vue/no-deprecated-destroyed-lifecycle": "error",
  "vue/no-deprecated-dollar-listeners-api": "error",
  "vue/no-deprecated-dollar-scopedslots-api": "error",
  "vue/no-deprecated-events-api": "error",
  "vue/no-deprecated-filter": "error",
  "vue/no-deprecated-functional-template": "error",
  "vue/no-deprecated-html-element-is": "error",
  "vue/no-deprecated-inline-template": "error",
  "vue/no-deprecated-props-default-this": "error",
  "vue/no-deprecated-router-link-tag-prop": "error",
  "vue/no-deprecated-v-bind-sync": "error",
  "vue/no-deprecated-v-is": "error",
  "vue/no-deprecated-v-on-native-modifier": "error",
  "vue/no-deprecated-v-on-number-modifiers": "error",
  "vue/no-deprecated-vue-config-keycodes": "error",
  "vue/no-expose-after-await": "error",
  "vue/no-lifecycle-after-await": "error",
  "vue/no-watch-after-await": "error",
  "vue/prefer-import-from-vue": "error",
  "vue/no-v-for-template-key-on-child": "error",
  "vue/require-slots-as-functions": "error",
  "vue/require-toggle-inside-transition": "error",
  "vue/valid-v-is": "error",
  "vue/valid-v-memo": "error",

  // Strongly Recommended
  "vue/require-explicit-emits": "error",
  "vue/v-on-event-hyphenation": ["error", "always", { autofix: true }],

  // Other
  "vue/define-macros-order": "error",
  "vue/no-duplicate-attr-inheritance": "error",
  "vue/require-expose": "error",
};
