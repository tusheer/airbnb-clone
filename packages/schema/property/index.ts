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

export type PropertyCreateType = z.infer<typeof propertyCreateSchema>;
export type PropertyTagsCrateType = z.infer<typeof propertyTagCreateSchema>;
