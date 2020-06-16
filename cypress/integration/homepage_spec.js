describe('Homepage', () => {
  it('Visits homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Welcome to Twitter")
  });
});