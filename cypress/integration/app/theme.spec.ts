const lightBg = 'rgb(255, 255, 255)';
const darkBg = 'rgb(10, 15, 32)';

context('Theme', () => {
  it('should change theme correctly', () => {
    cy.visit('http://localhost:3000/');

    cy.get('body').should('have.css', 'background-color', lightBg);

    cy.get('[aria-label="change theme"]').click();
    cy.get('body').should('have.css', 'background-color', darkBg);

    cy.reload();
    cy.get('body').should('have.css', 'background-color', darkBg);

    cy.clearLocalStorage();
    cy.reload();
    cy.get('body').should('have.css', 'background-color', lightBg);
  });
});

export {};
