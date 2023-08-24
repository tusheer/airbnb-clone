/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError } from '@airbnb/schema';
import { CreateExpressContextOptions } from '@airbnb/trpc/express';
import { initTRPC, type inferAsyncReturnType } from '@airbnb/trpc/server';
import superjson from '@airbnb/trpc/superjson';

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({ req, res });

export const trpc = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter(opts) {
        const { shape, error } = opts;
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.code === 'BAD_REQUEST' && error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const middleware = trpc.middleware;
export const publicProcedure = trpc.procedure;

export const router = trpc.router;

export type InferMiddlwareContextType<T extends (value: (newValue: any) => any) => any> = T extends (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: (e: { ctx: infer E }) => any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => any
    ? E
    : never;

export type Context = inferAsyncReturnType<typeof createContext>;
