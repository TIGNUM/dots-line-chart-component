// https://docs.cypress.io/api/introduction/api.html

describe('Dots-Line chart', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('[data-e2e="dots-line-chart"]').should('exist');
  });
});
