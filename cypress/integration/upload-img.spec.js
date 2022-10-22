

it('Deve selecionar uma imagem',()=>{

   const img = 'cypress/fixtures/cypress.png'
   
   cy.visit('/upload')
   cy.get('input[name=file]').selectFile(img,{force: true})
   cy.get('input[value=Upload]').click()
   cy.get('img[src="/uploads/cypress.png"]',{timeout:7000})
   .should('be.visible')



})