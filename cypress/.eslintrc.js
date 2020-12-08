module.exports = {
  root: true, // to stuff
  plugins: ['eslint-plugin-cypress'],
  extends: ['kentcdodds', 'kentcdodds/import', 'plugin:cypress/recommended'],
  env: {'cypress/globals': true}, // comes from ES Lint plugin we just installed
}

// some conflicts between
