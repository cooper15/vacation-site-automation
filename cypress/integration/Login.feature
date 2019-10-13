Feature: Login

   As user I want to login into the application successfully

Scenario: Executing login
    Given Login page is displayed
    When I set my credentials correctly
    Then login banner is displayed with message successfull
    And User login element is displayed
    And Log is displayed
    