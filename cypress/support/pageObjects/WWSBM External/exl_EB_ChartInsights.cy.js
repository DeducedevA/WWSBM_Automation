class exl_ChartInsights {

    chartinsights(EB, Charts_Insights) {
        cy.contains(EB).click(); //sidebar
        cy.contains(Charts_Insights).click(); //sidebar dropdown (Chart Insights)
    }

    CIfilters(){
         //Facility filter
         cy.get('.ant-dropdown-trigger').eq(1).click( {force: true});
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(0)
             .click({ force: true });
         cy.get('button.ant-btn-primary.ant-btn-sm').should('be.visible').click();
 
         cy.get('.ant-dropdown-trigger').eq(1).click(); //reset Filter
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
             .should('be.visible').click();
 
         //Data Group ID
         cy.get('.ant-dropdown-trigger').eq(2).click();
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)', { timeout: 5000 }).should('be.visible');
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner')
             .eq(1).click({ force: true });
         cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click();
 
         cy.get('.ant-dropdown-trigger').eq(2).click(); //reset Filter
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
         cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm')
             .should('be.visible').click();
    }

    chart(){
         //Charts    
         cy.get('.ant-btn-button').eq(0).click();// view Charts
         cy.get(':nth-child(2) > .ant-btn > span').click();//Patient Details
         cy.get('#rc-tabs-0-tab-2').click(); //Insurance Information
         cy.get('#rc-tabs-0-tab-3').click(); //Order Summary
         cy.get('#rc-tabs-0-tab-4').click(); //LMN Validation
         cy.get('#rc-tabs-0-tab-5').click(); //Coverage Summary
         cy.get('.flex > .anticon-close > svg').eq(1).click();
    }

    

}
export default exl_ChartInsights;