import { neon, neonConfig } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';

export * from './schema';

config();

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export default db;
