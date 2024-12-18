import { json, pgSchema, numeric } from "drizzle-orm/pg-core";

export const offchainSchema = pgSchema("offchain");

// Note: right now it's impossible to import from "ponder" because it doesn't have a cjs export
// but the "bigint" column from ponder is just an alias for numeric(78) with a js type cast

export const metadataTable = offchainSchema.table("metadata", {
  tokenId: numeric({ precision: 78, scale: 0 }).primaryKey(),
  metadata: json(),
});
