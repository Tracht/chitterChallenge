describe('sign up', () => {
  it('success with unique handle & password', () => {
    cy.visit('/')
    cy.get('.signup-form').find('[id="sign-up-handle"]').type('SweetBabyJesus')
    cy.get('.signup-form').find('[id="sign-up-password"]').type('12345')
    cy.get('.signup-form').submit();
    cy.get('.message').should('contain', 'Your sign up was successful.')
  })
})

describe('sign up', () => {
  it('fail if using already registered handle', () => {
    cy.visit('/')
    cy.get('.signup-form').find('[id="signup-handle"]').type('SweetBabyJesus')
    cy.get('.signup-form').find('[id="signup-password"]').type('apple')
    cy.get('.signup-form').submit();
    cy.get('.alert').should('contain', 'This handle is already registered, pick another.')
  })
})