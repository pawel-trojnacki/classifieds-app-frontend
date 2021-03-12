const expectedTransform = 'matrix(1, 0, 0, 1, 0, -36.4)';

context('Scroll animation', () => {
  it('should change tab bar css on scroll', () => {
    cy.visit('http://localhost:3000');

    cy.get('.parallax').should('have.css', 'transform', 'none');

    cy.scrollTo(0, 100);

    cy.get('.parallax').should('have.css', 'transform', expectedTransform);

    cy.scrollTo(0, 0);

    cy.get('.parallax').should('have.css', 'transform', 'none');
  });
});

export {};
