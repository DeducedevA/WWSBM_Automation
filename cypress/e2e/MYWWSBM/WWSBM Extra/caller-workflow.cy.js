import 'cypress-file-upload';

describe('MYWWSBM caller Workflow', function () {
    beforeEach(function () {
        // Load credentials from the fixture
        cy.fixture('mywwsbm').then((mywwsbm) => {
            this.mywwsbm = mywwsbm;
        });
    });

    it('System Admin File Upload and Assign to Verification', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL); //Testing Url
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.SA_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.SA_passowrd);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.SA_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        //file upload
        cy.contains(this.mywwsbm.upload_button).click(); //upload button
        cy.get('#project').click()  //select category
        cy.contains('.ant-select-item-option-content', this.mywwsbm.facility).click(); //facility select

        const fileName = this.mywwsbm.CLfile_name// file in fixtures
        cy.get('input[type="file"]').attachFile(fileName); //attaching the file
        cy.contains('Save').click() //file will upload
        cy.wait(10000);

        // Select the first action button
        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(this.mywwsbm.VF_assign).click(); //Assigning to Data Intergrity Speciliast
        cy.contains(this.mywwsbm.split).click(); //Assigning by split method
        cy.get('.ant-select-selection-overflow').click(); //pop up to select members
        cy.contains(this.mywwsbm.VF_user).click(); //Selecting user
        cy.get('.ant-select-selection-overflow').click(); //closing the dropdown
        cy.get('.w-full > .bg-blue-500').click() //confirming the Assinging 
        cy.wait(3000);

        //logout
        cy.get('header button').trigger('mouseover'); //Mouseover to Log Out
        cy.contains(this.mywwsbm.LogOut).click(); //Log out button
        cy.get('.w-full > .bg-blue-500').click() //confirming the log out

    });

    it('Patient Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.VF_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.VF_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.VF_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

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

        cy.get('#patientName').clear().type(this.mywwsbm.patient_name); //Patient Name

        // Date of Birth
        cy.get(':nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#age').should('have.value', '0'); //age

        cy.get('#patientPrimaryInsurance').clear().type(this.mywwsbm.Primary_Ins); //Primary Insurance Number

        cy.get('#ssnNumber').clear().type(this.mywwsbm.SSN); //SSN Number

        cy.get('.ant-select-selector').eq(0).click(); //  Gender dropdown
        cy.contains('.ant-select-item-option-content', this.mywwsbm.gender).click(); // Specifically selects the 'F' option


        cy.get('.ant-select-selector').eq(1).click(); //Relationship
        cy.contains(this.mywwsbm.Relationship).click();

        cy.get('#subscriberName').clear().type(this.mywwsbm.Subscriber_Name); // Subscriber Name

        // Subscriber Date of Birth
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(3).click();

        cy.get('.ant-select-selector').eq(2).click(); //Marital Status
        cy.contains('.ant-select-item-option-content', this.mywwsbm.Marital_Status).click(); // Select the MARRIED option

        cy.get('#receivedAddress').clear().type(this.mywwsbm.Address_Received); //Address Received in PRF/LMN

        cy.get('#address').clear().type(this.mywwsbm.Address); //Address

        cy.get('#city').clear().type(this.mywwsbm.City); //City

        cy.get('.ant-select-selector').eq(3).click();
        cy.contains('.ant-select-item-option-content', this.mywwsbm.State).click(); //State

        cy.get('#zipCode').clear().type(this.mywwsbm.Zip); // Zip Code

        cy.get(':nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type(this.mywwsbm.Phone_Number); // Phone Number

        cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type(this.mywwsbm.Mail_ID); //Mail ID

        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

    });

    it('Insurance Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.VF_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.VF_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.VF_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        // //Insurance Information

        cy.get('.ant-select-selector').eq(4).click() //Portal Availability
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Portal_Availability).click();

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
        cy.get('.ant-select-item-option-content', { timeout: 10000 }).contains(this.mywwsbm.Insurance_Card).should('be.visible').click({ force: true });

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(6).click(); //Multiplan
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Multiplan).click({ force: true });

        cy.get('#icPayerID').clear().type(this.mywwsbm.ICPayer_ID) //IC Payer ID

        cy.get('#primaryInsurance').clear().type(this.mywwsbm.Primary_Insurance) //Primary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist'); // Wait for the element to exist
        cy.get('.ant-select-selector').eq(7).click(); //Primary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.PrimaryInsurance_State).click({ force: true });
        cy.get('#primaryInsurancePlan').clear().type('ASO LOCAL PLUS') //Primary Insurance Plan

        cy.get('#primaryInsuranceGroupNumber').clear().type(this.mywwsbm.PrimaryInsurance_GroupNumber) // Primary Insurance Group Number

        cy.get('#secondaryInsurance').clear().type(this.mywwsbm.Secondary_Insurance) // Secondary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(8).click(); //Secondary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.SecondaryInsurance_State).should('be.visible').click();

        cy.get('#secondaryInsurancePlan').clear().type(this.mywwsbm.SecondaryInsurance_Plan) //Secondary Insurance Plan

        cy.get('#secondaryInsuranceNumber').clear().type(this.mywwsbm.SecondaryInsurance_Number) // Secondary Insurance Number

        cy.get('#secondaryInsuranceGroupNumber').clear().type(this.mywwsbm.SecondaryInsurance_GroupNumber)// Secondary Insurance Group Number

        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();//Save Button
        cy.wait(3000); // save button

    });

    it('Order Summary', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.VF_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.VF_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.VF_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        //Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        //Order Summary
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.VFRequestedEquipment_Model); //VF Requested Equipment Model 1

        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.HCPCS_Code); //HCPCS Code

        cy.get(':nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', this.mywwsbm.Equipment_Name); //Equipment Name

        // Baby Due Date
        // cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > span').click()
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.HCPCS_Prescription); //HCPCS From Prescription 1

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', this.mywwsbm.EquipmentModel_Prescription); //Equipment Model From Prescription

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
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Prescription_Classification).should('be.visible').click();

        cy.get('#orderingPhysicianNpi > .ant-input').clear().type(this.mywwsbm.OrderingPhysician_NPI); //Ordering Physician NPI 1
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
            .clear().type(this.mywwsbm.Dx_Codes); //Dx Codes

        cy.get('#pcpNpiNumber > .ant-input').clear().type(this.mywwsbm.PCP_NPI); //PCP NPI Number
        cy.get('#pcpNpiNumber > .ant-btn').click();
        cy.wait(2000);

        cy.get('#vfTAT').clear().type(this.mywwsbm.VF_TAT) //VF TAT

        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button

    });

    it('Coverage Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.VF_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.VF_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.VF_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        // Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        // order details Save button
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button

        // Coverage Summary
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(10).click(); //Calendar Month
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Calendar_Month).should('be.visible').click();

        // Coverage Start Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        // Coverage End Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(1).click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(11).click(); //Network Status
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Network_Status).should('be.visible').click();


        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(12).click(); // INN Benefit's For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.INN_Benefit).should('be.visible').click();

        cy.get('#innDedCalendar').clear().type(this.mywwsbm.INN_Ded); //INN Ded Calendar/Actual Amount

        cy.get('#innDedMetAmount').clear().type(this.mywwsbm.INN_Ded_Met); //INN Ded Met Amount

        cy.get('#innDedBalanceAmount').should('have.value', this.mywwsbm.INN_Ded_Balance); //INN Ded Balance Amount

        cy.get('#innCoins').clear().type(this.mywwsbm.INN_Coins); //INN Coins

        cy.get('#innOopCalendar').clear().type(this.mywwsbm.INN_OOP); //INN OOP Calendar/Actual Amount

        cy.get('#innOopMetAmount').clear().type(this.mywwsbm.INN_OOP_Met); //INN OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(13).click(); // OON Benefits For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.OON_Benefits).should('be.visible').click();

        cy.get('#oonDedCalendar').clear().type(this.mywwsbm.OON_Ded);  //OON Ded Calendar/Actual Amount

        cy.get('#oonDedMetAmount').clear().type(this.mywwsbm.OON_Ded_Met); //OON Ded Met Amount

        cy.get('#oonDedMetAmount').should('have.value', this.mywwsbm.OON_Ded_Balance); //OON Ded Balance Amount

        cy.get('#oonCoins').clear().type(this.mywwsbm.OON_Coins); // OON Coins

        cy.get('#oonOopCalendar').clear().type(this.mywwsbm.OON_OOP); // OON OOP Calendar/Actual Amount

        cy.get('#oonOopMet').clear().type(this.mywwsbm.OON_OOP_Met); //OON OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(14).click(); // Auth Required
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Auth_Required).should('be.visible').click();

        // cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        // cy.get('.ant-select-selector').eq(15).click();// Chart Status
        // cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
        // .contains(this.mywwsbm.CLchart_Status).should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(15).click(); // Chart Status

        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
            .find('.ant-select-item-option-content')
            .contains(/^VF In-Process$/) // Match the exact text using regex
            .scrollIntoView() // Ensure the element is scrolled into view
            .should('be.visible') // Assert visibility
            .click(); // Click the element




        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(16).click(); // S&S Received Equipment In the Last 6 Months?
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Received_Equipment).should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(17).click(); // Prescription Availability
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Prescription_Availability).should('be.visible').click();

        cy.get('#vfComments').clear().type(this.mywwsbm.VF_Comments); //VF Comments

        // Subsequent VF Date
        cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#transaction').clear().type(this.mywwsbm.Transaction_ID) //Transaction ID/SSA

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(19).click(); // Calling Assigned Reason
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.CallingAssigned_Reason).should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(20).click(); // Delivery Status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Delivery_Status).should('be.visible').click();

        // Deleviry On
        cy.get(':nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-4 > span').click()

        cy.get('#internalNotes').clear().type(this.mywwsbm.Internal_Notes); //Internal Notes

        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .bg-blue-400')
            .click(); //Save Button
        cy.wait(3000);
        cy.get('.bg-green-400').click();
        cy.wait(1000);
        cy.get('.bg-blue-500').click(); //Submit button

        // // End the session
        // cy.get('.ant-dropdown-trigger').trigger('mouseover');
        // cy.contains('End the session').click();
        // //logout
        // cy.get('header button').trigger('mouseover'); //Mouseover to Log Out
        // cy.contains(this.mywwsbm.LogOut).click(); //Log out button
        // cy.get('.w-full > .bg-blue-500').click() //confirming the log out

    });

    it('System Admin assign charts to Caller', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL); //Testing Url
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.SA_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.SA_passowrd);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.SA_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Select the first action button
        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(this.mywwsbm.caller_assign).click(); //Assigning to Data Intergrity Speciliast
        cy.contains(this.mywwsbm.split).click(); //Assigning by split method
        cy.get('.ant-select-selection-overflow').click(); //pop up to select members
        cy.contains(this.mywwsbm.caller_user).click(); //Selecting user
        cy.get('.ant-select-selection-overflow').click(); //closing the dropdown
        cy.get('.w-full > .bg-blue-500').click() //confirming the Assinging 
        cy.wait(3000);

        //logout
        cy.get('header button').trigger('mouseover'); //Mouseover to Log Out
        cy.contains(this.mywwsbm.LogOut).click(); //Log out button
        cy.get('.w-full > .bg-blue-500').click() //confirming the log out

    });

    it('Calling Patient Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.caller_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.caller_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.caller_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

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

        cy.get('#patientName').clear().type(this.mywwsbm.patient_name); //Patient Name

        // Date of Birth
        cy.get(':nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#age').should('have.value', '0'); //age

        cy.get('#patientPrimaryInsurance').clear().type(this.mywwsbm.Primary_Ins); //Primary Insurance Number

        cy.get('#ssnNumber').clear().type(this.mywwsbm.SSN); //SSN Number

        cy.get('.ant-select-selector').eq(0).click(); //  Gender dropdown
        cy.contains('.ant-select-item-option-content', this.mywwsbm.gender).click(); // Specifically selects the 'F' option


        cy.get('.ant-select-selector').eq(1).click(); //Relationship
        cy.contains(this.mywwsbm.Relationship).click();

        cy.get('#subscriberName').clear().type(this.mywwsbm.Subscriber_Name); // Subscriber Name

        // Subscriber Date of Birth
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(3).click();

        cy.get('.ant-select-selector').eq(2).click(); //Marital Status
        cy.contains('.ant-select-item-option-content', this.mywwsbm.Marital_Status).click(); // Select the MARRIED option

        cy.get('#receivedAddress').clear().type(this.mywwsbm.Address_Received); //Address Received in PRF/LMN

        cy.get('#address').clear().type(this.mywwsbm.Address); //Address

        cy.get('#city').clear().type(this.mywwsbm.City); //City

        cy.get('.ant-select-selector').eq(3).click();
        cy.contains('.ant-select-item-option-content', this.mywwsbm.State).click(); //State

        cy.get('#zipCode').clear().type(this.mywwsbm.Zip); // Zip Code

        cy.get(':nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type(this.mywwsbm.Phone_Number); // Phone Number

        cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').clear()
            .type(this.mywwsbm.Mail_ID); //Mail ID

        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

    });

    it('Calling Insurance Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.caller_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.caller_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.caller_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        // //Insurance Information

        cy.get('.ant-select-selector').eq(4).click() //Portal Availability
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Portal_Availability).click();

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
        cy.get('.ant-select-item-option-content', { timeout: 10000 }).contains(this.mywwsbm.Insurance_Card).should('be.visible').click({ force: true });

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(6).click(); //Multiplan
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Multiplan).click({ force: true });

        cy.get('#icPayerID').clear().type(this.mywwsbm.ICPayer_ID) //IC Payer ID

        cy.get('#primaryInsurance').clear().type(this.mywwsbm.Primary_Insurance) //Primary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist'); // Wait for the element to exist
        cy.get('.ant-select-selector').eq(7).click(); //Primary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.PrimaryInsurance_State).click({ force: true });
        cy.get('#primaryInsurancePlan').clear().type('ASO LOCAL PLUS') //Primary Insurance Plan

        cy.get('#primaryInsuranceGroupNumber').clear().type(this.mywwsbm.PrimaryInsurance_GroupNumber) // Primary Insurance Group Number

        cy.get('#secondaryInsurance').clear().type(this.mywwsbm.Secondary_Insurance) // Secondary Insurance

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(8).click(); //Secondary Insurance State
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.SecondaryInsurance_State).should('be.visible').click();

        cy.get('#secondaryInsurancePlan').clear().type(this.mywwsbm.SecondaryInsurance_Plan) //Secondary Insurance Plan

        cy.get('#secondaryInsuranceNumber').clear().type(this.mywwsbm.SecondaryInsurance_Number) // Secondary Insurance Number

        cy.get('#secondaryInsuranceGroupNumber').clear().type(this.mywwsbm.SecondaryInsurance_GroupNumber)// Secondary Insurance Group Number

        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();//Save Button
        cy.wait(3000); // save button

    });

    it('Calling Order Summary', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.caller_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.caller_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.caller_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        //Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        //Order Summary
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.VFRequestedEquipment_Model); //VF Requested Equipment Model 1

        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.HCPCS_Code); //HCPCS Code

        cy.get(':nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', this.mywwsbm.Equipment_Name); //Equipment Name

        // Baby Due Date
        // cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > span').click()
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .clear().type(this.mywwsbm.HCPCS_Prescription); //HCPCS From Prescription 1

        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-carousel > .slick-slider > .slick-list > .slick-track > .slick-slide > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
            .should('have.value', this.mywwsbm.EquipmentModel_Prescription); //Equipment Model From Prescription

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
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Prescription_Classification).should('be.visible').click();

        cy.get('#orderingPhysicianNpi > .ant-input').clear().type(this.mywwsbm.OrderingPhysician_NPI); //Ordering Physician NPI 1
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
            .clear().type(this.mywwsbm.Dx_Codes); //Dx Codes

        cy.get('#pcpNpiNumber > .ant-input').clear().type(this.mywwsbm.PCP_NPI); //PCP NPI Number
        cy.get('#pcpNpiNumber > .ant-btn').click();
        cy.wait(2000);

        cy.get('#vfTAT').clear().type(this.mywwsbm.VF_TAT) //VF TAT

        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button

    });

    it('Calling Coverage Details', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.caller_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.caller_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.caller_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);


        // chart
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        // Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        // order details Save button
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click() // Save button

        // Coverage Summary
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(10).click(); //Calendar Month
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Calendar_Month).should('be.visible').click();

        // Coverage Start Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        // Coverage End Date
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(1).click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(11).click(); //Network Status
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(this.mywwsbm.Network_Status).should('be.visible').click();


        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(12).click(); // INN Benefit's For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.INN_Benefit).should('be.visible').click();

        cy.get('#innDedCalendar').clear().type(this.mywwsbm.INN_Ded); //INN Ded Calendar/Actual Amount

        cy.get('#innDedMetAmount').clear().type(this.mywwsbm.INN_Ded_Met); //INN Ded Met Amount

        cy.get('#innDedBalanceAmount').should('have.value', this.mywwsbm.INN_Ded_Balance); //INN Ded Balance Amount

        cy.get('#innCoins').clear().type(this.mywwsbm.INN_Coins); //INN Coins

        cy.get('#innOopCalendar').clear().type(this.mywwsbm.INN_OOP); //INN OOP Calendar/Actual Amount

        cy.get('#innOopMetAmount').clear().type(this.mywwsbm.INN_OOP_Met); //INN OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(13).click(); // OON Benefits For DME
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.OON_Benefits).should('be.visible').click();

        cy.get('#oonDedCalendar').clear().type(this.mywwsbm.OON_Ded);  //OON Ded Calendar/Actual Amount

        cy.get('#oonDedMetAmount').clear().type(this.mywwsbm.OON_Ded_Met); //OON Ded Met Amount

        cy.get('#oonDedMetAmount').should('have.value', this.mywwsbm.OON_Ded_Balance); //OON Ded Balance Amount

        cy.get('#oonCoins').clear().type(this.mywwsbm.OON_Coins); // OON Coins

        cy.get('#oonOopCalendar').clear().type(this.mywwsbm.OON_OOP); // OON OOP Calendar/Actual Amount

        cy.get('#oonOopMet').clear().type(this.mywwsbm.OON_OOP_Met); //OON OOP Met Amount

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(14).click(); // Auth Required
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Auth_Required).should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(15).click(); // Chart Status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.CLchart_Status)
            .should('be.visible').click();


        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(16).click(); // S&S Received Equipment In the Last 6 Months?
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains('YES').should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(17).click(); // Prescription Availability
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Prescription_Availability).should('be.visible').click();

        cy.get('#vfComments').clear().type(this.mywwsbm.VF_Comments); //VF Comments

        // Subsequent VF Date
        cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').eq(2).click();

        cy.get('#transaction').clear().type(this.mywwsbm.Transaction_ID) //Transaction ID/SSA

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(19).click(); // Calling Assigned Reason
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.CallingAssigned_Reason).should('be.visible').click();

        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(20).click(); // Delivery Status
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Delivery_Status).should('be.visible').click();

        // Deleviry On
        cy.get(':nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-year-btn').click();
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(year).click();
        // Select the current month
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell').eq(monthNumber).click();
        // Select the current day
        cy.get('.ant-picker-panel').eq(3).find('.ant-picker-cell-inner').contains(date).click();
        cy.get('#rc-tabs-2-tab-4 > span').click()

        cy.get('#internalNotes').clear().type(this.mywwsbm.Internal_Notes); //Internal Notes

        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .bg-blue-400')
            .click(); //Save Button

        // // End the session
        // cy.get('.ant-dropdown-trigger').trigger('mouseover');
        // cy.contains('End the session').click();
        // //logout
        // cy.get('header button').trigger('mouseover'); //Mouseover to Log Out
        // cy.contains(this.mywwsbm.LogOut).click(); //Log out button
        // cy.get('.w-full > .bg-blue-500').click() //confirming the log out

    });

    it('Calling Caller Space', function () {

        // URL
        cy.visit(this.mywwsbm.Internal_URL);
        cy.wait(10000);

        // Login details
        cy.get('#basic_email').type(this.mywwsbm.caller_username);  // Username
        cy.get('#basic_password').type(this.mywwsbm.caller_password);   // Password
        cy.get('div span #basic_project').click(); // Facility name
        cy.contains(this.mywwsbm.facility).click(); //dropdown
        cy.get('div span #basic_role').click(); // User role
        cy.contains(this.mywwsbm.caller_role).click(); //dropdown

        // Sign in button
        cy.get('button').click(); //logging IN
        cy.wait(3000);

        // Home page navigation
        cy.contains(this.mywwsbm.EB).click(); //sidebar
        cy.contains(this.mywwsbm.Data_Groups).click(); //sidebar dropdown

        // Selecting the Data Group
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').last().click();  // Selects the last item in the dropdown
        cy.get('.ant-form-item-control-input-content > .ant-btn').click() //Starting the Verification
        cy.wait(8000);

        // Caller Space
        const monthNumber = this.mywwsbm.month; // January (0-based index for months)
        const date = this.mywwsbm.date; // Day to select
        const year = this.mywwsbm.year; // Year to select

        // Patient details Save
        cy.contains(this.mywwsbm.Save_btn).click(); //Save Button
        cy.wait(3000);

        // Insurance Save Button
        cy.get('#rc-tabs-2-panel-2 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();        //Save Button
        cy.wait(3000); // save button

        // order details Save button
        cy.get('#rc-tabs-2-panel-3 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
            .click()
        cy.wait(3000);// Save button

        // Coverage Summary save button
        cy.get('#rc-tabs-2-panel-4 > :nth-child(1) > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .bg-blue-400')
            .click(); //Save Button
        cy.wait(3000);

        // Verify Calling Completed On
        cy.get('#rc-tabs-2-panel-5 > .ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click()
        cy.get('.ant-picker-now-btn').click();

        // called by
        cy.get('#calledBy').should('have.value', this.mywwsbm.caller_user);

        // Insurance Phone Number
        cy.get('#insurancePhoneNumber').clear().type(this.mywwsbm.Phone_Number);

        // PCB
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(21).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Delivery_Status).should('be.visible').click();

        // Notes
        cy.get('#callingComments', { timeout: 10000 }).should('be.visible').and('not.be.disabled')
            .clear().type(this.mywwsbm.notes || 'Default Note'); // Use fallback if undefined

        // Reference Number
        cy.get('#callRefNumber', { timeout: 10000 }).should('be.visible').and('not.be.disabled').clear()
            .type(this.mywwsbm.RF_number);

        // Payer ID
        cy.get('#callingPayerId').clear().type(this.mywwsbm.payer_ID);

        // Calling Mode
        cy.get('#callMode').clear().type(this.mywwsbm.call_mode);

        // Operator
        cy.get('#operator').clear().type(this.mywwsbm.operator);

        // Start Time
        cy.get('#startTime').clear().type(this.mywwsbm.Start_Time);

        // End Time
        cy.get('#endTime').clear().type(this.mywwsbm.End_Time)
        cy.get(':nth-child(6) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > :nth-child(1) > .ant-picker-footer > .ant-picker-ranges > .ant-picker-ok > .ant-btn').click();

        // ACH
        cy.get('#ach').should('have.value', this.mywwsbm.ACH).click();

        //Call Disposition Code
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(22).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.Call_Disposition_Code).should('be.visible').click();

        // CR Disposition Code
        cy.get('.ant-select-selector', { timeout: 10000 }).should('exist');
        cy.get('.ant-select-selector').eq(23).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option-content')
            .contains(this.mywwsbm.CR_Disposition_Code).should('be.visible').click();

        cy.get('#rc-tabs-2-panel-5 > .ant-form > :nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > [type="submit"]')
            .click(); // Save button
            cy.wait(3000);

            cy.get(':nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > [type="button"]')
            .click();//Submit
            cy.get('.bg-blue-500').click()//yes


        

        




    });



});


