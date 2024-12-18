require("dotenv").config({ path: `../ponder/.env.local` });

import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "./schema";

// Note: because "ponder.schema" doesn't encode any schema information, we need a way
// to tell pg where to look for ponder tables. We're working on a solution for this in 0.9,
// but for now you could define the search path to include the ponder schema.

// 1. create a pg client
// 2. set the search path
// 3. use the client to create a drizzle instance

export const db = drizzle(process.env.DATABASE_URL!, { schema });

const result = await db.query.metadataTable.findMany({
  with: {
    token: true,
  },
});

console.log(result);
