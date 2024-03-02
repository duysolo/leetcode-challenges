const baseConfigs = require('./node_modules/gts/.eslintrc.json')

module.exports = {
  ...baseConfigs,
  rules: {
    ...baseConfigs.rules,
    semi: ['error', 'never'],
    'node/no-unpublished-import': 'off',
  },
}
