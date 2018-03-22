module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".vue",
        ]
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // 'no-param-reassign': ['error', {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'state', // for vuex state
    //     'acc', // for reduce accumulators
    //     'e' // for e.returnvalue
    //   ]
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'no-unused-vars': 0,
    'max-len': 0,
    'no-unresolved': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-param-reassign': 0,
  },
}
