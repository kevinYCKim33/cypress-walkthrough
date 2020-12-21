import {buildUser} from '../support/generate'

describe('login', () => {
  it('should login an existing user', () => {
    // create user
    const user = buildUser()
    // very clean
    // magic flute in Super Mario Bros 3
    cy.request({
      url: 'http://localhost:3000/register',
      method: 'POST',
      body: user,
    })

    cy.visit('/')
      // all of the following is now pointless as this all got proven to work in register.js
      // you're overtesting by adding below
      // the test takes longer
      // one failure two failed tests, needless confusion
      // .findByText(/register/i)
      // .click()
      // .findByLabelText(/username/i)
      // .type(user.username)
      // .findByLabelText(/password/i)
      // .type(user.password)
      // .findByText(/submit/i)
      // .click()
      // .findByText(/logout/i)
      // .click()
      .findByText(/login/i)
      .click()
      .findByLabelText(/username/i)
      .type(user.username)
      .findByLabelText(/password/i)
      .type(user.password)
      .findByText(/submit/i)
      .click()
      // now let's verify things are set after login.
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
      .findByTestId('username-display')
      .should('have.text', user.username)
  })
})
