class exl_editprofile{

    EditProfile(Settings, Edit_Profile){
        cy.contains(Settings).click(); //sidebar (Settings)
        cy.contains(Edit_Profile).click(); //sidebar dropdown (Edit Profile)
    }

    EditName(F_name, L_name){
        cy.get('#firstName').clear().type(F_name); //First Name
        cy.get('#lastName').clear().type(L_name); //Last Name
        cy.get('.ant-form-item-control-input-content > .ant-btn').click(); //save button
    }

    EditToggle(){
        cy.get('.ant-switch-handle').eq(0).click(); //2FA On
        cy.get('.ant-switch-handle').eq(0).click(); //2FA Off

        cy.get('.ant-switch-handle').eq(1).click(); //Password Reset Policy On
        cy.get('.ant-switch-handle').eq(1).click(); //Password Reset Policy Off
    }

    ChangePassword(CA_password){
        cy.get('.ant-btn-link').eq(1).click();
        cy.get('#currentPassword').type(CA_password);
        cy.get('#newPassword').type(CA_password);
        cy.get('#confirmPassword').type(CA_password);
        // cy.get(':nth-child(4) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
    }

}
export default exl_editprofile