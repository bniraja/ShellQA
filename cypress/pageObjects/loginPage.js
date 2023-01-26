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
      //  cy.get('form', ).within(($form) => {
            // cy.get() will only search for elements within form,
            // not within the entire document
             cy.get('[id$="input-7"]').type(username, {force: true});
            //cy.get('input[name="email"]').type(username, {force: true});
        }
    

    enterPassword(password){
       /// cy.get('form', ).within(($form) => {
            // cy.get() will only search for elements within form,
            // not within the entire document
          cy.get('[id$="input-8"]').type(password, {force: true});
            //cy.get('input[name="password"]').type(password, {force: true});
        };
        //cy.contains('div', 'email').type(password);
    
    submit()
    {
        describe('Service Now TEST login', () => {
            it('Login TEST', () => {
              //Catch Exception
              Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })
              cy.wait(2000)
              cy.get('.form-control', {
                timeout: 10000,
              })
                .should('be.visible')
                .then(() => {
                  cy.get('#input-7').type('username')
                  cy.get('#input-8').type('password')
                  cy.contains('button', 'submit').click({force: true});
                })
            })
          })
           // cy.contains('button', 'submit').click({force: true});
        };
       
    
    errorMessage()
    {
        cy.get('[id$=help-message-8]').contains('Oeps, dit klopt niet!');
    }
}
export default LoginPage;