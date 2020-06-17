describe('tweets', () => {
  it('shows tweets', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Likes:')
    cy.contains('tweeted')
    cy.contains('posted on')
    cy.contains('updated at')
  })
})