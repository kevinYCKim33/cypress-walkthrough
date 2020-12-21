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

// cy.request(): actually make the call right then and there
// cy.intercept() or cy.route() (now deprecated): intercept is better convention TBH

describe('authenticated calculator', () => {
  it('displays the username', () => {
    // Motivation: you already tested logging in in login.js, so no need to go through the whole
    // logging in user actions
    cy.createUser().then(user => {
      cy.request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: user,
      }).then(response => {
        // a bit curious that I have to manually put in the localStorage action
        // like I feel like I'm messing around with the internals
        // or testing implementations
        window.localStorage.setItem('token', response.body.user.token)
      })

      // magic flute your way to the logged in state of the app

      cy.visit('/')
        // overtesting, this already gets tested in login.js
        // .findByText(/login/i)
        // .click()
        // .findByLabelText(/username/i)
        // .type(user.username)
        // .findByLabelText(/password/i)
        // .type(user.password)
        // .findByText(/submit/i)
        // .click()
        .findByTestId('username-display')
        .should('have.text', user.username)
        .findByText(/logout/i)
        .click()
        .findByTestId('username-display')
        .should('not.exist')
    })
  })
})
