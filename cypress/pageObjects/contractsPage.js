class ContractPage {
    gotoHomePage() {
        cy.visit(Cypress.config('appUrl'));
        cy.wait(500);
        cy.get('[id$="_evidon-banner-acceptbutton"]').click({force:true});
    }

    enterContractFieldsAndSubmit(){
        cy.get('[id$=postalCode]').type('3543GR');
        cy.get('[id$=houseNumber]').type(87);
        cy.get('[id$=electricityOnPeak]').type(120);
        cy.get('[id$=electricityOffPeak]').type(128);
        cy.get("[type='submit']").click();
    }

}

export default ContractPage;