'use client';

import { trpc } from '../config/trpc';

const User = () => {
    const [data] = trpc.user.getUser.useSuspenseQuery();

    return (
        <div>
            <div>{data.userData[0].email}</div>
        </div>
    );
};

export default User;
