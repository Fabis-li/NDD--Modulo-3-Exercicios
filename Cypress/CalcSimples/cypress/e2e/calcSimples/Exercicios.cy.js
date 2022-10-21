context('testesExerc', () => {

    before(() => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')
    });

    afterEach(() => {
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()
    });
    it('Calc10+123', () => {       
        
        cy.get('#txtN1').type(10)
        cy.get('#txtN2').type(123)        
        
    });

     it('Calc35-25', () => {
        cy.get('#txtN1').type(35)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(25) 
     });

     it('Calc5*55', () => {
        cy.get('#txtN1').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(55) 
     });

     it('Calc20*2', () => {
        cy.get('#txtN1').type(20)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(2) 
     });     
     it('Calc70--45', () => {
        cy.get('#txtN1').type(70)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(-45) 
     });

     it('tabuada', () => {
        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(1) 
     });    
});