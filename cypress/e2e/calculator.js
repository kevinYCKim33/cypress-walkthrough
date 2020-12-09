// because I added in @testing-library/react I can do findByText
// no getByText since that's synchronous and cypress isn't really like that

describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
      .findByText(/^1$/) // starts (^) and ends with ($) 1
      .click()
      .findByText(/^\+$/)
      .click()
      .findByText(/^2$/)
      .click()
      .findByText(/^=$/)
      .click()
      .findByTestId('total') //<div data-testid="total">{children}</div>
      .should('have.text', '3')
  })
})
