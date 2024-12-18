import { ponder } from "ponder:registry";
import { graphql } from "ponder";
import { eq } from "drizzle-orm"

import { db } from "../db"
import { metadataTable } from "../db/schema"

ponder.use("/", graphql());
ponder.use("/graphql", graphql());

ponder.get("/metadata/:tokenId", async (c) => {
  const tokenId = c.req.param("tokenId");
  const [tokenMetadata] = await db.select().from(metadataTable).where(eq(metadataTable.tokenId, BigInt(tokenId))).limit(1)
  return c.json(tokenMetadata?.metadata || {});
});
