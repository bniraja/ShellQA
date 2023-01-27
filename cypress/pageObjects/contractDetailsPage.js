class ContractDetailsPage {
    inContractView(){
        cy.get('*[class^="sc-b8543c4a-2 daBHYz"]').contains('Variabel contract');
    } 
}

export default ContractDetailsPage;