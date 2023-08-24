import type { Request, Response } from 'express';

const errorHandler = (err: Error & { statusCode?: number }, req: Request, res: Response) => {
    console.log('Middleware Error Hadnling');
    const errStatus = err?.statusCode || 400;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    });
};

export default errorHandler;
