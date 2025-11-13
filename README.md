# desafio-api-QA

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/GabiGomess/desafio-api-QA.git
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```

## Cenários:
| Cenário  | 
| -------- | 
| 1 - Deve logar com sucesso                                       |
| 2 - Deve retornar erro para usuarios com credenciais invalidas   |
| 3 - Deve cadastrar novo usuario                                  |
| 4 - Deve falhar ao cadastrar novo usuario com dados existentes   |
| 5 - Deve buscar usuário por ID                                   |
| 6 - Deve falhar na busca por usuário inexistente                 |
| 7 - Deve excluir usuário  por ID                                 |
| 8 - Deve editar usuário por ID                                   |
| 9 - Deve cadastrar um usuário caso não encontre email cadastrado |
| 10 - Deve falhar para email já cadastrado                        |


