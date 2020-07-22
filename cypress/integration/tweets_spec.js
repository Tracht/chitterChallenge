describe('tweets', () => {
  it('shows tweets', () => {
    cy.visit('/')
    cy.contains('Likes:')
    cy.contains('tweeted')
    cy.contains('posted on')
    cy.contains('updated at')
  })
})