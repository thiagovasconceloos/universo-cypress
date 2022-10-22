
describe('Drag and Drop', ()=>{

before(()=>{

    cy.visit('/drag_and_drop')

})

it('Deve arrastar o Cypress para a caixinha do Node',()=>{


   

    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Cypress"]').trigger('dragstart',{dataTransfer})
    cy.get('.nodejs figure[draggable="true"]').trigger('drop',{dataTransfer})






})

it('Deve arrastar o Robot para a caixinha do Python ',()=>{


   
    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Robot Framework"]').trigger('dragstart',{dataTransfer})
    cy.get('.python figure[draggable="true"]').trigger('drop',{dataTransfer})






})     
})