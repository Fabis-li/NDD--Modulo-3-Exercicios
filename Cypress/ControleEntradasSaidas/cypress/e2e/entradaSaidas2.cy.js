context('EntradaSaidaEx2', () => {
    before(() => {
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')
    });

    it('Entrada1', () => {
        cy.get('#txtN1').type('Caneta')
        cy.get('#txtV1').type('234')
        cy.get('#txtN2').type('Folha A4')
        cy.get('#txtV2').type('530')

        cy.get('#btnNovaEntradaSaida').click()
        cy.get('#btnLimpar').click()
    });
    it('Entrada2', () => {
        cy.get('#txtN1').type('Lápis')
        cy.get('#txtV1').type('4320')        

        cy.get('#btnNovaEntradaSaida').click()
        cy.get('#btnLimpar').click()
    });
    it('Entrada3', () => {
        cy.get('#txtN1').type('Bolsa')
        cy.get('#txtV1').type('135')
        cy.get('#txtN2').type('Caderno')
        cy.get('#txtV2').type('1200')
        cy.get('#txtN3').type('Livros')
        cy.get('#txtV3').type('1200')        

        cy.get('#btnNovaEntradaSaida').click()
        cy.get('#btnLimpar').click()
    });

});