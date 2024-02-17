import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, text, json, datetime, unique, timestamp, index, serial, bigint, tinyint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const claLlmCorpus = mysqlTable("CLA_LLM_CORPUS", {
	interactionId: int("InteractionID").autoincrement().notNull(),
	source: varchar("Source", { length: 255 }),
	model: varchar("Model", { length: 255 }),
	questionCategory: varchar("QuestionCategory", { length: 255 }),
	errorCategory: varchar("ErrorCategory", { length: 255 }),
	prompt: text("Prompt"),
	response: text("Response"),
	remarks: text("Remarks"),
	parsed: json("Parsed"),
	keywords: json("Keywords"),
	slug: varchar("Slug", { length: 255 }),
	ctbDistribution: json("ctb_distribution"),
},
(table) => {
	return {
		claLlmCorpusInteractionId: primaryKey({ columns: [table.interactionId], name: "CLA_LLM_CORPUS_InteractionID"}),
	}
});

export const bdfzBirthdayLog = mysqlTable("bdfz_birthday_log", {
	id: int("id").autoincrement().notNull(),
	timestamp: datetime("timestamp", { mode: 'string'}).default(sql`CURRENT_TIMESTAMP`),
	name: varchar("name", { length: 255 }),
	birthday: varchar("birthday", { length: 255 }),
	result: json("result"),
	userAgent: varchar("user_agent", { length: 255 }),
	ip: varchar("ip", { length: 255 }),
	referer: varchar("referer", { length: 255 }),
	statusCode: int("status_code"),
},
(table) => {
	return {
		bdfzBirthdayLogId: primaryKey({ columns: [table.id], name: "bdfz_birthday_log_id"}),
	}
});

export const chalkData = mysqlTable("chalk_data", {
	id: int("id").autoincrement().notNull(),
	usin: varchar("usin", { length: 255 }).notNull(),
	photo: varchar("photo", { length: 255 }),
	name: varchar("name", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 20 }),
	email: varchar("email", { length: 255 }),
	avatar: varchar("avatar", { length: 255 }),
	gender: varchar("gender", { length: 255 }),
	birthday: varchar("birthday", { length: 255 }),
	// Warning: Can't parse mediumblob from database
	// mediumblobType: mediumblob("photo_blob"),
	// Warning: Can't parse mediumblob from database
	// mediumblobType: mediumblob("avatar_blob"),
},
(table) => {
	return {
		chalkDataId: primaryKey({ columns: [table.id], name: "chalk_data_id"}),
		usin: unique("usin").on(table.usin),
		email: unique("email").on(table.email),
	}
});

export const chalkUsage = mysqlTable("chalk_usage", {
	id: int("id").autoincrement().notNull(),
	name: varchar("name", { length: 100 }).notNull(),
	timestamp: timestamp("timestamp", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	ip: varchar("ip", { length: 45 }),
	ua: text("ua"),
	studentId: varchar("studentId", { length: 100 }),
	parent: varchar("parent", { length: 100 }),
},
(table) => {
	return {
		chalkUsageId: primaryKey({ columns: [table.id], name: "chalk_usage_id"}),
	}
});

export const comments = mysqlTable("comments", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 200 }).notNull(),
	userInfo: json("user_info"),
	postId: varchar("post_id", { length: 100 }).notNull(),
	parentId: bigint("parent_id", { mode: "number" }),
	body: json("body"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow(),
},
(table) => {
	return {
		postIdx: index("post_idx").on(table.postId),
		commentsId: primaryKey({ columns: [table.id], name: "comments_id"}),
		id: unique("id").on(table.id),
	}
});

export const daltonCourseListComments = mysqlTable("dalton_course_list_comments", {
	id: int("id").autoincrement().notNull(),
	courseId: varchar("course_id", { length: 100 }).notNull(),
	alias: varchar("alias", { length: 100 }),
	comment: text("comment").notNull(),
	timestamp: timestamp("timestamp", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	replyTo: int("reply_to"),
	ip: varchar("ip", { length: 45 }),
	ua: text("ua"),
	removed: tinyint("removed").default(0),
},
(table) => {
	return {
		courseId: index("course_id").on(table.courseId),
		replyTo: index("reply_to").on(table.replyTo),
		daltonCourseListCommentsId: primaryKey({ columns: [table.id], name: "dalton_course_list_comments_id"}),
	}
});

export const guestbook = mysqlTable("guestbook", {
	id: serial("id").notNull(),
	userId: varchar("user_id", { length: 200 }).notNull(),
	userInfo: json("user_info"),
	message: text("message").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow(),
},
(table) => {
	return {
		guestbookId: primaryKey({ columns: [table.id], name: "guestbook_id"}),
		id: unique("id").on(table.id),
	}
});

export const newsletters = mysqlTable("newsletters", {
	id: serial("id").notNull(),
	subject: varchar("subject", { length: 200 }),
	body: text("body"),
	sentAt: datetime("sent_at", { mode: 'string'}),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow(),
},
(table) => {
	return {
		newslettersId: primaryKey({ columns: [table.id], name: "newsletters_id"}),
		id: unique("id").on(table.id),
	}
});

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

export const subscribers = mysqlTable("subscribers", {
	id: serial("id").notNull(),
	email: varchar("email", { length: 120 }),
	token: varchar("token", { length: 50 }),
	subscribedAt: datetime("subscribed_at", { mode: 'string'}),
	unsubscribedAt: datetime("unsubscribed_at", { mode: 'string'}),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().onUpdateNow(),
},
(table) => {
	return {
		subscribersId: primaryKey({ columns: [table.id], name: "subscribers_id"}),
		id: unique("id").on(table.id),
	}
});