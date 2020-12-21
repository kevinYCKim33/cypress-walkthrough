import {userBuilder} from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = userBuilder()
    cy.visit('/')
    cy.findByText(/register/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()
    cy.assertHome().assertLoggedInAs(user)
  })

  // cy.route is now cy.intercept
  // anyways, a way to fake a 500 error or even mock BE response
  // cy.request() is the one actually make a call to BE as a way to start a test from the middle and not the start
  // for DRYness
  it(`should show an error message if there's an error registering`, () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/register',
      status: 500,
      response: {},
    })
    cy.visit('/register')
    cy.findByText(/submit/i).click()
    cy.findByText(/error.*try again/i)
  })
})
