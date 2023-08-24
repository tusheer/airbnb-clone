import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

config();

const databaseUrl = drizzle(postgres(`${process.env.DATABASE_URL}`, { ssl: 'require', max: 1 }));

const databaseMigrationToNeon = async () => {
    try {
        await migrate(databaseUrl, { migrationsFolder: './drizzle' });
        console.log('Migration complete');
    } catch (error) {
        console.log(error);
    }
    process.exit(0);
};

databaseMigrationToNeon();
