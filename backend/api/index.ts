import * as trpcExpress from '@airbnb/trpc/express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import customConfig from './config/default';
import propertyRouter from './router/property';
import { createContext, router, type Context } from './utils/trpc';
// import redisClient, { connectRedis } from './utils/connectRedis';

export const appRouter = router({
    property: propertyRouter,
});

const app = express();

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(cookieParser());
app.use(
    cors({
        origin: [customConfig.origin, 'http://localhost:3000'],
        credentials: true,
    })
);
app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

const port = customConfig.port;
app.listen(port, () => {
    // connectRedis();
    // redisClient.on('error', (err) => console.log(err));\
    console.log(`🚀 Server listening on port ${port}`);
});

export type AppRouter = typeof appRouter;

export type { Context };
