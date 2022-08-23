module.exports = {
  extends: require.resolve('./eslint-config/index.js'),
  rules: {
    // 使用未声明的变量
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
