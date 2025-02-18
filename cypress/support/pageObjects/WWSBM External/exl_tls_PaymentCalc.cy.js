class exl_paymentcalc{

    PaymentCalc(Tools, PaymentCalc){
        cy.contains(Tools).click(); //sidebar (Settings)
        cy.contains(PaymentCalc).click(); //sidebar dropdown (Payer Exclusion List)
    }

    Form(Num1, Num2){

        cy.get('#allowedAmount').type(Num1);
        cy.get('#deductibleRemaining').type(Num2);
        cy.get('#coinsurancePercentage').type(Num1);
        cy.get('#oopmRemaining').type(Num2);
        cy.get('.ant-btn-primary').eq(0).click();
        cy.wait(1000);
        cy.get('.ant-btn-default').click();
    }
}
export default exl_paymentcalc;
