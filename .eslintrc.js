const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "no-console": isProduction ? 2 : 1,
    "no-var": "error",
    "vue/no-unused-components": isProduction ? 2 : 1,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": isProduction
      ? 2
      : ["warn", { args: "none" }],
    "import/no-unresolved": 0,
    semi: "off",
    "array-bracket-newline": 0,
    camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
    "padded-blocks": ["error", "never"],
    "no-extra-parens": 0,
    "import/no-cycle": 0,
    "array-bracket-spacing": ["error", "never"],
    "no-negated-condition": 0,
    "unicorn/number-literal-case": 0,
    "require-await": isProduction ? 2 : 1,
    // 'no-hello-in-identifier': 2
  },
};
