import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, text, json, datetime, unique, timestamp, index, serial, bigint, tinyint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const soraWaitlist = mysqlTable("sora_waitlist", {
	id: int("id").autoincrement().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).onUpdateNow(),
	email: varchar("email", { length: 255 }),
	ip: varchar("ip", { length: 255 }),
	ua: varchar("ua", { length: 255 }),
},
(table) => {
	return {
		soraWaitlistId: primaryKey({ columns: [table.id], name: "sora_waitlist_id"}),
	}
});
