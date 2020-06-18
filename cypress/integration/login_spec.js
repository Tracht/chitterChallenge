describe("logging in", () => {
  it("successful", () => {
    cy.visit('http://localhost:3000')
    cy.get('.login-form').find('[id="login-handle"]').type('SweetBabyJesus')
    cy.get('.login-form').find('[id="login-password"]').type('12345')
    cy.get('.login-form').submit();
    cy.get('.message').should('contain', 'Welcome back.')
  })
})