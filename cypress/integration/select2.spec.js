it('Deve selecionar uma unica opcao',()=>{

    cy.visit('/apps/select2/index.html')
    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option','Cypress').click()
   
 
 
 })
 