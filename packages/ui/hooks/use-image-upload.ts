import React, { useEffect, useMemo, useState } from 'react';

export interface IUseImageUploadParams {
    previousUploadedFiles: IFile[];
    multiple: boolean;
}

type IFile = File | IFileWithType;

interface IFileWithType {
    name: string;
    url: string;
}

export interface IUseImageUploadReturn {
    files: IFileWithType[];
    onUpload: () => Promise<IFile[]>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    clear: () => void;
    onRemove: (index: number) => void;
    setFiles: (files: File[]) => void;
}

export function useImageUpload({
    previousUploadedFiles = [],
    multiple = true,
}: IUseImageUploadParams): IUseImageUploadReturn {
    const [files, setFiles] = useState<IFile[]>([]);

    useEffect(() => {
        if (previousUploadedFiles.length) {
            setFiles([...previousUploadedFiles]);
        }
    }, [previousUploadedFiles]);

    const clear = () => {
        setFiles([]);
    };

    // This function is used to upload files to the server.
    // It takes an array of files as a parameter and returns a promise that resolves to an array of files.
    // Each file is an object with the following properties:
    // - name: The name of the file.
    // - type: The type of the file.
    // - size: The size of the file in bytes.
    // - lastModified: The last modified date of the file.
    // - value: The value of the file as a string.
    const onUpload = async (): Promise<IFile[]> => {
        // Import the uploadImage utility function
        const uploadImage = await import('../utils/uploadImage').then((upload) => upload.default);

        // Call the uploadImage function on each file, and return the result
        const response = await Promise.all(
            files.map(async (file) => {
                return 'lastModified' in file ? await uploadImage(file as File) : file;
            })
        );

        // Filter out any non-file values
        return response.filter((file) => 'lastModified' in file).map(({ value }: any) => ({ ...value }));
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        if (input.files === null) return;

        setFiles(multiple ? [...files, ...input.files] : [...input.files]);
    };

    const onRemove = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const _setFiles = (files: File[]) => {
        setFiles(files);
    };

    const generateUrl = (file: IFile): IFileWithType => {
        // If the file has a lastModified property, it is a File object.
        // Otherwise, it is a Blob object.
        if ('lastModified' in file && file.lastModified) {
            // Create a URL for the blob.
            const url = URL.createObjectURL(file);
            // Get the name of the file. If there is no name, use an empty string.
            const name = file.name ? file.name : '';
            // Return the URL and name.
            return { url, name };
        } else {
            // Return the URL and name.
            return { url: (file as any).url, name: (file as any).originalFileName };
        }
    };
    const generatedSelectFilesTypeAndUrl = useMemo(() => files.map(generateUrl), [files]);

    return {
        files: generatedSelectFilesTypeAndUrl,
        onUpload,
        clear,
        onChange,
        onRemove,
        setFiles: _setFiles,
    };
}
