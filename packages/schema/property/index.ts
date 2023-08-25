import { properties } from '@airbnb/database/schema';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const propertyCreateSchema = createSelectSchema(properties).omit({
    id: true,
    created_at: true,
    updated_at: true,
});

export type PropertyCreateType = z.infer<typeof propertyCreateSchema>;
