describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
        .findByText(/login/i)
        .click()
        .findByLabelText(/username/i)
        .type(user.username)
        .findByLabelText(/password/i)
        .type(user.password)
        .findByText(/submit/i)
        .click()
        .assertHome()
        // ^^^
        // cy.url().should('eq', `${Cypress.config().baseUrl}/`)
        .assertLoggedInAs(user)
      // ^^^
      //   cy.window()
      // .its('localStorage.token')
      // .should('be.a', 'string')
      // .findByTestId('username-display')
      // .should('have.text', user.username)
    })
  })
})

// tests now leaner and more descriptive
