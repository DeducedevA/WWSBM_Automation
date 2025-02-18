import 'cypress-file-upload';

describe('MYWWSBM Workflow', function () {


    it('Patient Details', function () {

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
        cy.wait(8000);


        // chart
        const monthNumber = 0; // January (0-based index for months)
        const date = "16"; // Day to select
        const year = "2025"; // Year to select

        //Patient Detail

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
        cy.get('#rc-tabs-2-tab-1 > span').click();


        // Paricent Received on
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        // Subsequent Scan Date
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(1).click();

        cy.get('#patientName').clear().type('Patient A'); //Patient Name

        // Date of Birth
        cy.get(':nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#age').should('have.value', '0'); //age

        cy.get('#patientPrimaryInsurance').clear().type('XEK125556789'); //Primary Insurance Number

        cy.get('#ssnNumber').clear().type('555501232'); //SSN Number

        cy.get('.ant-select-selector').eq(0).click(); //  Gender dropdown
        cy.contains('.ant-select-item-option-content', 'F').click(); // Specifically selects the 'F' option


        cy.get('.ant-select-selector').eq(1).click(); //Relationship
        cy.contains('OTHER').click();

        cy.get('#subscriberName').clear().type('Test'); // Subscriber Name

        // Subscriber Date of Birth
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(3).click();

        cy.get('.ant-select-selector').eq(2).click(); // Click the Marital Status dropdown
        cy.contains('.ant-select-item-option-content', 'MARRIED').click(); // Select the MARRIED option

        cy.get('#receivedAddress').clear().type('3924 6TH AVE, LOS ANGELES, CA, 90007'); //Address Received in PRF/LMN

        cy.get('#address').clear().type('3924 6TH AVE'); //Address

        cy.get('#city').clear().type('LOS ANGELES'); //City

        cy.get('.ant-select-selector').eq(3).click();
        cy.contains('.ant-select-item-option-content', 'CA').click(); //State

        cy.get('#zipCode').clear().type(63221);

        cy.get(':nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type('(123) 456-7890'); // Phone Number

        cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type('Temtpp@gmail.com'); //Mail ID

        cy.contains('Save').click(); //Save Button
        cy.wait(3000);

    });

    it('Insurance Details', function () {

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
        cy.wait(8000);


        // chart
        const monthNumber = 0; // January (0-based index for months)
        const date = "16"; // Day to select
        const year = "2025"; // Year to select

        // Patient details Save
        cy.contains('Save').click(); //Save Button
        cy.wait(3000);

        // //Insurance Information

        cy.get('.ant-select-selector').eq(4).click() //Portal Availability
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('UNAVAILABLE').click();

        // Insurance Card Recived ON
        // cy.get('.ant-form > :nth-child(1) > :nth-child(1) > .ant-btn > span').click()
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-2 > span').click()

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(5).click(); //Insurance Card
        cy.get('.ant-select-item-option-content', { timeout: 10000 }).contains('YES').should('be.visible').click({ force: true });

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(6).click(); //Multiplan
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('NO').click({ force: true });

        cy.get('#icPayerID').clear().type('85412') //IC Payer ID

        cy.get('#primaryInsurance').clear().type('BOM') //Primary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist'); // Wait for the element to exist
        cy.get('.ant-select-selector').eq(7).click(); //Primary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('COLORADO').click({ force: true });

        cy.get('#primaryInsurancePlan').clear().type('ASO LOCAL PLUS') //Primary Insurance Plan

        cy.get('#primaryInsuranceGroupNumber').clear().type('X0001000') // Primary Insurance Group Number

        cy.get('#secondaryInsurance').clear().type('NONE') // Secondary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(8).click(); //Secondary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('NONE').should('be.visible').click();

        cy.get('#secondaryInsurancePlan').clear().type('NONE') //Secondary Insurance Plan

        cy.get('#secondaryInsuranceNumber').clear().type('NONE') // Secondary Insurance Number

        cy.get('#secondaryInsuranceGroupNumber').clear().type('NONE')// Secondary Insurance Group Number

        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

    });

    it('Order Summary', function () {

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
        cy.wait(8000);


        // chart
        const monthNumber = 0; // January (0-based index for months)
        const date = "16"; // Day to select
        const year = "2025"; // Year to select

        // Patient details Save
        cy.contains('Save').click(); //Save Button
        cy.wait(3000);

        //Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        //Order Summary
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type('ELIVE'); //VF Requested Equipment Model 1

            cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type('A6549'); //HCPCS Code

            cy.get(':nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', 'Compression Stocks'); //Equipment Name

        // Baby Due Date
        // cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > span').click()
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type('A6549'); //HCPCS From Prescription 1

            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', 'Compression Stocks'); //Equipment Model From Prescription

        // order date
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').eq(1).find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').eq(1).find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').eq(1).find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').eq(1).find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-3 > span').click()

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(9).click(); //Prescription Classification
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('LMN - Insufficient_HCPCS').should('be.visible').click();

        cy.get('#orderingPhysicianNpi > .ant-input').clear().type('1861701104'); //Ordering Physician NPI 1
        cy.get('#orderingPhysicianNpi > .ant-btn').click();
        cy.wait(2000);

        //  Prescription Received On
        cy.get(':nth-child(2) > .ant-form-item-has-success > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').eq(2).find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').eq(2).find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').eq(2).find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').eq(2).find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-3 > span').click()

        cy.get('#dxCodes > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type('Z39.1'); //Dx Codes

        cy.get('#pcpNpiNumber > .ant-input').clear().type('1861701104'); //PCP NPI Number
        cy.get('#pcpNpiNumber > .ant-btn').click();
        cy.wait(2000);

        cy.get('#vfTAT').clear().type('3') //VF TAT

        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button

    });

    it('Coverage Details', function () {

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
        cy.wait(8000);


        // chart
        const monthNumber = 0; // January (0-based index for months)
        const date = "16"; // Day to select
        const year = "2025"; // Year to select

        // Patient details Save
        cy.contains('Save').click(); //Save Button
        cy.wait(3000);

        // Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        // order details Save button
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button
        
        //Coverage Summary
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(10).click(); //Calendar Month
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('JANUARY').should('be.visible').click();

        // Coverage Start Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        // Coverage End Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(1).click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(11).click(); //Network Status
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains('INN').should('be.visible').click();


        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(12).click(); // INN Benefit's For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();


        cy.get('#innDedCalendar').clear().type('300'); //INN Ded Calendar/Actual Amount

        cy.get('#innDedMetAmount').clear().type('200'); //INN Ded Met Amount

        cy.get('#innDedBalanceAmount').should('have.value', '100'); //INN Ded Balance Amount

        cy.get('#innCoins').clear().type('200'); //INN Coins

        cy.get('#innOopCalendar').clear().type('150'); //INN OOP Calendar/Actual Amount

        cy.get('#innOopMetAmount').clear().type('100'); //INN OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(13).click(); // OON Benefits For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();

        cy.get('#oonDedCalendar').clear().type('200');  //OON Ded Calendar/Actual Amount

        cy.get('#oonDedMetAmount').clear().type('100'); //OON Ded Met Amount

        cy.get('#oonDedMetAmount').should('have.value', '100'); //OON Ded Balance Amount

        cy.get('#oonCoins').clear().type('100'); // OON Coins

        cy.get('#oonOopCalendar').clear().type('200'); // OON OOP Calendar/Actual Amount

        cy.get('#oonOopMet').clear().type('15'); //OON OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(14).click(); // Auth Required
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(15).click(); // Chart Status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('Approved').should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(16).click(); // S&S Received Equipment In the Last 6 Months?
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(17).click(); // Prescription Availability
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('Completed').should('be.visible').click();

        cy.get('#vfComments').clear().type('A POD is Required to Bill'); //VF Comments

        // Subsequent VF Date
        cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#transaction').clear().type('56697916514') //Transaction ID/SSA

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(19).click(); // Calling Assigned Reason
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('PA Held: Peer Review Required').should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(20).click(); // Delivery Status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();

        // Deleviry Status
        cy.get(':nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-4 > span').click()

        cy.get('#internalNotes').clear().type('N/A');

        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .bg-blue-400')
            .click(); //Save Button
        cy.wait(3000);
        cy.get('.bg-green-400').click(); //Submit button

        // cy.get('.bg-blue-500').click(); //Confirmation button















    });









});
