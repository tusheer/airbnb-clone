import { properties, propertyTags } from '@airbnb/database/schema';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const propertyCreateSchema = createSelectSchema(properties, {
    images: z
        .array(
            z.object({
                url: z.string(),
            })
        )
        .min(1),
}).omit({
    id: true,
    created_at: true,
    updated_at: true,
});

export const propertyTagCreateSchema = createSelectSchema(propertyTags).omit({
    id: true,
});

export const propertySchema = createSelectSchema(properties);

export const propertyFilterQuerySchema = z.object({
    price: z
        .object({
            min: z.number(),
            max: z.number(),
        })
        .optional(),
    bed: z.number().optional(),
    bath: z.number().optional(),
    region: propertyCreateSchema.shape.region.optional(),
    types: propertyCreateSchema.shape.types.optional(),
    placeType: propertyCreateSchema.shape.placeType.optional(),
    tags: z.number().optional(),
    vat: z.boolean().optional(),
});

export type PropertyFilterQueryType = z.infer<typeof propertyFilterQuerySchema>;
export type PropertyCreateType = z.infer<typeof propertyCreateSchema>;
export type PropertyTagsCrateType = z.infer<typeof propertyTagCreateSchema>;
export type PropertyType = z.infer<typeof propertySchema>;
