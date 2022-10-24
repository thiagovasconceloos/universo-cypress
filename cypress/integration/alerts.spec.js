it('Deve exibir uma mensagem de alerta',()=>{

  cy.visit('/javascript_alerts')

  cy.contains('button','Alerta').click()

  cy.on('window:alert',(result)=>{
   
     console.log(result)
     expect(result).to.equal('Isto é uma mensagem de alerta')


  })


})

it('Deve confirmar a solicitacao',()=>{

  cy.visit('/javascript_alerts')

  cy.contains('button','Confirma').click()

  cy.on('window:confirm',()=> true )
  cy.get('#result').should('have.text','Mensagem confirmada')



})


it('Deve cancelar a solicitacao',()=>{

  cy.visit('/javascript_alerts')

  cy.contains('button','Confirma').click()

  cy.on('window:confirm',()=> false )
  cy.get('#result').should('have.text','Mensagem não confirmada')



})



it('Deve exibir mensagem de boas vindas',()=>{

  cy.visit('/javascript_alerts')

  cy.window().then(($win) => { 

    cy.stub($win, 'prompt').returns('Thiago')
    cy.contains('button','Prompt').click()

})



  

  
  cy.get('#result').should('have.text','Olá, Thiago')



})