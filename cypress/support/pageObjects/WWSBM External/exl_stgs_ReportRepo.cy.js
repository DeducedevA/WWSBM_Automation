class exl_reportrepo {

    ReportRepo(Settings, Report_Repository) {
        cy.contains(Settings).click(); //sidebar (Settings)
        cy.contains(Report_Repository).click(); //sidebar dropdown (Report Repository)
    }

    MonthlyReport(FileName, OK, Confirm) {
        cy.get('.ant-picker-input').eq(0).click({force: true}); //month picker
        cy.get('.ant-picker-cell-inner').eq(0).click();

        cy.get('.ant-btn-primary').eq(0).click(); //View Report
        cy.get('.anticon-close').click(); //close

        cy.get('.ant-btn-primary').eq(1).click(); //Download Report

        cy.get('.ant-btn-primary').eq(2).click(); //Email Delivery
        cy.get('#fileName').type(FileName);

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        cy.get('.ant-picker-input input').eq(4).clear().type(formattedDate + '{enter}');
        cy.get('.ant-picker-input input').eq(5).clear().type(formattedDate + '{enter}');

        cy.get('.ant-select-selector').eq(1).click();
        cy.get('.ant-select-item-option-content').click();

        cy.get('#notifyTime').click();
        cy.get('.ant-picker-time-panel-cell-inner').eq(5).click();
        cy.get('.ant-picker-time-panel-cell-inner').eq(10).click();
        cy.contains(OK).click({force: true});
        cy.contains(Confirm).click();

    }

    WeeklyReport(FileName, OK, Confirm) {
        cy.get('.ant-picker-input').eq(1).click({force: true}); //weekly date picker
        cy.get('.ant-picker-week-panel-row').eq(0).click();

        cy.get('.ant-btn-primary').eq(0).click({force: true}); //View Report
        cy.get('.anticon-close').eq(1).click();

        cy.get('.ant-btn-primary').eq(4).click({force: true}); //Download Report
       
        cy.get('.ant-btn-primary').eq(2).click(); //Email Delivery
        cy.get('#fileName').type(FileName);

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        cy.get('.ant-picker-input input').eq(4).clear().type(formattedDate + '{enter}');
        cy.get('.ant-picker-input input').eq(5).clear().type(formattedDate + '{enter}');

        cy.get('.ant-select-selector').eq(1).click();
        cy.get('.ant-select-item-option-content').click();

        cy.get('#notifyTime').click();
        cy.get('.ant-picker-time-panel-cell-inner').eq(5).click({force: true});
        cy.get('.ant-picker-time-panel-cell-inner').eq(10).click();
        cy.contains(OK).click();
        cy.contains(Confirm).click();

    }

    DailyReport(RepoDate1, RepoDate2, FileName, OK, Confirm) {


        cy.get('.ant-picker-input').eq(3).type(RepoDate2 + '{enter}');
        cy.get('.ant-picker-input').eq(2).type(RepoDate1 + '{enter}');// date picker
        cy.get('.ant-btn-primary').eq(7).click(); //Download Report
        cy.get('.ant-btn-primary').eq(8).click(); //Email Delivery
        cy.get('#fileName').type(FileName);

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        cy.get('.ant-picker-input input').eq(4).clear().type(formattedDate + '{enter}');
        cy.get('.ant-picker-input input').eq(5).clear().type(formattedDate + '{enter}');

        cy.get('.ant-select-selector').eq(1).click();
        cy.get('.ant-select-item-option-content').click();

        cy.get('#notifyTime').click();
        cy.get('.ant-picker-time-panel-cell-inner').eq(5).click();
        cy.get('.ant-picker-time-panel-cell-inner').eq(10).click();

        cy.contains(OK).click();
        cy.contains(Confirm).click();

    }

    ManageReports(Test){

        cy.get('.ant-tabs-tab-btn').eq(1).click(); //edit file name
        cy.get('.ant-typography').eq(0).click();
        cy.get('#fileName').clear().type(Test);
        cy.get(':nth-child(1) > .ant-typography');

        cy.get('.ant-typography').eq(0).click(); //Delete scheduled mail
        cy.get('.grid > :nth-child(2)').click();

    }


}
export default exl_reportrepo;


