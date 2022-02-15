describe('Integração - OCR', () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    it('Deve logar e Cadastrar um equipamento', ()=>{
        //Login
        cy.get(".cabecalhoPrincipal-nav-login").should('exist');
        cy.get(".cabecalhoPrincipal-nav-login").click();

        cy.get(".input__login").first().type("paulo@email.com");
        cy.get(".input__login").last().type("123456789");
        cy.get(".btn__login").click();

        //Fim Login

        //Valor OCR
        cy.get("input[type=file]").first().selectFile("src/assets/tests/equipamento.jpeg")

        cy.wait(300)
        cy.get("#codigoPatrimonio").should('have.value', '1202529')

        //Fim valor OCR

        //Nome equipamento
        cy.get("input[type=text]").first().type('teste');

        //Fim nome equipamento

        //Foto equipamento
        cy.get("input[type=file]").last().selectFile("src/assets/tests/134223541_1SZ.png")

        //Fim foto equipamento

    

        //Clique botão cadastrar
        cy.get("button").first().click();
    });

    it("Deve logar e excluir um equipamento", ()=>{

        //Login
        cy.get(".cabecalhoPrincipal-nav-login").should('exist');
        cy.get(".cabecalhoPrincipal-nav-login").click();

        cy.get(".input__login").first().type("paulo@email.com");
        cy.get(".input__login").last().type("123456789");
        cy.get(".btn__login").click();
        //Fim Login

        //Excluir

        cy.get(".excluir").first().click();
    })
});