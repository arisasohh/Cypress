export class Login {
    openAuthUrl(){
        // cy.visit(Cypress.env('auth_url')) //ในกรณีที่ทำใน workspace ถึงจะใช้ท่านี้ได้ถ้าทำข้างนอกก็ต้องใช้ท่าข้างหลัง
        cy.visit('https://auth.flowaccount.com/th')
    }
    login(email, password) {
        cy.get('#Email')
          .click()
          .type(email)
        cy.get('#Password')
          .click()
          .type(password)
      }
      submitLogin() {
        cy.get('.login-btn').click()
        
      }
}