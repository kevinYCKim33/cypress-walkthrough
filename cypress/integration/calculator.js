// supposedely very similar to mocha...
// Easy stuff...just like yoyo
// 1. Start your app's server
// 2. cy.visit() your app
// 3. Begin writing tests

// yarn cypress open
// const user = cy // sometimes KCD likes to do it like this to emphasize it's all async...ehhh kinda doesn't make sense

// hmm I guess it's running asyncronously...
describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('http://localhost:8080')
      // selectors found through the bulls eye icon on cypress testing app; can improve in future iterations
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(3)') // 1
      .click()
      .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(4)') // +
      .click()
      .get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(4)') // 2
      .click()
      .get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(5)') // =
      .click()
      .get('.mNQM6vIr72uG0YPP56ow5') // the result section
      .should('have.text', '3')
  })
})
