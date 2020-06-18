describe('sign up', () => {
  it('with unique handle & password is successful', () => {
    cy.visit('http://localhost:3000')
    cy.get('.signup-form').find('[id="sign-up-handle"]').type('SweetBabyJesus')
    cy.get('.signup-form').find('[id="sign-up-password"]').type('12345')
    cy.get('.signup-form').submit();
    cy.get('.message').should('contain', 'Your sign up was successful.')
  })
})

describe('sign up', () => {
  it('with already registered handle', () => {
    cy.visit('http://localhost:3000')
    cy.get('.signup-form').find('[id="sign-up-handle"]').type('SweetBabyJesus')
    cy.get('.signup-form').find('[id="sign-up-password"]').type('apple')
    cy.get('.signup-form').submit();
    cy.get('.message').should('contain', 'This handle is already registered, pick another.')
  })
})