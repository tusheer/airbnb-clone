import db, { properties } from '@airbnb/database';
import { publicProcedure, router } from '../../utils/trpc';

const propertyRoute = router({
    getProperties: publicProcedure.query(async () => {
        const property = await db.query.properties.findMany();

        return {
            property: property,
        };
    }),

    createProperty: publicProcedure.mutation(async () => {
        const property = await db
            .insert(properties)
            .values({
                type: '',
                area: 99,
                bath: 3,
                bed: 9,
                description: 'how nice',
                location: 'India',
                name: 'New',
                ownerName: 'Tusher',
                rating: 4,
                ownerPhone: '33332323',
                region: 'europe',
                price: 323,
                placeType: 'all',
                types: 'apartment',
                images: [],
            })
            .returning();

        return property;
    }),
});

export default propertyRoute;
