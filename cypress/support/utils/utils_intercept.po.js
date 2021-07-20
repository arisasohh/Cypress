export function APINetworkSales() {
    cy.intercept('/companies/sales').as('GetSales')
  }
  
  export function APINetworkMe() {
    cy.intercept('/users/me').as('GetMe')
  }
  
  export function APINetworkBank() {
    cy.intercept('/th/banks').as('GetBank')
  }

export function ExportExp() {
  cy.intercept('expense/ExportDocument').as('GetExportDoc')
}