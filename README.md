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

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* [MongoDB](https://www.mongodb.com/try/download/community) (Rodando localmente na porta `27017`) **OU** acesso a um cluster no MongoDB Atlas.

---

## 🔧 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LeandroMeca/api-nodejs.git](https://github.com/LeandroMeca/api-nodejs.git)
    cd api-nodejs
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Ambiente (.env):**
    Crie um arquivo `.env` na raiz do projeto.
    * *Nota: O projeto roda localmente por padrão, mas se for usar o Atlas, configure as variáveis:*

    ```env
    # Apenas se for usar conexão externa (Atlas)
    MONGODB_USERNAME=seu_usuario
    MONGODB_PASSWORD=sua_senha
    ```

4.  **Execute a aplicação:**
    ```bash
    npm start
    # Ou
    node index.js
    ```

    ✅ **Sucesso:** O terminal deve exibir:
    > `Conectado ao banco de dados com sucesso!`
    > `rodando com o server na porta 8080!`

---

## 📍 Rotas da API

A API roda na porta **8080**. Utilize o **Postman** ou **Insomnia** para testar.

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/users` | Lista todos os usuários cadastrados. |
| **GET** | `/users/:id` | Busca detalhes de um usuário pelo ID. |
| **POST** | `/users` | Cria um novo usuário (Requer JSON no corpo). |
| **PATCH** | `/users/:id` | Atualiza parcialmente um usuário (Requer JSON). |
| **DELETE** | `/users/:id` | Remove um usuário pelo ID. |

---

## 📝 Modelo de Dados

O Schema do usuário (`user.model.js`) espera o seguinte formato JSON no corpo da requisição:

```json
{
  "firstName": "Leandro",
  "lastName": "Meca",
  "email": "leandro@exemplo.com",
  "password": "senha_super_segura"
}
