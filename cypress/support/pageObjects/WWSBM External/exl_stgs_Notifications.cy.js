class exl_notifications{

    Notification(Settings, Notifications){
        cy.contains(Settings).click(); //sidebar
        cy.contains(Notifications).click(); //sidebar dropdown (Settings)
    }

    SearchBar(TopSearchBar){
        cy.get('.ant-input').type(TopSearchBar).wait(2000);
        cy.get('.ant-input').clear();
    }

    Status(){
        cy.get('.ant-select-selection-item').eq(0).click();
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('.ant-select-selection-item').eq(0).click();
        cy.get('.ant-select-item-option-content').eq(0).click();
    }
    DateRange(startDate_Nofo, endDate_Nofo){
        // Date Range 
        cy.get('.ant-picker-input').eq(0).type(startDate_Nofo + '{enter}');
        cy.get('.ant-picker-input').eq(1).type(endDate_Nofo + '{enter}');
    }

}
export default exl_notifications