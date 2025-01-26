// src/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { printSchema } = require('graphql/utilities');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers'); // Importe todos os resolvers
const connectDB = require('./config/db'); // Importe a configuração do Mongoose

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

// Conectar ao banco de dados
connectDB();

// Criação do esquema executável
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Exibe o esquema no console
console.log(printSchema(schema));

const app = express();

// Configurar Apollo Server
const server = new ApolloServer({ schema });
server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
});
