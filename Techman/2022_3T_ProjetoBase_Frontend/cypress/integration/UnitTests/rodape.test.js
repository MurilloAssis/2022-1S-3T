describe("Componente - Rodape", () => {

    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    it("Deve existir uma tag footer no corpo do documento", ()=>{
        cy.get("footer").should("exist");
    });

    it("Deve conter o texto da Escola SENAI",()=>{
        cy.get('footer section div p').should('have.text', 'Escola SENAI de Informática - 2021')
    });

    it("Deve verificar se a TAG footer está visível se possui uma classe chamada rodapePrincipal",()=>{
        cy.get('footer').should('be.visible').and('have.class', 'rodapePrincipal');
    });
});