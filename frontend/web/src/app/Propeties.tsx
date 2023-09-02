'use client';

import { trpc } from '../config/trpc';

const User = () => {
    const [data] = trpc.property.getProperties.useSuspenseQuery();

    console.log({ data });

    return <div></div>;
};

export default User;
