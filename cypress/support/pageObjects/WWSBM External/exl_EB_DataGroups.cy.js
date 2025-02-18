class exl_DataGroups {

    datagroups(EB, Data_Groups){
        cy.contains(EB).click(); //sidebar
        cy.contains(Data_Groups).click(); //sidebar dropdown (Data Groups)
    }

    searchbar(DataGroup_ID) {
        // Top Searchbar
        cy.get('.ant-input-affix-wrapper').type(DataGroup_ID);
        cy.get('.ant-input-affix-wrapper').clear();
    }

    DGfilters() {

        // Data Group ID Filter
        cy.get('.ant-dropdown-trigger').eq(2).click(); //Filter
        cy.get('.ant-checkbox-inner').eq(1).click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').should('be.visible').click();

        cy.get('.ant-dropdown-trigger').eq(2).click(); //reset filter
        cy.get('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm').should('be.visible').click();
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(0).should('be.visible').click();

        // Pending calls filter
        cy.get('.ant-dropdown-trigger').eq(3).click(); //Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(0)
            .should('be.visible').click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click({force: true});

        cy.get('.ant-dropdown-trigger').eq(3).click(); //Filter
        cy.get('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm').eq(1).should('be.visible').click({force: true});
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click();

    }

    chart() {
        //chart
        cy.get('button.ant-btn.css-zg0ahe.ant-btn-button.hover\\:text-blue-bm').eq(1)
            .should('be.visible').click(); // Click the button
        cy.get(':nth-child(2) > .ant-btn > span').click();//Patient Details
        cy.get('#rc-tabs-1-tab-2').click(); //Insurance Information
        cy.get('#rc-tabs-1-tab-3').click(); //Order Summary
        cy.get('#rc-tabs-1-tab-4').click(); //LMN Validation
        cy.get('#rc-tabs-1-tab-5').click(); //Coverage Summary
        cy.get('.flex > .anticon-close > svg').eq(1).click();
    }

    chartDownload(Download_Chart, fileName){
         // Chart Download

        //Download Entire Chart
        cy.get('.ant-table-selection-column > .ant-checkbox-wrapper').click({force: true});

        //ExceL
        cy.contains(Download_Chart).click();
        cy.get('#exportAs').click({force: true});
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        cy.get('#password').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        //PDF
        cy.contains(Download_Chart).click();
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').click({force: true});
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        // cy.get('#password').type(this.mywwsbm_external.fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // Download Chart Selection
        // Excel
        cy.contains(Download_Chart).click({force: true});
        cy.get('#exportAs').click({force: true});
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
        cy.contains(Download_Chart).click();
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').click();
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

    CHfilters(){
        
        //patient name filter
        cy.get('.ant-dropdown-trigger').eq(4).click(); //Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(0)
            .click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(6).should('be.visible').click();

        cy.get('.ant-dropdown-trigger').eq(4).click(); //reset Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
            .should('be.visible').click();

        //Calling Status
        cy.get('.ant-dropdown-trigger').eq(5).click(); //Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(1)
            .click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(7).should('be.visible').click();

        cy.get('.ant-dropdown-trigger').eq(5).click(); //reset Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
            .should('be.visible').click();
        // cy.get('.anticon-close').eq(5).click();
    }







}
export default exl_DataGroups;