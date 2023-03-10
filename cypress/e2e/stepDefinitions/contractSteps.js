/// <reference types="Cypress" />
import ContractPage from '../../pageObjects/contractsPage'
import ContractDetailsPage from '../../pageObjects/contractDetailsPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const contractPage = new ContractPage();
const contractPageDetails = new ContractDetailsPage();

Given("the user is on the home page", () => {
    contractPage.gotoHomePage();
})

When("enters the details and submits", () => {
    contractPage.enterContractFieldsAndSubmit();
}) 

Then("Variable Contract View is displayed", () => {
    cy.wait(5000);
    contractPageDetails.inContractView();
})

