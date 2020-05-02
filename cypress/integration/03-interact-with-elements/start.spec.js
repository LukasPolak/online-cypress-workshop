/// <reference types="cypress" />

beforeEach(() => {
  cy.request('DELETE', 'localhost:3000/todos');

  cy.visit('localhost:3000');
  cy.get('input').type('todo{enter}');
});

it('adds a new todo item', () => {
  cy.get('.todo').should('exist');
});

it('completes todo item', () => {
  cy.get('.todo input').click();
  cy.get('.todo.completed').should('exist');
});

it('deletes todo item', () => {
  cy.get('.todo .destroy').invoke('show').click();
  cy.get('todo').should('not.exist');
});
