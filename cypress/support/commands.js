Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() { 
    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('rodrigofcosta37@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})