it('Deve selecionar 5 filmes da marvel',()=>{

  cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')


   const movies = [
            'ironman',
            'avengers',
            'guardians',
            'blackpanther',
            'thor3'
        
        
             ]

  movies.forEach((m)=>{
     cy.get(`input[name=${m}]`)
    .click().should('be.checked')

  })

})