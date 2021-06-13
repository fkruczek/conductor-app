describe('renders room list', () => {
  it('renders correctly', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')
  })
})
