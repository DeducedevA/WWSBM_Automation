import 'cypress-file-upload';

describe('MYWWSBM Verification Workflow', function () {
    beforeEach(function () {
        // Load credentials from the fixture
        cy.fixture('mywwsbm').then((mywwsbm) => {
          this.vmywwsbm = mywwsbm;
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

        const fileName = this.mywwsbm.VFfile_name // file in fixtures
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
});