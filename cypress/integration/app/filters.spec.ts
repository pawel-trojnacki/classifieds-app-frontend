import { RootState } from '../../../src/store/root/store';

context('Filters', () => {
  it('should correctly change each filter', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#search-input').type('query');
    cy.get('#search-input').should('have.value', 'query');
    cy.get('[data-testid="ad-loader"]').should('be.visible');

    cy.get('#mui-component-select-sort').click();
    cy.get('[data-value="priceasc"]').click();

    cy.get('#mui-component-select-minprice').click();
    cy.get('[data-value=500]').click();

    cy.get('#mui-component-select-maxprice').click();
    cy.get('[data-value=2000]').click();

    cy.get('[type="checkbox"]').check();

    cy.get('[role="tab"]').eq(3).click();

    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.window()
      .its('store')
      .invoke('getState')
      .then((state: RootState) => {
        const {
          search,
          sort,
          minprice,
          maxprice,
          withimages,
          category,
        } = state.filters;
        expect(search).equal('query');
        expect(sort).equal('priceasc');
        expect(minprice).equal(500);
        expect(maxprice).equal(2000);
        expect(withimages).equal(true);
        expect(category).equal('tablets');
      });
  });
});

export {}
