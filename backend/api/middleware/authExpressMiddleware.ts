import { RequestHandler } from 'express';
import { verifyJwt } from '../utils/jwt';

const authMiddleware: RequestHandler = (req, res, next) => {
    try {
        const access_token = req.cookies.access_token;
        const device_uid = req.cookies.device_uid;
        const refresh_token = req.cookies.refresh_token;
        const logged_in = req.cookies.logged_in;

        if (!access_token && !device_uid && !refresh_token && !logged_in) {
            throw new Error('UNAUTHORIZED');
        }

        const decodedUser = verifyJwt(access_token, 'accessTokenPrivateKey') as {
            email: string;
            id: string;
            iat: number;
            exp: number;
            username: string;
        } | null;

        if (!decodedUser) {
            throw new Error('UNAUTHORIZED');
        }

        return next();
    } catch (error) {
        throw new Error('UNAUTHORIZED');
    }
};

export default authMiddleware;
