import db, { properties, propertyTags } from '@airbnb/database';
import { propertyCreateSchema, propertyTagCreateSchema, z } from '@airbnb/schema';
import { eq } from 'drizzle-orm';
import { publicProcedure, router } from '../../utils/trpc';

const propertyRoute = router({
    getProperties: publicProcedure.query(async () => {
        const property = await db.query.properties.findMany();
        return {
            property: property,
        };
    }),

    createProperty: publicProcedure.input(propertyCreateSchema).mutation(async ({ input }) => {
        const property = await db.insert(properties).values(input).returning();
        return property;
    }),

    getTags: publicProcedure.query(async () => {
        const tags = await db.query.propertyTags.findMany();
        return {
            tags: tags,
        };
    }),

    createTag: publicProcedure.input(propertyTagCreateSchema).mutation(async ({ input }) => {
        const tag = await db.insert(propertyTags).values(input).returning();

        return tag;
    }),
    deleteTag: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        const tag = await db.delete(propertyTags).where(eq(propertyTags.id, input.id)).returning();
        return tag;
    }),
});

export default propertyRoute;
