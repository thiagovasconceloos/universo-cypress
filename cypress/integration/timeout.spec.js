
it('exemplo de timeout',()=>{


  cy.visit('/timeout')
  cy.contains('button','Habilita').click()
  cy.get('#firstname')
    .should('be.visible')
    .type('Thiago',{timeout:7000})



})