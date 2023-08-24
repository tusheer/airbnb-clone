CREATE TABLE IF NOT EXISTS "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "properties" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" text,
	"location" text,
	"owerName" text,
	"owerPhone" text,
	"price" integer,
	"bed" integer,
	"bath" integer,
	"area" integer,
	"type" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	"rating" integer,
	"region" text DEFAULT 'all'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "property_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "property_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"image" text
);
