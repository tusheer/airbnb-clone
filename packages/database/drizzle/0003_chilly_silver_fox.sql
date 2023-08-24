CREATE TABLE IF NOT EXISTS "tags_to_properties" (
	"propertyId" integer NOT NULL,
	"tagId" integer NOT NULL,
	CONSTRAINT tags_to_properties_propertyId_tagId PRIMARY KEY("propertyId","tagId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "types_to_properties" (
	"propertyId" integer NOT NULL,
	"typeId" integer NOT NULL,
	CONSTRAINT types_to_properties_propertyId_typeId PRIMARY KEY("propertyId","typeId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_properties" ADD CONSTRAINT "tags_to_properties_propertyId_properties_id_fk" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_properties" ADD CONSTRAINT "tags_to_properties_tagId_property_tags_id_fk" FOREIGN KEY ("tagId") REFERENCES "property_tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "types_to_properties" ADD CONSTRAINT "types_to_properties_propertyId_properties_id_fk" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "types_to_properties" ADD CONSTRAINT "types_to_properties_typeId_property_tags_id_fk" FOREIGN KEY ("typeId") REFERENCES "property_tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
