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

/*
Ways to debug using cypress
1. a then chain in the middle of your cypress tests

.findByText(/^2$/)
.then(subject => {
  debugger
  return subject
})

subject => jQuery elem subject[0] gets html element

2. stick debug()

3. pause()

4. good old debugger in the middle of your app

*/
