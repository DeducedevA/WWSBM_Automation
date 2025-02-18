describe('MYWWSBM Workflow', function () {
    it('to customize the calender', function () {

        // URL
        cy.visit("https://testing.mywwsbm.com/internal");
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type('wwsxpropellerr@gmail.com');  // Username
        cy.get('#basic_password').type('XPROwws@123');   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains('Test Facility 1').click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains('E&B Data Integrity Specialist').click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains('Eligibility & Benefits').click(); //sidebar
        cy.contains('Data Groups').click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification



        const monthNumber = 0; // January (0-based index for months)
        const date = "16"; // Day to select
        const year = "2025"; // Year to select

        // internal FTP Date
        // Open the date picker
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click();
        // Switch to year selection and select the year
        cy.get('.ant-picker-year-btn').click();
        cy.contains('.ant-picker-cell-inner', year).click(); // Dynamically selects the year
        // Select the current month (if necessary)
        cy.get('.ant-picker-cell').eq(monthNumber).click(); // Dynamically selects the month
        // Select the current day
        cy.contains('.ant-picker-cell-inner', date).click(); // Dynamically selects the day

        cy.contains('Save').click(); //Save Button
        cy.wait(3000);

        // Insurance Card Recived On

        // cy.get('.ant-form > :nth-child(1) > :nth-child(1) > .ant-btn > span').click()
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel') .eq(1) .find('.ant-picker-year-btn') .click(); 
        cy.get('.ant-picker-panel').eq(1).find('.ant-picker-cell-inner').contains(year).click(); 
        // Select the current month
        cy.get('.ant-picker-panel') .eq(1) .find('.ant-picker-cell').eq(monthNumber).click(); 
        // Select the current day
        cy.get('.ant-picker-panel') .eq(1) .find('.ant-picker-cell-inner').contains(date).click(); 
        cy.get('#rc-tabs-2-tab-2 > span').click()
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        // order date
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
         // Select the current month
         cy.get('.ant-picker-panel') .eq(2) .find('.ant-picker-year-btn') .click(); 
         cy.get('.ant-picker-panel').eq(2).find('.ant-picker-cell-inner').contains(year).click(); 
         // Select the current month
         cy.get('.ant-picker-panel') .eq(2) .find('.ant-picker-cell').eq(monthNumber).click(); 
         // Select the current day
         cy.get('.ant-picker-panel') .eq(2) .find('.ant-picker-cell-inner').contains(date).click(); 
         cy.get('#rc-tabs-2-tab-3 > span').click()

        //  Prescription Received On
        cy.get(':nth-child(2) > .ant-form-item-has-success > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel') .eq(3) .find('.ant-picker-year-btn') .click(); 
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(year).click(); 
        // Select the current month
        cy.get('.ant-picker-panel') .eq(3) .find('.ant-picker-cell').eq(monthNumber).click(); 
        // Select the current day
        cy.get('.ant-picker-panel') .eq(3) .find('.ant-picker-cell-inner').contains(date).click(); 
        cy.get('#rc-tabs-2-tab-3 > span').click()

        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
        .click() // Save button

        // Deleviry Status
        cy.get(':nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel') .eq(4) .find('.ant-picker-year-btn') .click(); 
        cy.get('.ant-picker-panel').eq(4).find('.ant-picker-cell-inner').contains(year).click(); 
        // Select the current month
        cy.get('.ant-picker-panel') .eq(4) .find('.ant-picker-cell').eq(monthNumber).click(); 
        // Select the current day
        cy.get('.ant-picker-panel') .eq(4) .find('.ant-picker-cell-inner').contains(date).click(); 
        cy.get('#rc-tabs-2-tab-4 > span').click()

        

       



    });

});
