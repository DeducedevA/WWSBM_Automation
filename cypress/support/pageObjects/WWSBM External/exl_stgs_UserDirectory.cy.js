class exl_UserDirectory {

    UserDirectory(Settings, User_Directory) {
        cy.contains(Settings).click(); //sidebar (Settings)
        cy.contains(User_Directory).click(); //sidebar dropdown (Recent History)
    }

    UserCreate(F_name, L_name, email, CA_password, Test, Phone_Num) {
        cy.get('.ant-col-sm-6 > .ant-btn').click();
        cy.get('#firstName').type(F_name);
        cy.get('#lastName').type(L_name);
        cy.get('#email').type(email);
        cy.get('#password').type(CA_password);
        cy.get('#access').click();
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('#credentials').type(Test);
        cy.get('#phoneNumber').type(Phone_Num);
        cy.get('#jobTitle').type(Test);
        cy.get('#organizationName').type(Test);
        cy.get('#timeZone').click();
        cy.get('.ant-select-item-option-content').eq(3).click();
        // cy.get('.w-full > .bg-blue-500').click();
        cy.get('.ant-btn-dangerous').click();
    }

    SearchBar(F_name) {
        cy.get('.ant-input').type(`${F_name}{enter}`).clear();
    }

    EditUser(Test){
        cy.get('.ant-btn-button').eq(0).click();
        cy.get('#jobTitle').clear().type(Test);
        cy.get('.flex > .bg-blue-500').click();
    }

    DeleteUser(){
        cy.get('.ant-btn-button').eq(1).click();
        // cy.get('.flex > .bg-blue-500').click();
        cy.get('.ant-btn-dangerous').click();
    }

}
export default exl_UserDirectory;