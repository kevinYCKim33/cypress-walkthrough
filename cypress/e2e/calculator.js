describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
      .findByText(/^1$/)
      .click()
      .findByText(/^\+$/)
      .click()
      .findByText(/^2$/)
      .click()
      .findByText(/^=$/)
      .click()
      .findByTestId('total')
      .should('have.text', '3')
  })
})

// only new part
// just more drilling...
// nothing too terribly new
describe('authenticated calculator', () => {
  it('displays the username', () => {
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
        .findByTestId('username-display')
        .should('have.text', user.username)
        .findByText(/logout/i)
        .click()
        .findByTestId('username-display')
        .should('not.exist')
    })
  })
})
