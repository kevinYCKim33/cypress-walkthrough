describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser()
      // the then here is very clutch
      // the createUser adds a super response back, see commands.js
      // it is a bit more confusing than just writing it the dumb way
      .then(user => {
        cy.visit('/')
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
})
