import { ponder } from "ponder:registry";
import schema from "ponder:schema";

import { db } from "./db"
import { metadataTable } from "./db/schema"

ponder.on("ERC721:Transfer", async ({ event, context }) => {
  // Create an Account for the sender, or update the balance if it already exists.
  await context.db
    .insert(schema.account)
    .values({ address: event.args.from })
    .onConflictDoNothing();
  // Create an Account for the recipient, or update the balance if it already exists.
  await context.db
    .insert(schema.account)
    .values({ address: event.args.to })
    .onConflictDoNothing();

  // Create or update a Token.
  await context.db
    .insert(schema.token)
    .values({
      id: event.args.id,
      owner: event.args.to,
    })
    .onConflictDoUpdate({ owner: event.args.to });

  // insert data into offchain db that persists between indexing runs
  await db.insert(metadataTable).values({
    tokenId: event.args.id,
    metadata: { hello: "world", tokenId: Number(event.args.id) }
  }).onConflictDoNothing()

  // Create a TransferEvent.
  await context.db.insert(schema.transferEvent).values({
    id: event.log.id,
    from: event.args.from,
    to: event.args.to,
    token: event.args.id,
    timestamp: Number(event.block.timestamp),
  });
});
