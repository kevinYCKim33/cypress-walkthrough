describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.findByText(/^1$/).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/).click()
    cy.findByText(/^=$/).click()
    // again findByTestId should be last resort
    cy.findByTestId('total').should('have.text', '3')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    // logging in is already tests in login.js
    // this removes overtesting
    // loginAsNewUser just makes two ACTUAL POST calls to /register and /login
    cy.loginAsNewUser().then(user => {
      cy.visit('/')
      cy.findByTestId('username-display').should('have.text', user.username)
      cy.findByText(/logout/i).click()
      // timeout seems new...
      cy.findByTestId('username-display', {timeout: 300}).should('not.exist')
    })
  })
})
