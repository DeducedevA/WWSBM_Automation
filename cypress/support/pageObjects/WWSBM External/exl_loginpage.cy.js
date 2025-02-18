class exl_loginpage {
    login(CA_username, CA_password, RM_username, RM_password, VV_username, VV_password) {
        cy.get('#basic_email', { timeout: 20000 }).should('be.visible').type(CA_username,RM_username, VV_username);;
        cy.get('#basic_password').type(CA_password, RM_password, VV_password);
        // Sign in button
        cy.get('button').click(); // Logging in
        cy.wait(3000);
    }

    homepage(home) {
        //Home Page
        cy.get('.whitespace-nowrap').eq(0).click(); // Search by patient
        cy.contains(home).click({force: true});
        cy.get('.whitespace-nowrap').eq(1).click(); //Access Report Repository
        cy.contains(home).click({force: true});
    }

    GlobalSearch(Patient_name) {
        cy.get('#rc_select_0').type(Patient_name); //search bar
        cy.get('.ant-select-item-option').eq(0).click();
        cy.wait(2000);
        cy.get('.ant-btn-button').eq(0).click(); //view chart
        cy.get('.ant-btn-button').eq(1).click({force: true});
        cy.get('.ant-btn-button').eq(2).click({force: true});
        cy.get('.ant-btn-button').eq(3).click({force: true});
        cy.get('.ant-btn-button').eq(4).click({force: true});
        cy.get('.anticon-close').eq(0).click();
    }

    Filters(Start_Date, End_Date, DeliveredOn, Internal_FTP, Primary_Insurance, Caller, Verifier) {
        cy.get('.ant-picker-input').eq(0).type(Start_Date + '{enter}'); //Date Range
        cy.get('.ant-picker-input').eq(1).type(End_Date + '{enter}');

        cy.get('.ant-picker-input').eq(2).type(DeliveredOn); //delevired date

        cy.get('.ant-picker-input').eq(3).type(Internal_FTP); //prescription recived ON

        cy.get('.ant-select-selection-overflow').eq(0).click(); //primary insurance
        // cy.get('.ant-select-item-option-content').eq(3).click({force: true});
        cy.contains(Primary_Insurance).click();

        cy.get('.ant-select-selection-overflow').eq(1).click(); //chart status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(/^Approved$/) // Match the exact text using regex
            .scrollIntoView() // Ensure the element is scrolled into view
            .should('be.visible') // Assert visibility
            .click(); // Click the element

        cy.get('.ant-select-single').eq(1).click();  //Deleviry Status
        cy.get('.ant-select-dropdown [title="YES"]').eq(0).click();

        cy.get('.ant-select-single').eq(2).click(); // resolovable status
        cy.get('.ant-select-dropdown [title="YES"]').eq(1).click();

        cy.get('.ant-select-single').eq(3).click(); //Additional Info
        cy.get('.ant-select-dropdown [title="YES"]').eq(2).click();

        cy.get('.ant-select-selection-overflow').eq(2).click();
        cy.contains(Caller).click();

        cy.get('.ant-select-selection-overflow').eq(3).click();
        cy.contains(Verifier).click();

    }
}

export default exl_loginpage;
