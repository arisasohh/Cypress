import { italic } from 'ansi-colors'
import * as Login from '../../support/base/Login.po'
import * as intercept from '../../support/utils/utils_intercept.po'
import * as utils_element from '../../support/utils/utils_element.po'
// import * as moment from 'moment'

const login = new Login.Login()
const menuExp = new utils_element.MenuDocumentXEP()
const selectExp = new utils_element.SelectMenuEXP()
const createExp = new utils_element.CreateDocumentExp()
// const dateTime = moment().format('YYYY.MM.DD_HH.mm.ss')
const createProjectname = new utils_element.CreateDocumentExp()
const saveExp = new utils_element.CreateDocumentExp()
const CloseExp = new utils_element.CreateDocumentExp()
const printExp = new utils_element.ExportDocument()
const ClosePrint = new utils_element.ExportDocument()
const downloadExp = new utils_element.ExportDocument()
let cookieValue


describe('Create Expense' , () =>{
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
      it('Create expense', () => {
        menuExp.clickMenuExpense() 
        selectExp.OpenMenuExpense()  
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
        // createProjectname.CreateExp_projectname()
        // .type('TAITALAY' + dateTime )
        cy.get('.project-name-div > .project-name').type('SARAI_PREJECT')
        cy.get('.expense-type > .reference').type('SARAI_REF')
        cy.get('.item0 >.description-td>.fz-elastic').type("คอร์สเรียน cypress")
        cy.get('.item0 > .category-td').click()
        cy.get('.btn-expense-cat-0>.dropdown-menu > .ng-star-inserted > > ._1002').click()
        cy.get('.item0 >.price-td >.form-control').type('5990')
        cy.get('.form-group> .remarks').type('เรียนได้ครั้งละ user')
        // cy.get('.pull-left.group-div > .form-group.note > .internal-notes #note').type('สาหร่ายทดสอบ test by cypress')
        // cy.get('.not-expense .group-div:nth-child(1) #note').type('สาหร่ายทดสอบ test by cypress')

        //save EXP
        saveExp.SaveDoc_Exp()

        // waiting check save success
        cy.get('#toast-container').should('be.visible')
        cy.get('#toast-container').contains('บันทึกข้อมูลสำเร็จ')

        //printDoc_EXP
        intercept.ExportExp()
        printExp.printDocExp()
        cy.wait(2000)
        cy.wait('@GetExportDoc')
        
        //closeprint
        ClosePrint.closeprint()

        //download_EXP
        intercept.ExportExp()
        downloadExp.downloadDocExp()
        cy.wait(2000)
        cy.wait('@GetExportDoc')

      //close doc
      CloseExp.CloseDoc_Exp()

      })
})



