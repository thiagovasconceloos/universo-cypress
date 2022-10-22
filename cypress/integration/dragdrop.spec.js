it('Deve arrastar o Cypress para a caixinha do Node',()=>{


    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Cypress"]').trigger('dragstart',{dataTransfer})
    cy.get('.nodejs figure[draggable="true"]').trigger('drop',{dataTransfer})






})

it('Deve arrastar o Robot para a caixinha do Python ',()=>{


    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Robot Framework"]').trigger('dragstart',{dataTransfer})
    cy.get('.python figure[draggable="true"]').trigger('drop',{dataTransfer})






})