# API Node.js - Gerenciamento de Usuários

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Uma API RESTful modularizada desenvolvida em Node.js para operações de CRUD (Create, Read, Update, Delete) de usuários, utilizando MongoDB como banco de dados.

---

## 📋 Índice

* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Pré-requisitos](#-pré-requisitos)
* [Instalação e Execução](#-instalação-e-execução)
* [Rotas da API](#-rotas-da-api)
* [Modelo de Dados](#-modelo-de-dados)

---

## ✨ Funcionalidades

- [x] Conexão com Banco de Dados MongoDB.
- [x] Criação de usuários com validação de campos.
- [x] Listagem de todos os usuários ou busca por ID.
- [x] Atualização parcial de dados do usuário (PATCH).
- [x] Remoção de usuários.
- [x] Logs de requisição (Middleware que mostra Método, Tipo e Data).

---

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** - Runtime JavaScript.
* **[Express](https://expressjs.com/)** - Framework para construção do servidor e rotas.
* **[Mongoose](https://mongoosejs.com/)** - ODM (Object Data Modeling) para MongoDB.
* **[Dotenv](https://www.npmjs.com/package/dotenv)** - Gerenciamento de variáveis de ambiente.

---

## 📂 Estrutura do Projeto

A aplicação segue uma estrutura organizada em módulos:

```text
.
├── src
│   ├── database
│   │   └── conect.js       # Configuração e conexão com o MongoDB
│   └── models
│       └── user.model.js   # Schema do Mongoose (Campos e validações)
├── modules
│   └── express.js          # Configuração do App, Middlewares, Rotas e Server Listen
├── index.js                # Arquivo principal (Entry point)
├── .env                    # Variáveis de ambiente (não versionado)
└── package.json
```
## 📦 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
Git
Node.js
MongoDB (Rodando localmente na porta 27017) ou uma URI do MongoDB Atlas.

## 🔧 Instalação e Execução

Clone o repositório:
Bash
git clone [https://github.com/LeandroMeca/api-nodejs.git](https://github.com/LeandroMeca/api-nodejs.git)
cd api-nodejs

Instale as dependências:

Bash

npm install
Configuração do Ambiente (.env): Crie um arquivo .env na raiz do projeto. Embora o projeto esteja configurado para rodar localmente por padrão, as variáveis são necessárias caso mude para o Atlas:

Snippet de código

MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
Execute a aplicação:

Bash

npm start
# Ou diretamente via node:
node index.js
Você verá no terminal:

Conectado ao banco de dados com sucesso! rodando com o server na porta 8080!

## 📍 Endpoints da API
### A API roda na porta 8080.
Método Rota Descrição
GET/usersLista todos os usuários cadastrados.
GET/users/:idBusca detalhes de um usuário pelo ID.
POST/usersCria um novo usuário (Requer Body JSON).
PATCH/users/:idAtualiza um usuário existente (Requer Body JSON).
DELETE/users/:idRemove um usuário pelo ID.


## 📝 Modelo de Dados
O Schema do usuário (user.model.js) impõe as seguintes regras para o corpo da requisição (JSON):

JSON
{
  "firstName": "Leandro",
  "lastName": "Meca",
  "email": "leandro@exemplo.com",
  "password": "senha_super_segura"
}

Regras de Validação:
firstName: String (Obrigatório, remove espaços em branco).
lastName: String (Obrigatório, remove espaços em branco).
email: String (Obrigatório, Único, converte para minúsculo).
password: String (Obrigatório, mínimo de 7 caracteres).

## 📄 Licença
Este projeto está sob a licença MIT.
Feito com 💜 por Leandro Meca.
