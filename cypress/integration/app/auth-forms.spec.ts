const apiResponse = /unknown error occured/i;

context('Auth forms', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth');
  });

  it('should correctly render and interact with login form', () => {
    cy.contains('Email').should('be.visible');
    cy.contains('Password').should('be.visible');

    cy.get('input').eq(0).type('invalid');
    cy.get('input').eq(1).type('somepassword');
    cy.get('input').eq(1).clear();

    cy.get('form').submit();

    cy.contains(/must be a valid email/i).should('be.visible');
    cy.contains(/password is required/i).should('be.visible');

    cy.get('input').eq(0).clear();
    cy.get('input').eq(0).type('valid@email.com');
    cy.get('input').eq(1).type('somepassword');

    cy.get('[aria-label="toggle password visibility"]').click();

    cy.get('input').eq(1).should('have.value', 'somepassword');

    cy.get('form').submit();

    cy.contains(apiResponse).should('be.visible');
  });

  it('should go to registration form and properly interact with its fields', () => {
    cy.contains(/sign up/i).click();
    cy.contains('Username').should('be.visible');
    cy.contains('Phone').should('be.visible');
    cy.contains('Email').should('be.visible');
    cy.contains('Password').should('be.visible');

    cy.get('form').submit();

    cy.contains(/username is required/i).should('be.visible');
    cy.contains(/email is required/i).should('be.visible');
    cy.contains(/must be a valid phone number/i).should('be.visible');
    cy.contains(/password is required/i).should('be.visible');

    cy.get('input').eq(0).type('John Doe');
    cy.get('input').eq(1).type('valid@email.com');
    cy.get('input').eq(2).type('+48123456789');
    cy.get('input').eq(3).type('somepassword');

    cy.get('form').submit();

    cy.contains(apiResponse).should('be.visible');
  });
});

export {};
