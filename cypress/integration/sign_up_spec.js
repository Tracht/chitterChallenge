describe('sign up', () => {
  it('with unique handle & password is successful', () => {
    cy.visit('http://localhost:3000')
    cy.get('.signup-form').find('[id="sign-up-handle"]').type('catLover_meow')
    cy.get('.signup-form').find('[id="sign-up-password"]').type('12345')
    cy.get('.signup-form').submit();
    cy.get('.message').should('contain', 'Sign up successful.')
  })
})