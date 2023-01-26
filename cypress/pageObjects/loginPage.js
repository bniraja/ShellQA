class LoginPage {
    clickonMyAccount() {
        cy.visit(Cypress.config('appUrl'));
        cy.wait(500);
        cy.get('[id$="_evidon-banner-acceptbutton"]').click();
        cy.contains('a', 'Mijn account').click();
        cy.wait(500);
        cy.get('[id$="_evidon-banner-acceptbutton"]').click();
    }
    enterUsername(username){
        cy.get('form', ).within(($form) => {
            // cy.get() will only search for elements within form,
            // not within the entire document
            cy.get('[id$="input-7"]').type(username, {force: true});¬
            //cy.get('input[name="email"]').type(username, {force: true});
        });
    }

    enterPassword(password){
        cy.get('form', ).within(($form) => {
            // cy.get() will only search for elements within form,
            // not within the entire document
            cy.get('[id$="input-8"]').type(password, {force: true});
            //cy.get('input[name="password"]').type(password, {force: true});
        });
        //cy.contains('div', 'email').type(password);
    }
    submit(){
        cy.get('form', ).within(($form) => {
            cy.contains('button', 'submit').click({force: true});
        });
       
    }
    errorMessage(){
        cy.get('[id$=help-message-8]').contains('Oeps, dit klopt niet!');
    }

}
export default LoginPage;