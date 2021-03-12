context('Navigation', () => {
  it('should properly go through pages', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Classifieds').should('be.visible');

    cy.get('#post-ad').contains('Post ad').click();

    cy.location('pathname').should('include', 'auth');

    cy.get('#nav-back').click();

    cy.location('pathname').should('not.include', 'auth');
  });
});

export {};
