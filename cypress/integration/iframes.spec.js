const niceIFrame = () => {
  return cy
     .get('#weareqaninja')
     .its('0.contentDocument.body').should('not.be.empty')
     .then(cy.wrap)
     
}


const badIFrame = () => {
    return cy
       .get('iframe[src*=instagram]')
       .its('0.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       
  }


it('Deve validar o total de seguidores ',()=> {

   cy.visit('/bad_iframe')
   
   badIFrame().contains('.FollowerCountText','7.205 seguidores') 
   .should('be.visible')
   
   




})


