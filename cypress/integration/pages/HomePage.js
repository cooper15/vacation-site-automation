const newUserLink = "a[href*='employees/new']";

class HomePage{
    isLoginSuccessfulBannerDisplayed(){
        cy.get("p[class='flash_notice']").should('be.visible');
    }

    isUserLoginElementDisplayed(){
        cy.get("a[href*='sign_out']").should('be.visible');
    }

    isLogoDisplayed(){
        cy.get("div[id='logo']").should('be.visible');
    }

    createNewUser(){
        cy.get(newUserLink).click();
    }

    checkForNewUserWithinTheTable(data){
        getNewUserRow(data);
    }
}
export default HomePage

function getNewUserRow(data) {
    cy.get('tr').each(function ($el) {
        $el.each(function (index, value) {
            const val = Cypress.$(value);
            val.find('td').each(function (i, anVal) {
                const td = Cypress.$(anVal);
                if (td.text() == data.Leader){
                    const row = Cypress.$(value);
                    cy.wrap(row).contains(data.user).should('be.visible');
                    cy.wrap(row).contains(data.lastName).should('be.visible');
                    cy.wrap(row).contains(data.employeeIdentification).should('be.visible');
                    cy.wrap(row).contains("01/"+ data.startDay + "/" + data.startYear).should('be.visible');
                    cy.wrap(row).contains("Delete").should('be.visible').click();
                }
                  
            });
        });
    });
    
}
