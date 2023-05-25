import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';

const poolConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

export const db = drizzle(poolConnection);

await migrate(db, { migrationsFolder: './drizzle' });
//const allTodos = await db.select().from(todos);
