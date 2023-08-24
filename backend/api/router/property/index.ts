import db from '@airbnb/database';
import { publicProcedure, router } from '../../utils/trpc';

const userRoute = router({
    me: publicProcedure.query(async () => {
        //make 500 ms slow response
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return {
            data: 'hello',
            date: new Date(),
            newData: 'New data',
        };
    }),
    getUser: publicProcedure.query(async () => {
        //make 500 ms slow response

        const property = await db.query.properties.findMany({
            with: {
                images: true,
            },
        });

        return {
            property: property,
        };
    }),
});

export default userRoute;
