class exl_NPIvalidation {

    NPIValidation(Tools, NPI_nav) {
        cy.contains(Tools).click(); //sidebar (Settings)
        cy.contains(NPI_nav).click(); //sidebar dropdown (Payer Exclusion List)
    }

    NPI(NPI_num) {
        cy.get('#npi').type(NPI_num);
        cy.get('.ant-btn-primary').eq(0).click();
        cy.wait(2000);
    }

    Download(){
        cy.get('.ant-btn-default').eq(0).click(); //Excel
        cy.get('.ant-btn-default').eq(1).click(); //PDF
    }

}
export default exl_NPIvalidation;
