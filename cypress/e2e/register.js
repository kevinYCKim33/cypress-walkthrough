import {buildUser} from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser()
    cy.visit('/')
      .findByText(/register/i)
      .click()
      .findByLabelText(/username/i)
      .type(user.username)
      .findByLabelText(/password/i)
      .type(user.password)
      .findByText(/submit/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.token')
      .should('be.a', 'string')
      // TDD starts here
      // this would have been amazing for Beat45 Registration page
      .findByTestId('username-display') // new section
      .should('have.text', user.username) // new section
  })
})
