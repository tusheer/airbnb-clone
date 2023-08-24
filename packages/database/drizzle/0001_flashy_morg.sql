CREATE TABLE IF NOT EXISTS "images_to_properties" (
	"user_id" integer NOT NULL,
	"group_id" integer NOT NULL,
	CONSTRAINT images_to_properties_user_id_group_id PRIMARY KEY("user_id","group_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images_to_properties" ADD CONSTRAINT "images_to_properties_user_id_properties_id_fk" FOREIGN KEY ("user_id") REFERENCES "properties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images_to_properties" ADD CONSTRAINT "images_to_properties_group_id_images_id_fk" FOREIGN KEY ("group_id") REFERENCES "images"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
