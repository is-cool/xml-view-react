module.exports = {
  extends: [
    './rules/react.js',
    './rules/typescript.js',
    './base/es6.js',
    './base/es6.js',
    './base/best-practices.js',
    './base/possible-errors.js',
    './base/variables.js',
    './base/strict.js',
    './base/style.js',
  ].map(require.resolve),
  parserOptions: {
    // 是否需要 babel 配置文件
    requireConfigFile: false,
    // 设置为 "script" (默认)或"module"（如果你的代码是 ECMAScript 模块)
    sourceType: 'module',
    // 想使用额外的语言特性
    ecmaFeatures: {
      // 在全局作用域下使用return语句
      globalReturn: false,
      // 启用全局strict mode
      impliedStrict: true,
      // 启用jsx
      jsx: true,
    },
  },
};
