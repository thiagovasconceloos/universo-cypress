it('Deve exibir mensagem de sucesso no popup',()=>{

    cy.visit('/sweet_alert')
    cy.contains('button','Sucesso').click()
    
    cy.get('.swal-text')
    .should('have.text','Você clicou no botão verde.')


 
 
 
 
 })
 

 it('Deve exibir mensagem de erro no popup',()=>{

    cy.visit('/sweet_alert')
    cy.contains('button','Deu Ruim').click()
    
    cy.get('.swal-text')
    .should('have.text','Você clicou no botão vermelho.')


 
 
 
 
 })