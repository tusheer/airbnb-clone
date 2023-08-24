import { type RequestHandler } from 'express';
import { nanoid } from 'nanoid';
import sharp from 'sharp';

const sizes = [
    {
        size: 'xsm',
        quality: 4,
    },
    {
        size: 'sm',
        quality: 10,
    },
    {
        size: 'md',
        quality: 40,
    },
    {
        size: 'lg',
        quality: 60,
    },
];

export const singleImageUploadController: RequestHandler = async (req, res) => {
    const file = req.file;
    const blur_hash = req.body.blur_hash;

    if (!file || !blur_hash) {
        return new Error('File is required');
    }

    const files: { url: string; size: string }[] = [];

    await Promise.all(
        sizes.map(async ({ quality, size }) => {
            const filename = file.originalname.replace(/\..+$/, '');
            const newFilename = `${size}-${filename}-${Date.now()}${nanoid(6)}.jpeg`;
            const filePath = `${__dirname}/../../uploads/images/${newFilename}`;

            await sharp(file.buffer).toFormat('jpeg').jpeg({ quality: quality }).toFile(filePath);

            files.push({
                url: `uploads/images/${newFilename}`,
                size,
            });
        })
    );

    res.status(200).send({
        message: 'SUCCESS',
        result: {
            sizes: files,
            originalFileName: file.originalname,
            hash: blur_hash,
        },
    });
};
