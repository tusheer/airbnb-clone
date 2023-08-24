import { createClient } from 'redis';

const redisUrl = process.env.REDISURL;

const redisClient = createClient({
    url: redisUrl,
});

export const connectRedis = async () => {
    try {
        await redisClient.connect();
        redisClient.set('tRPC', 'Welcome to tRPC with Next.js, Prisma and Typescript!');
        console.log('🚀 Redis client connected...');
        redisClient.set('tRPC', 'Welcome to tRPC with Next.js, Prisma and Typescript!');
    } catch (err: any) {
        console.log(err.message);
        process.exit(1);
    }
};

export default redisClient;
