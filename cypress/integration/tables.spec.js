it('Deve exibir sete series no total',()=>{

    cy.visit('/tables')



    cy.get('table tbody tr')
    .then((s)=>{


     expect(s).to.have.length(7)

    })
  
 
  
  })


  it('Deve exibir minha serie favorita',()=>{

    cy.visit('/tables')



    cy.contains('table tbody tr','Loki')
    .then((s)=>{


     expect(s).to.contain('Marvel')
     expect(s).to.contain('Disney+')
     expect(s).to.contain('2021')

    })
  
 
  
  })



  it('Deve excluir uma serie',()=>{

    cy.visit('/tables')



    cy.contains('table tbody tr','Round 6')
    .then((s)=>{
       s.find('.delete').trigger('click')
        })
  
     .should('not.exist')



     cy.get('table tbody tr')
        .then((s)=>{
        expect(s).to.have.length(6)

    })
  
  
  })