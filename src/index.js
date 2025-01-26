// src/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotenv = require('dotenv');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { printSchema } = require('graphql/utilities');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers'); 
const connectDB = require('./config/db'); 

dotenv.config(); 
connectDB();

const schema = makeExecutableSchema({ typeDefs, resolvers });

console.log(printSchema(schema));

const app = express();

const server = new ApolloServer({ schema });
server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
});
