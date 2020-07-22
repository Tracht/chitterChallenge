describe("logging in", () => {
  it("successful", () => {
    cy.visit('/')
    cy.get('.login-form').find('[id="login-handle"]').type('SweetBabyJesus')
    cy.get('.login-form').find('[id="login-password"]').type('12345')
    cy.get('.login-form').submit();
    cy.get('.success-message').should('contain', 'Welcome back.')
  })
})