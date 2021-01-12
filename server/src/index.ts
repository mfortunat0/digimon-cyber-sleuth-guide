import express from "express";
import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import router from "./routes";
import resolvers from "./resolvers";

const typeDefs = readFileSync(
    join(__dirname, "../schema.graphql"),
    "utf8"
).toString();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
app.use(router);

app.listen(3000, () => console.log("Rest on port 3000"));
server.listen().then(() => {
    console.log("Graphql on port 4000");
});
