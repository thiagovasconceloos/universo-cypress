it('Deve marcar Thor Ragnarok',()=>{

    cy.visit('/radios')
  
    
       cy.get('input[value="thor3"]')
      .click().should('be.checked')
  
  
  
  })