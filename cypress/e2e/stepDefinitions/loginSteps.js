/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/loginPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const loginPage = new LoginPage();

Then("the user click on Mijn account link", () => {
    loginPage.clickonMyAccount();
});

When("the user enters an invalid {string} and {string} into the login form", (username, password) => {
   loginPage.enterUsername(username);
   loginPage.enterPassword(password);
}); 

Then("submits the form", () => {
    loginPage.submit();
});

Then("an error message is displayed", () => {
    loginPage.errorMessageDisplayed();
});

