const employeeFirstName = "input[id='employee_first_name']";
const employeeLastName = "input[id='employee_last_name']";
const employeeEmail = "input[id='employee_email']";
const employeeIdentification = "input[id='employee_identification']";
const employeeLeaderName = "input[id='employee_leader_name']";
const employeeStartYear = "select[id='employee_start_working_on_1i']";
const employeeStartMonth = "select[id='employee_start_working_on_2i']";
const employeeStartDay = "select[id='employee_start_working_on_3i']";
const submitButton = "input[value='Create Employee']";
const userSuccessfullyCreated = "p[id='notice']";
const backToHomePageLink = "a[href*='employees']";

class NewUserPage{
    fillNewUserForm(newUserData){
       cy.get(employeeFirstName).type(newUserData.user);
       cy.get(employeeLastName).type(newUserData.lastName);
       cy.get(employeeEmail).type(newUserData.employeeEmail);
       cy.get(employeeIdentification).type(newUserData.employeeIdentification);
       cy.get(employeeLeaderName).type(newUserData.Leader);
       cy.get(employeeStartYear).select(newUserData.startYear);
       cy.get(employeeStartMonth).select(newUserData.startMonth);
       cy.get(employeeStartDay).select(newUserData.startDay);
       cy.get(submitButton).click();
    }

    wasUserSuccessfullyCreated(){
        cy.get(userSuccessfullyCreated).contains('Employee was successfully created.').should('be.visible');
    }

    backToHomePage(){
        cy.get(backToHomePageLink).contains('Back').click();
    }
}
export default NewUserPage