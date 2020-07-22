describe('Homepage', () => {
  it('Visits homepage', () => {
    cy.visit('/')
    cy.contains("Welcome to Twitter")
  });
});