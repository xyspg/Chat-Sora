import { pgTable, integer, timestamp, varchar,text, uniqueIndex, numeric, index, bigint } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const soraWaitlist = pgTable("sora_waitlist", {
	id: integer("id").primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	email: varchar("email", { length: 255 }),
	ip: varchar("ip", { length: 255 }),
	ua: varchar("ua", { length: 255 }),
});