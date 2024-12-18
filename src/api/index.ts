import { ponder } from "ponder:registry";
import { graphql } from "ponder";


ponder.use("/", graphql());
ponder.use("/graphql", graphql());

ponder.get("/hello", (c) => {
  return c.text("Hello, world!");
});
