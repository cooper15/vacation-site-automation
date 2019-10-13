const userInput = "input[id='user_email']";
const passwordInput = "input[id='user_password']";
const submitButton = "input[name='commit']";

class LoginPage{
    constructor(){}
    navigateToLoginPage(){
        cy.visit('https://vacations-management.herokuapp.com/users/sign_in')
    }

    enterUserAndPassword(user, password){
        cy.get(userInput).type(user);
        cy.get(passwordInput).type(password);
        cy.get(submitButton).click();
    }

}

export default LoginPage