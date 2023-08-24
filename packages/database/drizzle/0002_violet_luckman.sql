ALTER TABLE "images_to_properties" RENAME COLUMN "user_id" TO "propertyId";--> statement-breakpoint
ALTER TABLE "images_to_properties" DROP CONSTRAINT "images_to_properties_user_id_group_id";--> statement-breakpoint
ALTER TABLE "images_to_properties" DROP CONSTRAINT "images_to_properties_user_id_properties_id_fk";
--> statement-breakpoint
ALTER TABLE "images_to_properties" DROP CONSTRAINT "images_to_properties_group_id_images_id_fk";
--> statement-breakpoint
ALTER TABLE "images_to_properties" ADD COLUMN "imageId" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images_to_properties" ADD CONSTRAINT "images_to_properties_propertyId_properties_id_fk" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images_to_properties" ADD CONSTRAINT "images_to_properties_imageId_images_id_fk" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "images_to_properties" DROP COLUMN IF EXISTS "group_id";--> statement-breakpoint
ALTER TABLE "images_to_properties" ADD CONSTRAINT "images_to_properties_propertyId_imageId" PRIMARY KEY("propertyId","imageId");