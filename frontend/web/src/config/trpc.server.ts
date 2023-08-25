import { AppRouter } from '@airbnb/api';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import SuperJSON from 'superjson';

const trpcProxyClient = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:8080/api/trpc', // you should update this to use env variables
        }),
    ],
    transformer: SuperJSON,
});
