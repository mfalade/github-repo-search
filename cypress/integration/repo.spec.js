describe('Repository page', () => {
  it('shows an error message when no repository is specified', () => {
    cy.visit('/repo');
    cy.get('[data-cy=error-message]')
      .should('be.visible')
      .should('have.text', 'No repository specified!');
  });

  it('shows not found for non existing repos', () => {
    cy.visit('/repo?name=nonexistentrepository');
    cy.get('[data-cy=error-message]').should('be.visible');
    cy.get('[data-cy=repository-details]').should('not.be.visible');
  });

  it('shows information about existing repos', () => {
    cy.visit('/repo?name=facebook/react');
    cy.get('[data-cy=error-message]').should('not.be.visible');
    cy.get('[data-cy=repository-details]').should('be.visible');
  });

  it('should lazy load readme content', () => {
    cy.get('[data-cy=footer]').scrollIntoView();
    cy.get('[data-cy=readme-container]').should('be.visible');
    cy.get('[data-cy=loader]').should('be.visible');
    cy.wait(500);
    cy.get('[data-cy=readme]').should('be.visible');
  });
});
