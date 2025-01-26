# Sistema de Gestão de Clínicas Veterinárias

Este projeto é um sistema de gestão de clínicas veterinárias que utiliza GraphQL para a API e MongoDB como banco de dados. A aplicação permite gerenciar clientes, animais, veterinários, consultas e feedbacks.

## Tabela de Conteúdos

- [Instalação](#instalação)
- [Configuração](#configuração)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Conectar ao MongoDB](#conectar-ao-mongodb)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Testar a API](#como-testar-a-api)

---

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no diretório raiz do projeto:

```bash
npm install
```

---

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```bash
MONGODB_URI=mongodb+srv://Silvano:<PassWord>@clinica.5p0zj.mongodb.net/clinicaDB
```

### Conectar ao MongoDB

Para conectar ao MongoDB usando a extensão "MongoDB for VS Code":

1. Instale a extensão "MongoDB for VS Code".
2. Abra o Command Palette (`Ctrl+Shift+P`).
3. Pesquise por `MongoDB: Connect` e selecione **Connect with Connection String**.
4. Cole a string de conexão do seu MongoDB:

   ```bash
   mongodb+srv://Silvano:<PassWord>@clinica.5p0zj.mongodb.net/clinicaDB
   ```

5. Clique em **Create New Playground** para testar a conexão.

---

## Estrutura do Projeto

A estrutura do projeto segue o seguinte formato:

```
Sistema-Gestao-Clinicas-Veterinarias/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Animal.js
│   │   ├── Cliente.js
│   │   ├── Consulta.js
│   │   ├── Feedback.js
│   │   └── Veterinario.js
│   ├── resolvers/
│   │   ├── animalResolvers.js
│   │   ├── clienteResolvers.js
│   │   ├── consultaResolvers.js
│   │   ├── feedbackResolvers.js
│   │   └── veterinarioResolvers.js
│   ├── schemas/
│   │   └── schema.js
│   ├── resolvers.js
│   └── index.js
├── tests/
│   ├── animal.test.js
│   ├── cliente.test.js
│   ├── consulta.test.js
│   ├── feedback.test.js
│   └── veterinario.test.js
├── .env
├── package.json
└── README.md
```

---

## Como Testar a API

Siga os passos abaixo para testar a API:

### Iniciar o Servidor

Inicie o servidor com o comando:

```bash
npm start
```

### Acessar o Playground GraphQL
Abra o navegador e acesse [http://localhost:4000/graphql](http://localhost:4000/graphql). Use o GraphQL Playground para executar consultas e mutações.
