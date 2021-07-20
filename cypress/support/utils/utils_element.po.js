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
