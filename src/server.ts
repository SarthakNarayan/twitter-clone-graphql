import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import fs from "fs";
import path from "path";

// graphql imports
const resolvers = require("./graphql/resolvers/resolver");
const graphql_path = path.join(__dirname, "graphql/schema/tweet.gql");
const typeDefs = gql(
  fs.readFileSync(graphql_path, {
    encoding: "utf-8",
  })
);

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const uri = process.env.ATLAS_URI!;
mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection established successfully");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: "/graphql" });

// for heroku deployment
// serve the static assets
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
