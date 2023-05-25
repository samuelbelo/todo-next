import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema/schema.ts',
  out: './drizzle',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'test',
} satisfies Config;
