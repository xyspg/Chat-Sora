-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `CLA_LLM_CORPUS` (
	`InteractionID` int AUTO_INCREMENT NOT NULL,
	`Source` varchar(255),
	`Model` varchar(255),
	`QuestionCategory` varchar(255),
	`ErrorCategory` varchar(255),
	`Prompt` text,
	`Response` text,
	`Remarks` text,
	`Parsed` json,
	`Keywords` json,
	`Slug` varchar(255),
	`ctb_distribution` json,
	CONSTRAINT `CLA_LLM_CORPUS_InteractionID` PRIMARY KEY(`InteractionID`)
);
--> statement-breakpoint
CREATE TABLE `bdfz_birthday_log` (
	`id` int AUTO_INCREMENT NOT NULL,
	`timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
	`name` varchar(255),
	`birthday` varchar(255),
	`result` json,
	`user_agent` varchar(255),
	`ip` varchar(255),
	`referer` varchar(255),
	`status_code` int,
	CONSTRAINT `bdfz_birthday_log_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chalk_data` (
	`id` int AUTO_INCREMENT NOT NULL,
	`usin` varchar(255) NOT NULL,
	`photo` varchar(255),
	`name` varchar(255) NOT NULL,
	`phone` varchar(20),
	`email` varchar(255),
	`avatar` varchar(255),
	`gender` varchar(255),
	`birthday` varchar(255),
	`photo_blob` mediumblob,
	`avatar_blob` mediumblob,
	CONSTRAINT `chalk_data_id` PRIMARY KEY(`id`),
	CONSTRAINT `usin` UNIQUE(`usin`),
	CONSTRAINT `email` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `chalk_usage` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`ip` varchar(45),
	`ua` text,
	`studentId` varchar(100),
	`parent` varchar(100),
	CONSTRAINT `chalk_usage_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(200) NOT NULL,
	`user_info` json,
	`post_id` varchar(100) NOT NULL,
	`parent_id` bigint,
	`body` json,
	`created_at` timestamp DEFAULT now(),
	`updated_at` timestamp DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `comments_id` PRIMARY KEY(`id`),
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `dalton_course_list_comments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`course_id` varchar(100) NOT NULL,
	`alias` varchar(100),
	`comment` text NOT NULL,
	`timestamp` timestamp DEFAULT CURRENT_TIMESTAMP,
	`reply_to` int,
	`ip` varchar(45),
	`ua` text,
	`removed` tinyint DEFAULT 0,
	CONSTRAINT `dalton_course_list_comments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `guestbook` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(200) NOT NULL,
	`user_info` json,
	`message` text NOT NULL,
	`created_at` timestamp DEFAULT now(),
	`updated_at` timestamp DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `guestbook_id` PRIMARY KEY(`id`),
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `newsletters` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`subject` varchar(200),
	`body` text,
	`sent_at` datetime,
	`created_at` timestamp DEFAULT now(),
	`updated_at` timestamp DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `newsletters_id` PRIMARY KEY(`id`),
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `subscribers` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(120),
	`token` varchar(50),
	`subscribed_at` datetime,
	`unsubscribed_at` datetime,
	`updated_at` timestamp DEFAULT now() ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE INDEX `post_idx` ON `comments` (`post_id`);--> statement-breakpoint
CREATE INDEX `course_id` ON `dalton_course_list_comments` (`course_id`);--> statement-breakpoint
CREATE INDEX `reply_to` ON `dalton_course_list_comments` (`reply_to`);
*/