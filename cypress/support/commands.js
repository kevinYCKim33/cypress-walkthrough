import {buildUser} from '../support/generate'

// not so much voodoo
// overrides ??
Cypress.Commands.add('createUser', overrides => {
  const user = buildUser(overrides) // in case you want to feed in some add'l argument
  // this doesn't do that good of an example
  // just arguments is fine
  cy.request({
    url: 'http://localhost:3000/register',
    method: 'POST',
    body: user,
  })
    // this is the low key clutch line
    // why add in user here?
    // we have access to the user's password here then
    // we can then use it to type user.password
    // cause you aren't just gonna get back the user's password from regular JSON
    .then(response => ({...response.body.user, ...user}))
})
