import { relations } from "drizzle-orm";
import * as offchainSchema from "../offchain/schema";
import * as ponderSchema from "../ponder/ponder.schema";

// Note: we need this because "ponder.schema" can't be executed by drizzle-kit, and we 
// also don't want drizzle to generate migrations for onchain tables.

export const metadataRelations = relations(
  offchainSchema.metadataTable,
  ({ one }) => ({
    token: one(ponderSchema.token, {
      fields: [offchainSchema.metadataTable.tokenId],
      references: [ponderSchema.token.id],
    }),
  })
);

export const schema = {
  ...offchainSchema,
  ...ponderSchema,
  metadataRelations,
};
