describe('POST /Login', () => {
  it('deve logar com sucesso', () => {
    
    cy.request({
      url: 'https://serverest.dev/login',
      method: 'POST',
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).then(response => {
        cy.log(response.body)
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')})
    })

  it('deve retornar erro para usuarios com credenciais invalidas', () => {
    cy.request({
      url: 'https://serverest.dev/login',
      method: 'POST',
      failOnStatusCode: false,
      body: {
        "email": "fulano@qa.com",
        "password": "testee"
      }
    }).then(response => {
        cy.log(response)
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Email e/ou senha inválidos')})
    })
  });