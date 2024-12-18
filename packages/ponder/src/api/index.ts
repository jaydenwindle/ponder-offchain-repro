import { ponder } from "ponder:registry";
import { graphql } from "ponder";

// can import from "offchain" in here


ponder.use("/", graphql());
ponder.use("/graphql", graphql());

ponder.get("/hello", (c) => {
  return c.text("Hello, world!");
});
