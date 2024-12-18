import { json, pgSchema } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
import { bigint } from "ponder"

import { token } from "../../ponder.schema"

export const offchainSchema = pgSchema("offchain");

export const metadataTable = offchainSchema.table("metadata", {
  tokenId: bigint().primaryKey(),
  metadata: json(),
});

// we want to define relationships between offchain tables and ponder tables in the same db
export const metadataRelations = relations(metadataTable, ({ one }) => ({
  token: one(token, {
    fields: [metadataTable.tokenId],
    references: [token.id],
  }),
}));
