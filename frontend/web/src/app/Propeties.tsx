'use client';

import { trpc } from '../config/trpc';

const User = () => {
    const [data] = trpc.property.getProperties.useSuspenseQuery({
        tags: 3,
    });

    console.log({ data });

    return <div>User</div>;
};

export default User;
