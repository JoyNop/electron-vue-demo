/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 14:41:01
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-05 09:10:28
 * @Description: file content
 * @FilePath: /electron-vue-demo/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 不检测语句末尾的分号
    semi: ['off', 'always'],
    // 强制缩进为2个空格
    indent: ['error', 2],
    // 关闭函数名称跟括号之间的空格检测
    'space-before-function-paren': 0,
    // 忽略大括号内的空格
    'object-curly-spacing': 0,
    'comma-dangle': ['error', 'only-multiline']
  }
};
