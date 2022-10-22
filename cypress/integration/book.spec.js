
describe('Suite de testes',()=> {


     before(()=>{
 
        cy.log('Aqui temos algo que roda antes de todos os testes')
     })


     beforeEach(()=>{
 
        cy.log('Aqui temos algo que roda antes de cada  testes')
     })



it('teste 1',()=>{




  cy.log('testando teste 1 ')




})

it('teste 2',()=>{




    cy.log('testando teste 3')
  
  
  
  
  })

  it('teste 3',()=>{




    cy.log('testando teste 3 ')
  
  
  
  
  })

  after(()=>{
 
    cy.log('Aqui temos algo que roda depois de todos os testes')
 })

 afterEach(()=>{
 
    cy.log('Aqui temos algo que roda depois de cada testes')
 })

})