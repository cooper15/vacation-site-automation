import { Given, Then, When, then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const loginPage = new LoginPage();

beforeEach(function () {
  Cypress.Cookies.preserveOnce('_session_id')
})

Given('Login page is displayed', () => {
  loginPage.navigateToLoginPage();
})

When('I set my credentials correctly', () => {
  cy.fixture('gap_data.json').as('data');
  cy.get('@data')
  .then((data) => {
    loginPage.enterUserAndPassword(data.user, data.password);
  })
})

Then('login banner is displayed with message successfull', () => {
  var homePage = new HomePage();
  homePage.isLoginSuccessfulBannerDisplayed();
  homePage.isUserLoginElementDisplayed();  
})

And('User login element is displayed', () => {
  var homePage = new HomePage();
  homePage.isUserLoginElementDisplayed();  
})

And('Log is displayed', () => {
  var homePage = new HomePage();
  homePage.isLogoDisplayed();
})
