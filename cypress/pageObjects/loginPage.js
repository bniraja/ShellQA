class LoginPage {
    clickonMyAccount() {
        cy.contains('a', 'Mijn account').click();
        cy.wait(500);
        cy.get('[id$="_evidon-banner-acceptbutton"]').click();
        cy.contains("Log in op je account");
    }

    enterUsername(username){
      cy.xpath("//input[@id='input-7']").type(username);
    }

    enterPassword(password){
      cy.xpath("//input[@id='input-8']").type(password);
    }

    submit(){
        cy.get('[data-item-id="ead2c93f-3251-464f-909d-0ae90942d36c"]').within(() => {
          // cy.get() will only search for elements within form,
          // not within the entire document
          cy.get('form').within(($form) => {
            cy.root().submit();
          });
        });
    }
    
    errorMessageDisplayed(){
        cy.xpath('//*[@id="help-message-8"]').contains('Oeps, dit klopt niet!');
    }
}
export default LoginPage;