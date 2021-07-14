const email = 'arisa_s@flowaccount.com'
const password = '@arisa24097'

describe('login success', () => {
    beforeEach(() => {
        cy.viewport(1558, 1080)
      })

    it('go to flowaccount', () => {
      cy.visit('https://flowaccount.com/')
    })
    it('click loginbtn' , () =>{
        cy.get('.flowbtn.app-border-btn').click()
    })
    it('input email&password' , () =>{
        cy.visit('https://auth.flowaccount.com/th')
        // cy.get('#Email').click()
        cy.get('#Email').type(email) 
        // cy.get('#Password').click()
        cy.get('#Password').type(password) 
        cy.get('.login-btn.btn-blue').click()
    })
    it('checkdashbord' ,() =>{
        cy.wait(50000)
        cy.get('.panel-heading.pull-left.dashboard-margin').contains(' ภาพรวมบริษัท')
    })
})

