const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { printSchema } = require('graphql/utilities');
const typeDefs = require('./schemas/schema');

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

// Criação do esquema executável
const schema = makeExecutableSchema({ typeDefs });

// Exibe o esquema no console
console.log(printSchema(schema));

const app = express();

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Configurar Apollo Server
const server = new ApolloServer({ schema });
server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
});
