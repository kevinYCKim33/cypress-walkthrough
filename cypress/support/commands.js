import {userBuilder} from './generate'

Cypress.Commands.add('createUser', overrides => {
  const user = userBuilder(overrides)
  return cy
    .request({
      url: 'http://localhost:3000/register',
      method: 'POST',
      body: user,
    })
    .then(({body}) => body.user)
})

Cypress.Commands.add('login', user => {
  return cy
    .request({
      url: 'http://localhost:3000/login',
      method: 'POST',
      body: user,
    })
    .then(({body}) => {
      window.localStorage.setItem('token', body.user.token)
      // so that the user is chainable through the test
      return body.user
    })
})

// joining two custom cypress methods
Cypress.Commands.add('loginAsNewUser', () => {
  cy.createUser().then(user => {
    cy.login(user)
  })
})

// used in both login.js and register.js
Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

// used in both login.js and register.js
Cypress.Commands.add('assertLoggedInAs', user => {
  cy.window()
    .its('localStorage.token')
    .should('be.a', 'string')
  cy.findByTestId('username-display').should('have.text', user.username)
})
