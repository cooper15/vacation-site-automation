
import { Given, Then, When, then, And, and } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import NewUser from "../pages/NewUserPage";

const homePage = new HomePage();
const newUserPage =  new NewUser();

beforeEach(function () {
    Cypress.Cookies.preserveOnce('_session_id')
  })

When('click on new user link', () => {
    homePage.createNewUser();
  })

  
And('new user form is populated', () => {
    cy.fixture('newUserData.json').as('data');
    cy.get('@data').then((data) => {
      newUserPage.fillNewUserForm(data);
    })
})
  
Then('a new user is created successfully', () => {
    newUserPage.wasUserSuccessfullyCreated();
    newUserPage.backToHomePage();
    cy.fixture('newUserData.json').as('data');
    cy.get('@data')
    .then((data) => {
        homePage.checkForNewUserWithinTheTable(data);
    })
})

