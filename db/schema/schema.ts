import { mysqlTable, serial, primaryKey, text, varchar } from 'drizzle-orm/mysql-core';

export const todos = mysqlTable('todos', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: varchar('description', { length: 256 }),
});
