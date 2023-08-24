import express from 'express';
import { singleImageUploadController } from '../../controller/upload';
import authMiddleware from '../../middleware/authExpressMiddleware';
import errorHandler from '../../middleware/errorHandler';
import uploader from '../../utils/upload';

const uploadRouter = express();

uploadRouter.post(
    '/image',
    authMiddleware,
    uploader(['image/jpeg', 'image/webp'], 1048576, 'Image allow only').single('image'),
    singleImageUploadController
);

uploadRouter.use(errorHandler);

export default uploadRouter;
