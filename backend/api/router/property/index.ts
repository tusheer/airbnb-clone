import db, { properties, propertyTags, tagsToProperties } from '@airbnb/database';
import { propertyCreateSchema, propertyFilterQuerySchema, propertyTagCreateSchema, z } from '@airbnb/schema';
import { SQL, between, eq, or } from 'drizzle-orm';
import { publicProcedure, router } from '../../utils/trpc';

const propertyRoute = router({
    getProperties: publicProcedure.input(propertyFilterQuerySchema).query(async ({ input }) => {
        // This code is used to get all the properties that match the filters that are passed as an argument

        const sqlPattern = {
            price: input?.price ? between(properties.price, input.price.min, input.price.max) : null,
            bed: input?.bed ? eq(properties.bed, input.bed) : null,
            bath: input?.bath ? eq(properties.bath, input.bath) : null,
            region: input?.region ? eq(properties.region, input.region) : null,
            types: input?.types ? eq(properties.types, input.types) : null,
            placeType: input?.placeType ? eq(properties.placeType, input.placeType) : null,
            vat: input?.vat ? eq(properties.vat, input.vat) : null,
            tags: input?.tags ? eq(tagsToProperties.tagId, input.tags) : null,
        } as { [key: string]: SQL<unknown> };

        const sqlPatternKeys = Object.entries(sqlPattern)
            .map(([, d]) => d)
            .filter((d) => d !== null);

        const property = await db
            .selectDistinctOn([properties.id])
            .from(properties)
            .innerJoin(tagsToProperties, eq(properties.id, tagsToProperties.propertyId))
            .where(or(...sqlPatternKeys));

        return {
            property: property.map((property) => property.properties),
        };
    }),

    createProperty: publicProcedure
        .input(
            propertyCreateSchema.extend({
                tags: z.array(
                    z.object({
                        id: z.number(),
                    })
                ),
            })
        )
        .mutation(async ({ input }) => {
            const property = await db.insert(properties).values(input).returning();

            const tagsInProperty = input.tags.map((tag) => {
                return {
                    propertyId: property[0].id,
                    tagId: tag.id,
                };
            });

            await db.insert(tagsToProperties).values(tagsInProperty).returning();

            return property;
        }),

    deleteProperty: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        await db.delete(tagsToProperties).where(eq(tagsToProperties.propertyId, input.id));
        const property = await db.delete(properties).where(eq(properties.id, input.id)).returning();
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
