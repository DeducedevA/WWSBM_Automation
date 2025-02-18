class exl_exclusionlist{

    ExclusionList(Settings, PayerExclusionList){
        cy.contains(Settings).click(); //sidebar (Settings)
        cy.contains(PayerExclusionList).click(); //sidebar dropdown (Payer Exclusion List)
    }

    Download(){
         //Payer Exclusion List
         cy.get('.ant-collapse-header').click(); //facilty list
         cy.get('.ant-btn-button').click();
         cy.get('.ant-btn-default').click();
    }
}
export default exl_exclusionlist;