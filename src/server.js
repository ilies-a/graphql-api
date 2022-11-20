const express = require("express");
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
const { PORT } = require("./config/server.config")

const app = express();

const typeDefs = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({app});

  app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startApolloServer();