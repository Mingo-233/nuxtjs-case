const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    // "@nuxtjs/eslint-config-typescript",
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // quotes: [2, "single", "avoid-escape"], // 引号风格
    'no-unused-vars': 1, // 不能有声明后未被使用的变量或参数
    'no-console': isProduction ? 2 : 1,
    'no-var': 'error',
    'vue/no-unused-components': isProduction ? 2 : 1,
    '@typescript-eslint/no-unused-vars': isProduction ? 2 : ['warn', { args: 'none' }],
    'import/no-unresolved': 0,
    semi: 'off',
    'array-bracket-newline': 0,
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'padded-blocks': ['error', 'never'],
    'no-extra-parens': 0,
    'import/no-cycle': 0,
    'array-bracket-spacing': ['error', 'never'],
    'no-negated-condition': 0,
    'unicorn/number-literal-case': 0,
    'require-await': isProduction ? 2 : 1,
  },
};
