// environnement 
require("dotenv").config(); // idem=>  import'dotenv/config';

// moduls import
const express = require("express"); // idem=>  import express from 'express';
const app = express();

const { ApolloServer } = require("apollo-server-express"); // idem=>   import { ApolloServer } from 'apollo-server-express';

// import shema and resolvers
const typeDefs = require("./app/schema");
const resolvers = require("./app/resolvers");


const server = new ApolloServer({
  typeDefs,
  resolvers
});

const PORT = process.env.PORT ?? 3000;

// Start Apollo Server
async function startServer() {
  //Start instance Apollo Server
    await server.start();
  // Link Express with Apollo server
    server.applyMiddleware({app});
  
      await app.listen(PORT);
      console.log(`🚀 Server launched on http://localhost:${PORT}`);
  
  };
  
  startServer();