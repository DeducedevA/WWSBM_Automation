class exl_AllChartView {

    AllChartView(EB, AllCharts_View) {
        cy.contains(EB).click(); //sidebar
        cy.contains(AllCharts_View).click(); //sidebar dropdown (Chart Insights)
    }

    PatientSearch(Patient_name) {
        cy.get('.ant-input-affix-wrapper').type(Patient_name).wait(2000).clear(); //top search bar
    }

    filters(AllCharts_View) {

        //Facility filter
        cy.get('.ant-dropdown-trigger').eq(1).click();
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(0)
            .click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').should('be.visible').click();

        cy.get('.ant-dropdown-trigger').eq(1).click(); //reset Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
            .should('be.visible').click();

        // Status filter
        cy.get('.ant-table-filter-trigger').eq(2).click();
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)', { timeout: 5000 }).should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner')
            .eq(1).click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click();

        cy.get('.ant-table-filter-trigger').eq(2).click();// reset Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
            .should('be.visible').click();

        // Chart Status filer
        cy.get('[aria-label="Chart Status"] > .ant-table-filter-column > .ant-dropdown-trigger').click();
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)', { timeout: 5000 }).should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner')
            .eq(3).click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(2).should('be.visible').click();

        cy.get('[aria-label="Chart Status"] > .ant-table-filter-column > .ant-dropdown-trigger').click();// reset Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
            .should('be.visible').click();

        cy.contains(AllCharts_View).click();
    }

    charts(){
        //Charts    
        cy.get('.ant-btn-button').eq(1).click();// view Charts
        cy.get('#rc-tabs-0-tab-2').click(); //Insurance Information
        cy.get('#rc-tabs-0-tab-3').click(); //Order Summary
        cy.get('#rc-tabs-0-tab-4').click(); //LMN Validation
        cy.get('#rc-tabs-0-tab-5').click(); //Coverage Summary
        cy.get('.flex > .anticon-close > svg').click();
    }

    ChartDownload(Download_Chart, fileName){

        //Download Entire Chart
        cy.get('.ant-checkbox-wrapper').eq(1).click();

        //ExceL
        cy.contains(Download_Chart).click({force: true});
        cy.get('#exportAs').should('be.visible').click({force: true});
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        cy.get('#password').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        //PDF
        cy.contains(Download_Chart).click({force: true});
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').should('be.visible').click();
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        // cy.get('#password').type(this.mywwsbm_external.fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // Download Chart Selection
        // Excel
        cy.contains(Download_Chart).click({force: true});
        cy.get('#exportAs').should('be.visible').click({force: true});
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-content').eq(2).click();
        cy.get('.ant-select-item-option-content').eq(3).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('#fileName').type(fileName);
        cy.get('#password').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // PDF
        cy.contains(Download_Chart).click({force: true});
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').should('be.visible').click();
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-content').eq(2).click();
        cy.get('.ant-select-item-option-content').eq(3).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('#fileName').type(fileName);
        // cy.get('#password').type(this.mywwsbm_external.fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

    }

}
export default exl_AllChartView;