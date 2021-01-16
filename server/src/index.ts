import express from "express";
import cors from "cors";
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
app.use(cors());
app.use(router);
app.use("/images", express.static(join(__dirname, "../images")));

app.listen(3001, () => console.log("Rest on port 3001"));
server.listen().then(() => {
    console.log("Graphql on port 4000");
});
