import * as Login from '../../support/base/Login.po'
import * as intercept from '../../support/utils/utils_intercept.po'
import * as utils_element from '../../support/utils/utils_element.po'


const login = new Login.Login()
const menuExp = new utils_element.MenuDocumentXEP()
const selectExp = new utils_element.SelectMenuEXP()
const createExp = new utils_element.CreateDocumentExp()
const saveExp = new utils_element.CreateDocumentExp()
const CloseExp = new utils_element.CreateDocumentExp()
const PaymentModel = new utils_element.paymentModel()
let cookieValue


describe('FlowAccount(UI): Expense Payment' , () =>{
    before(() => {
        cy.viewport(1920, 1080)
        login.openAuthUrl()
        login.login('arisa_s@flowaccount.com', '@arisa24097')
        login.submitLogin()
        intercept.APINetworkSales()
        intercept.APINetworkMe()
        intercept.APINetworkBank()
        cy.wait('@GetSales')
        cy.wait('@GetMe')
        cy.wait('@GetBank')
        cy.wait(3000)
        
        //get cookie after login for test
        cy.getCookie('u1')
        .should('exist')
        .then(c=>{
            cookieValue = c
            cy.log(JSON.stringify(cookieValue))
        })
    })

    beforeEach(() => {
        Cypress.Cookies.defaults({
          preserve: ['u1', cookieValue], //set cookie for test
        })
        // cy.setCookie('u1', 'cookieValue')
        cy.setCookie('culture', 'th') //set cookie for test
        cy.viewport(1920, 1080)
        cy.wait(1000)
      })     

      describe('Payment EXP Document' , () => {
          it.skip('create Document => Expense', () => {
              //step 1: openmenu
            //   menuExp.clickMenuExpense() 
            //   selectExp.OpenMenuExpense()  
              //step 2: CreteDocExp
              createExp.CreateExp()
              //input ข้อมูล
              cy.get('.twitter-typeahead>.tt-input')
              .type('Sarai Test')
              cy.get('.head-div.clearfix')
              .click()
              cy.get('.input-relate-top > .contact-address')
              .type('101 ถนน สุขุมวิท 101/1 Khwaeng Bang Chak, Khet Phra Khanong, Krung Thep Maha Nakhon')
              cy.get('.head-div.clearfix')
              cy.get('.input-relate-center > .contact-zipcode')
              .type('10260')
              cy.get('.head-div.clearfix')
              cy.get('.input-relate-center > .contact-tax-id')
              .type('1234321234000')
              cy.get('.head-div.clearfix')
              cy.get('.input-relate-bottom > .contact-branch')
              .type('0009999')
              cy.get('.head-div.clearfix')
              cy.get('.project-name-div > .project-name').type('SARAI_PREJECT')
              cy.get('.expense-type > .reference').type('SARAI_REF')
              cy.get('.item0 >.description-td>.fz-elastic').type("คอร์สเรียน cypress")
              cy.get('.item0 > .category-td').click()
              cy.get('.btn-expense-cat-0>.dropdown-menu > .ng-star-inserted > > ._1002').click()
              cy.get('.item0 >.price-td >.form-control').type('5990')
              cy.get('.form-group> .remarks').type('เรียนได้ครั้งละ user')
      
              //step 3: save EXP
              saveExp.SaveDoc_Exp()

              //step 4: close Doc
              CloseExp.CloseDoc_Exp()

          })
          it('Check PaymentDocument status => EXP',() => {
            menuExp.clickMenuExpense() 
            selectExp.OpenMenuExpense()  
              //step 1: check status
              PaymentModel.statusDocExp()
              PaymentModel.btnPayment()
            //   PaymentModel.checkwithholdingTax()
             // PaymentModel.inputholdingTax()           
          })

          it('Payment EXP => เงินสด',()=> {
            PaymentModel.checkwithholdingTax()
            PaymentModel.soluationPayment()
            cy.get('.input-border.open :nth-child(1)').contains('เงินสด').click()
            PaymentModel.btnSavePayment()
          })
          
//           it('Payment EXP => เงินสดย่อย',()=> {
//             PaymentModel.checkwithholdingTax()
//             PaymentModel.soluationPayment()
//             cy.get('.input-border.open :nth-child(2)').contains('เงินสดย่อย').click()
//             cy.get('.payment-modal .payment-popup .paynent-method .bank-account-ddl-div .input-select-custom').first()
//                .click()
//             PaymentModel.btnSavePayment()
//           })

//           it('Payment EXP => โอนเงิน',()=> {
//             PaymentModel.checkwithholdingTax()
//             PaymentModel.soluationPayment()
//             cy.get('.input-border.open :nth-child(3)').contains('โอนเงิน').click()
//             cy.get('.payment-modal .payment-popup .paynent-method .bank-account-ddl-div .input-select-custom').first()
//             .click()
//             PaymentModel.btnSavePayment()

//       })
    
//           it('Payment EXP => เช็ค',()=> {
//             PaymentModel.checkwithholdingTax()
//             PaymentModel.soluationPayment()
//             cy.get('.input-border.open :nth-child(4)').contains('เช็ค').click()
//             cy.get('.payment-modal .payment-popup .paynent-method .bank-account-ddl-div .input-select-custom').first()
//             .click()
//             cy.get('.payment-modal .payment-popup .paynent-method .form-group .ng-pristine').type('01234567890')
//             // cy.get('.payment-modal .payment-popup .paynent-method .form-group ').contains('ค่าธรรมเนียม:').type('15')
//             PaymentModel.btnSavePayment()
//   })
//           it('Payment EXP => บัตรเครดิต',()=> {
//             PaymentModel.checkwithholdingTax()
//             PaymentModel.soluationPayment()
//             cy.get('.input-border.open :nth-child(5)').contains('บัตรเครดิต').click()
//             cy.get('.payment-modal .payment-popup .paynent-method .bank-account-ddl-div .input-select-custom').first()
//             .click()
//             // cy.get('.payment-modal .payment-popup .paynent-method .form-group ').contains('ค่าธรรมเนียม:').type('15')
//             PaymentModel.btnSavePayment()
// })
//           it('Payment EXP => ช่องทางอื่นๆ',()=> {
//             PaymentModel.checkwithholdingTax()
//             PaymentModel.soluationPayment()
//             cy.get('.input-border.open :nth-child(6)').contains('ช่องทางอื่นๆ').click()
//             cy.get('.payment-modal .payment-popup .paynent-method .bank-account-ddl-div .input-select-custom').first()
//             .click()
//             // cy.get('.payment-modal .payment-popup .paynent-method .form-group ').contains('ค่าธรรมเนียม:').type('15')
//             PaymentModel.btnSavePayment()
// })
})
})
