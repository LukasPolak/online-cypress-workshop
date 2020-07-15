/// <reference types="cypress" />
// look into common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions

beforeEach(() => {
  cy.request('DELETE', 'localhost:3000/todos');
  cy.visit('localhost:3000');
});

it.only('Adds one item', () => {
  cy.get('.new-todo').type('buy milk{enter}');

  cy.get('.todo').should('be.visible');
});

it('Adds two items', () => {
  // add first todo
  cy.get('.new-todo').type('buy milk{enter}');

  // add second todo
  cy.get('.new-todo').type('wash dishes{enter}');

  cy.get('.todo').should('have.length', 2);
});

it('Marks item as completed', () => {
  cy.get('.new-todo').type('buy milk{enter}');

  cy.contains('buy milk').should('exist');

  cy.get('.toggle').click();

  cy.get('.todo').should('have.class', 'completed');
});
