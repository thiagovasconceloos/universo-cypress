it('Deve selecionar Bucky por ID',()=>{

   cy.visit('/select')
   cy.get('#avengerList').select('Bucky')
   .should('have.value','2')





})

it('Deve selecionar Tony Stark',()=>{

    cy.visit('/select')
    cy.contains('option','Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value','3')
 
 
 
 
 
 })