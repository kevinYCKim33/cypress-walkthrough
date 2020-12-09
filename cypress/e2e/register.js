import {buildUser} from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser() //truly random user every time
    cy.visit('/')
      .findByText(/register/i)
      .click()
      .findByLabelText(/username/i)
      .type(user.username)
      .findByLabelText(/password/i)
      .type(user.password)
      .findByText(/submit/i)
      .click()
      .url() // we're now talking about the url...not the submit button or whatever
      .should('eq', `${Cypress.config().baseUrl}/`) // `http://localhost:8080`
      .window() // change subject to window
      .its('localStorage.token') // check out its local storage value
      .should('be.a', 'string') // this is good enough...
    // kind of a fire test actually
  })
})
