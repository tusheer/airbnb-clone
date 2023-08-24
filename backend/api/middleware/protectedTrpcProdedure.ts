import { TRPCError } from '@airbnb/trpc/server';
import { verifyJwt } from '../utils/jwt';
import { trpc, type InferMiddlwareContextType } from '../utils/trpc';

const middleware = trpc.middleware;

const isAuthed = middleware(({ next, ctx }) => {
    try {
        const access_token = ctx.req.cookies.access_token;
        const device_uid = ctx.req.cookies.device_uid;
        const refresh_token = ctx.req.cookies.refresh_token;
        const logged_in = ctx.req.cookies.logged_in;

        if (!access_token && !device_uid && !refresh_token && !logged_in) {
            throw new TRPCError({ code: 'UNAUTHORIZED' });
        }

        const decodedUser = verifyJwt(access_token, 'accessTokenPrivateKey') as {
            email: string;
            id: string;
            iat: number;
            exp: number;
            username: string;
        } | null;

        if (!decodedUser) {
            throw new TRPCError({ code: 'UNAUTHORIZED' });
        }

        return next({
            ctx: {
                user: decodedUser,
            },
        });
    } catch (error) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
});

const protectedProcedure = trpc.procedure.use(isAuthed);

export type AuthContext = InferMiddlwareContextType<(typeof protectedProcedure)['query']>;

export default protectedProcedure;
