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
    // 'no-unused-vars': 0, // 不能有声明后未被使用的变量或参数
    // 'no-console': isProduction ? 2 : 1,
    // 'no-var': 'error',
    // 'vue/no-unused-components': isProduction ? 2 : 1,
    // '@typescript-eslint/no-unused-vars': isProduction ? 2 : ['warn', { args: 'none' }],
    // 'import/no-unresolved': 0,
    // semi: 'off',
    // 'array-bracket-newline': 0,
    // camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    // 'padded-blocks': ['error', 'never'], // 块语句内行首行尾是否要空行
    // 'no-extra-parens': 0, // 禁止非必要的括号
    // 'import/no-cycle': 0,
    // 'array-bracket-spacing': ['error', 'never'],
    // // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    // 'no-negated-condition': 0,
    // 'unicorn/number-literal-case': 0,
    // 'require-await': isProduction ? 2 : 1,
  },
};
