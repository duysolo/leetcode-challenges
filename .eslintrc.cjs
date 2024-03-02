module.exports = {
  extends: ['./node_modules/gts/'],
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'node/no-unpublished-import': 'off',
  },
}
