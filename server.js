const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");

// const cors = require("cors");

// graphql imports
const resolvers = require("./graphql/resolvers/resolver");
const typeDefs = gql(
  fs.readFileSync("./graphql/schema/tweet.gql", { encoding: "utf-8" })
);

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const uri = process.env.ATLAS_URI;
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

// using middleware
// app.use(cors());
// app.use(express.json());
// app.get("/test", (req, res) => {
//   res.send({ msg: "this is a test message" });
// });
server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

// TODO: What to use for front end communication
// TODO: Make a graphql request front end
