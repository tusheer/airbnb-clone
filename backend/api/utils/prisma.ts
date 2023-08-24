import { PrismaClient } from '@airbnb/database';
export * from '@airbnb/database';

const prisma = new PrismaClient();

export async function connectDB() {
    console.log(process.env.POSTGRESQLURL);
    try {
        await prisma.$connect();
        console.log('? Database connected successfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

export default prisma;
