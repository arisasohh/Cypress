export class MenuDocumentXEP{
    clickMenuExpense(){
        cy.get('a >.fl.fl-expense ').click()
    } 
}

export class SelectMenuEXP{
    OpenMenuExpense(){
        cy.get('._k_020 > .icon-k')
        .contains('ค่าใช้จ่าย')
        .click()
    }
}

export class CreateDocumentExp{
    CreateExp(){
        cy.get(' .btn-success > .th.topic')
        .contains('สร้างใหม่')
        .click()
        cy.get('.dropdown-menu.right > .dropdown-sub-menu.ng-star-inserted')
        .contains('เอกสารค่าใช้จ่าย')
        .click()   
    }
    CreateExp_projectname(){
        cy.get('.project-name-div > .project-name')
    }
    SaveDoc_Exp(){
        cy.get('.approved-btn > .btn-success')
        .contains('บันทึกเอกสาร')
        .click()
    }
    CloseDoc_Exp(){
        cy.get('.pull-right > .cancel-btn ')
        .contains(' ปิดหน้าต่าง')
        .click()
    }
}

export class ExportDocument{
    printDocExp(){
        cy.get('.option-link > .fa-print')
        .click()
    }
    downloadDocExp(){
        cy.get('.option-link > .fa-download')
        .click()
    }
    closeprint(){
        cy
        .get('document-form.ng-star-inserted > [classname="print-modal"] > .modal > .modal-dialog > .modal-content > .modal-header > .close')
        .click()
    }
}

 export class paymentModel{
     statusDocExp(){
         cy.get('.datatable-row-wrapper:nth-child(1) .datatable-row-center .td-btn .btn-table:nth-child(1) ').should('contain', 'รอดำเนินการ').click()       
     }
     btnPayment(){
         cy.get('.dropdown-inv-tour-0.dropdown-menu :nth-child(2)').click()
     }
     checkwithholdingTax(){
        cy.get('.payment-modal .payment-popup .wht-group .control--checkbox').click()
     }
    //  inputholdingTax(){
    //      cy.get('.bottomzero .input-select-custom .wth-amount ').click() //select3%
    //  }
    soluationPayment(){
        cy.get('.payment-modal .payment-popup .payment-ddl-div .input-select-custom ').click()
    }
     btnSavePayment(){
         cy.get('.modal-footer .ng-star-inserted .btn.btn-success').click()
     }
 }

 
