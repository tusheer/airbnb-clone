'use client';

import { QueryClient, QueryClientProvider, ReactQueryDevtools } from '@airbnb/trpc/@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@airbnb/trpc/client';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';
import superjson from 'superjson';

import { trpc } from '../config/trpc';

const getBaseUrl = () => {
    // if (typeof window !== 'undefined') return 'http://localhost:8000'; // browser should use relative url
    // if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

    return `http://localhost:8080`; // dev SSR should use localhost
};

export function TRPCReactProvider(props: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 1000,
                    },
                },
            })
    );

    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === 'development' ||
                        (opts.direction === 'down' && opts.result instanceof Error),
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                    {props.children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </trpc.Provider>
            </ReactQueryStreamedHydration>
        </QueryClientProvider>
    );
}
