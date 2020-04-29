describe('Search Page', () => {
  const query = 'Testing';
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=search-input]').as('searchInput');
    cy.get('@searchInput').type(query);
  });

  it('renders and focuses text input', () => {
    cy.contains('Search for Github repositories');
    cy.get('@searchInput')
      .should('be.visible')
      .should('have.focus')
      .should('have.value', query);
  });

  it('shows a loader when searching', () => {
    cy.get('[data-cy=loader]').should('be.visible');
  });

  it('shows search summary and duration after search', () => {
    cy.wait(500);
    cy.get('[data-cy=search-summary]').contains(`results for ${query}`);
  });

  it('renders search results after search', () => {
    cy.wait(500);
    cy.get('[data-cy=search-results]')
      .should('be.visible')
      .find('[data-cy="search-item"]')
      .should('be.visible');
  });

  it('ensures search result links to repository detail page', () => {
    cy.wait(500);
    cy.get('[data-cy=search-results]').find('a').first().as('firstLink');

    cy.get('@firstLink').should('be.visible');
    cy.get('@firstLink').then(($link) => {
      cy.get('@firstLink').click();
      cy.url().should('include', `/repo?name=${$link.text()}`);
    });
  });

  it.only('allows paginating search results', () => {
    cy.wait(500);
    cy.get('[data-cy=pagination]').as('pagination');
    cy.get('@pagination').should('be.visible');

    cy.get('@pagination').find('li:nth-child(2)').as('firstPage');
    cy.get('@pagination').find('li:nth-child(3)').as('secondPage');

    cy.get('@firstPage').should('have.class', 'selected');
    cy.get('@secondPage').click();
    cy.get('@firstPage').should('not.have.class', 'selected');
    cy.get('@secondPage').should('have.class', 'selected');
  });
});
