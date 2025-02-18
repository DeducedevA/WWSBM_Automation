class exl_recenthistory {

    RecentHistory(Settings, Recent_History) {
        cy.contains(Settings).click(); //sidebar (Settings)
        cy.contains(Recent_History).click(); //sidebar dropdown (Recent History)
    }

    Chart() {
        //Recent History
        cy.get('.ant-btn-button').eq(1).click();
        cy.get('#rc-tabs-0-tab-1').click(); //Insurance Information
        cy.get('#rc-tabs-0-tab-2').click(); //Order Summary
        cy.get('#rc-tabs-0-tab-3').click(); //LMN Validation
        cy.get('#rc-tabs-0-tab-4').click(); //Coverage Summary
        cy.get('.anticon-close').eq(0).click();
    }

   
    Filters(Patient_name, startDate_Nofo, Primary_InsuranceNUM, Primary_Insurance, Chart_Status) {

        // Patient Name search
        cy.get('.ant-table-filter-trigger').eq(0).click();
        cy.get('.ant-input').type(Patient_name);
        cy.get('.ant-btn-sm').eq(0).click();

        cy.get('.ant-table-filter-trigger').eq(0).click();// Reset Filter
        cy.get('.ant-btn-sm').eq(1).click();
        cy.reload();
        cy.wait(3000);

        // DOB Filter
        cy.get('.ant-table-filter-trigger').eq(1).click();
        cy.get('.ant-input').type(startDate_Nofo);
        cy.get('.ant-btn-sm').eq(0).click();

        cy.get('.ant-table-filter-trigger').eq(1).click();// Reset Filter
        cy.get('.ant-btn-sm').eq(1).click();
        cy.reload();
        cy.wait(3000);

        // Primary Insurance Number Filter
        cy.get('.ant-table-filter-trigger').eq(2).click();
        cy.get('.ant-input').type(Primary_InsuranceNUM);
        cy.get('.ant-btn-sm').eq(0).click();

        cy.get('.ant-table-filter-trigger').eq(2).click();// Reset Filter
        cy.get('.ant-btn-sm').eq(1).click({ force: true });
        cy.reload();
        cy.wait(3000);

        // Primary Insurance Filter
        cy.get('.ant-table-filter-trigger').eq(3).click();
        cy.get('.ant-input').type(Primary_Insurance);
        cy.get('.ant-btn-sm').eq(0).click();

        cy.get('.ant-table-filter-trigger').eq(3).click();// Reset Filter
        cy.get('.ant-btn-sm').eq(1).click({ force: true });
        cy.reload();
        cy.wait(3000);

         // Chart Status
         cy.get('.ant-table-filter-trigger').eq(4).click();
         cy.get('.ant-input').type(Chart_Status);
         cy.get('.ant-btn-sm').eq(0).click();
 
         cy.get('.ant-table-filter-trigger').eq(4).click();// Reset Filter
         cy.get('.ant-btn-sm').eq(1).click({ force: true });
         cy.reload();
    }

}
export default exl_recenthistory;
