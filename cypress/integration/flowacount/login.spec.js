const email = 'arisa_s@flowaccount.com'
const password = '@arisa24097'

describe('login fail by username invalid', () => {
    beforeEach(() => {
        cy.viewport(1558, 1080)
      })

    it('go to flowaccount', () => {
      cy.visit('https://flowaccount.com/')
    })
    it('click loginbtn' , () =>{
        cy.visit('https://flowaccount.com/')
        cy.get('.flowbtn.app-border-btn').click()
    })
    it('input email&password' , () =>{
        cy.visit('https://auth.flowaccount.com/th')
        cy.get('#Email').type('arisa.s@flowaccount') 
        cy.get('#Password').type(password) 
        cy.get('.login-btn.btn-blue').click()
    })
    it('error username invalid' ,() =>{
        cy.get('.validation-summary-errors').contains('ไม่พบอีเมลในระบบ โปรดสมัครเข้าใช้งานหรือติดต่อเรา')
        cy.wait(5000)
    })
    
})

describe('login fail by password invalid', () => {
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
        cy.get('#Email').type('arisa_s@flowaccount.com') 
        cy.get('#Password').type('1234567890') 
        cy.get('.login-btn.btn-blue').click()
    })
    it('error password invaild' ,() =>{
        cy.get('.validation-summary-errors').contains('ล็อคอินไม่สำเร็จ : อีเมลหรือรหัสผ่านไม่ถูกต้อง')
        
    })   
})

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
        cy.get('#Email').type(email) 
        cy.get('#Password').type(password) 
        cy.get('.login-btn.btn-blue').click()
    })
    describe('login fail by password invalid', () => {
    it('checkdashbord' ,() =>{
        cy.wait(50000)
        cy.get('.panel-heading.pull-left.dashboard-margin').contains(' ภาพรวมบริษัท')
    })
})
})
