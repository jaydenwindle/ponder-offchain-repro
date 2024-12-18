require('dotenv').config({ path: `../../.env.local` })

import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!);

