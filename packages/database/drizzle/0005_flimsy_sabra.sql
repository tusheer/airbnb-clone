DROP TABLE "images_to_properties";--> statement-breakpoint
DROP TABLE "images";--> statement-breakpoint
DROP TABLE "property_types";--> statement-breakpoint
DROP TABLE "types_to_properties";--> statement-breakpoint
ALTER TABLE "properties" ADD COLUMN "types" text DEFAULT 'house';--> statement-breakpoint
ALTER TABLE "properties" ADD COLUMN "images" json DEFAULT '[]'::json;--> statement-breakpoint
ALTER TABLE "properties" ADD COLUMN "placeType" text DEFAULT 'all';