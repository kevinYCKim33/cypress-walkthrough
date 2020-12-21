TLDR: the docs here are great: https://example.cypress.io/commands/actions

While the course is still fresh in my mind

`yarn add cypress --dev-dependency`

or

`npm install --save-dev cypress`

see all commands with

`npx cypress-help`

`yarn cypress open` to get the interactive chrome thing up

`yarn cypress run` to run things in headless mode

just fancy way of saying run it without firing up the browser

Add linting support

`yarn add eslint-plugin-cypress --dev-dependency`

or

`npm install --save-dev eslint-plugin-cypress`

In `cypress/.eslintrc.js`

```
module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['kentcdodds', 'kentcdodds/import', 'plugin:cypress/recommended'],
  env: {'cypress/globals': true},
}
```

# root: true

That way, ESLint will stop here as it's looking at the file system for the
configuration to use for a particular file. Another thing that Cypress adds that
I want to take care of is Cypress adds a video and screenshots directory.

# `.gitignore`

```
dist
node_modules
coverage
cypress/videos
cypress/screenshots
```

don't want videos checked into git

`cypress.json`

set baseUrl so you can do `/` instead of `https://localhost:8080`

change integrationFolder name to `cypress/e2e` cause KCD uses cypress for e2e
more

you can also look at all the configuration options in Cypress's Settings option

6. Installing Cypress Testing Library

`npm install --save-dev @testing-library/cypress`

`cypress/support/index.js`

```
import '@testing-library/cypress/add-commands'
import './commands'
```

#important cy.whatever is no longer chainable for unrelated things in either
testing-library/cypress or just cypress

7. Script Cypress for Local Development and Continuous Integration

`npm install --save-dev start-server-and-test`

https://testingjavascript.com/lessons/cypress-script-cypress-for-local-development-and-continuous-integration

^ ^ big idea: pre-hook to run cypress per every commit

- opt in if your proj is small
- some cough cough that I should learn more Travis CI and devops stuff

8. Debug a Test with Cypress

`calculator.js`

```
.findByText(/^2$/)
.then(subject => {
  debugger
  return subject
})
```

a: debug straight in cypress test; cypress chrome is still chrome

b: debug straight in your react proj

c: if (window.Cypress) is a cool hack too

9. Test User Registration with Cypress

see `generate.js`

10. Cypress TDD

it's pretty cool

11. Simulate HTTP Errors in Cypress Tests

`register.js`

12~20: really everything else are now just in cypress/

`e2e/calculator.js`

`e2e/login.js`

`e2e/register.js`

`support/command.js`

from this point

Also `index.html` for adding React Dev Tools to Cypress
