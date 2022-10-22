describe('Select 2',()=>{

  before(()=>{

    cy.visit('/apps/select2/index.html')

  })

it('Deve selecionar uma unica opção',()=>{

    
    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option','Cypress').click()
   
 
 
 })
 
 it('Deve selecionar  multiplas opções',()=>{
    
      const selecao = [
        'Cypress',
        'Robot Framework',
        'Playwright'


      ]

      selecao.forEach((s)=>{

        
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option',`${s}`).click()

      })



   

  
 
 
 })
 

    
})
