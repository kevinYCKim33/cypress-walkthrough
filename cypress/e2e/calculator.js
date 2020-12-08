// Kent likes RTL and jest for integration tests
// Cypress strictly for e2e!  yay! I didn't learn RTL for no reason!

describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/') // baseUrl set in cypress.json
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(3)')
      .click()
      .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(4)')
      .click()
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(4)')
      .click()
      .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(5)')
      .click()
      .get('.mNQM6vIr72uG0YPP56ow5')
      .should('have.text', '3')
  })
})
