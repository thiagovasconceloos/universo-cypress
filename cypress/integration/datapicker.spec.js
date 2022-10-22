

it('Deve selecionar a data de nascimento',()=>{
 
    const data = {
    mes: 'ago',
    ano: '1995',
    dia: '27'

    }



  cy.visit('/datepicker')
  cy.get('.datetimepicker-dummy-input').click()
  cy.get('.datepicker-nav-month').click()
  cy.contains('.datepicker-month',data.mes).click()
  cy.get('.datepicker-nav-year').click()
  cy.contains('.datepicker-year span',data.ano).click()
  cy.contains('button[class=date-item]',data.dia).click()



})