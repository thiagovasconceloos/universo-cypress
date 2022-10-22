

it('Deve selecionar a data de nascimento',()=>{


  cy.visit('/datepicker')
  cy.get('.datetimepicker-dummy-input').click()
  cy.get('.datepicker-nav-month').click()
  cy.contains('.datepicker-month','ago').click()
  cy.get('.datepicker-nav-year').click()
  cy.contains('.datepicker-year span','1995').click()
  cy.contains('button[class=date-item]',27).click()



})