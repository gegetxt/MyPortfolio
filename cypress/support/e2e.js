// Cypress E2E destek dosyası
// Bu dosya her test öncesi otomatik yüklenir

// API isteklerini yakalamak için
Cypress.Commands.add('interceptAPI', () => {
  cy.intercept('POST', 'https://reqres.in/api/users').as('apiPost')
})

// Toast bildirimlerini kontrol etmek için
Cypress.Commands.add('checkToast', (message) => {
  cy.get('.Toastify__toast').should('contain', message)
})
