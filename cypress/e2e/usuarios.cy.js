describe('Usuarios API Tests', () => {

    it('Deve cadastrar novo usuario', () => {
        let numero = Math.floor(Math.random() * 100000000)
        let novoUsuario = {
            nome: "Usuario de Teste",
            email: `usuario.teste${numero}@example.com`,
            password: "senha123",
            administrador: "true"
        };

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: novoUsuario
        }).then(response => {
            cy.log(response.body)
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty
        })
    });

    it('Deve falhar ao cadastrar novo usuario com dados existentes', () => {
        let novoUsuario = {
            nome: "Fulano da Silva",
            email: `beltrano@qa.com.br`,
            password: "teste",
            administrador: "true"
        };

        cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: novoUsuario
        }).then(response => {
            cy.log(response.body)
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq('Este email já está sendo usado')
        })
    });

    it('Deve buscar usuário por ID', () => {
        let usuario = 'areiCxWcAbHarIty'
        let numero = Math.floor(Math.random() * 100000000)
        const emailUsuario = `usuario.teste${numero}@example.com`
        let novoUsuario = {
            nome: "Usuario de Teste",
            email: emailUsuario,
            password: "senha123",
            administrador: "true"
        };

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: novoUsuario
        }).then(response => {
            cy.log(response.body)
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty
            usuario = response.body._id
        })

        cy.request({
            method: 'GET',
            url: `https://serverest.dev/usuarios/${usuario}`
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.nome).to.eq(novoUsuario.nome)
            //expect(response.body.email).to.eq(emailUsuario)
            expect(response.body.password).to.eq(novoUsuario.password)
            expect(response.body._id).to.not.be.empty
        })
    });

    it('Deve falhar na busca por usuário inexistente', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: `https://serverest.dev/usuarios/areiCxWcAbHarIto`
        }).then(response => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq("Usuário não encontrado")
        })
    });

    it('Deve excluir usuário  por ID', () => {
    });

    it('Deve editar usuário por ID', () => {
        let usuario = 'Jm3vYHUIdxNsUqYC'
        let numero = Math.floor(Math.random() * 100000000)
        const emailUsuario = `usuario.teste${numero}@example.com`
        const emailEdição = `usuario.teste.edicao${numero}@example.com`
        let novoUsuario = {
            nome: "Usuario de Teste",
            email: emailUsuario,
            password: "senha123",
            administrador: "true"
        };

        let editarUsuario = {
            "nome": "Fulano da Silva",
            "email": emailEdição,
            "password": "teste",
            "administrador": "true"
        }

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: novoUsuario
        }).then(response => {
            cy.log(response.body)
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.not.be.empty
            usuario = response.body._id
        })

        cy.request({
            method: 'PUT',
            url: `https://serverest.dev/usuarios/${usuario}`,
            body: editarUsuario
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Registro alterado com sucesso")
        })
    });

    it('Deve cadastrar um usuário caso não encontre email cadastrado', () => {
        let usuario = 'Jm3vYHUIdxNsUqYd'
        let numero = Math.floor(Math.random() * 100000000)
        const emailUsuario = `usuario.teste${numero}@example.com`
        let novoUsuario = {
            nome: "Usuario de Teste",
            email: emailUsuario,
            password: "senha123",
            administrador: "true"
        };

        cy.request({
            method: 'PUT',
            url: `https://serverest.dev/usuarios/${usuario}`,
            body: novoUsuario
        }).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        })
    });

    it('Deve falhar para email já cadastrado', () => {
        let novoUsuario = {
            nome: "Fulano da Silva",
            email: "beltrano1234@qa.com.br",
            password: "teste",
            administrador: "true"
        };

        cy.request({
            failOnStatusCode: false,
            method: 'PUT',
            url: `https://serverest.dev/usuarios/Jm3vYHUIdxNsUqYd`,
            body: novoUsuario
        }).then(response => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq("Este email já está sendo usado")
        })
    }); 
});