ALTER TABLE "types_to_properties" DROP CONSTRAINT "types_to_properties_typeId_property_tags_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "types_to_properties" ADD CONSTRAINT "types_to_properties_typeId_property_types_id_fk" FOREIGN KEY ("typeId") REFERENCES "property_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
