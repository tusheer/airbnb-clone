import { AppRouter } from '@airbnb/api';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { Suspense } from 'react';
import SuperJSON from 'superjson';
import User from './User';

const trpcProxyClient = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:8080/api/trpc', // you should update this to use env variables
        }),
    ],
    transformer: SuperJSON,
});

export default async function Page() {
    const data = await trpcProxyClient.user.getUser.query();

    return (
        <div>
            {data.userData.map((user) => (
                <div key={user.id}>
                    {user.email} {user.fullName}
                </div>
            ))}
            <Suspense fallback={<div>...loading</div>}>
                <User />
            </Suspense>
        </div>
    );
}
