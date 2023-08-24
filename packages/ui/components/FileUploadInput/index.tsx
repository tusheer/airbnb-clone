'use client';

import { useId } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

type RenderProps = (props: { isDragActive: boolean }) => React.ReactNode;

export interface IFileUploadInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode | RenderProps;
    multiple?: boolean;
    accept?: Accept;
    className?: string;
    onDrop?: (files: File[]) => void;
}

export const FileUploadInput: React.FC<IFileUploadInputProps> = ({
    onChange,
    children,
    multiple = true,
    onDrop,
    accept,
    className = '',
}) => {
    const id = useId();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept,
        multiple,
        onDrop,
    });

    return (
        <label
            {...getRootProps({
                'aria-label': 'drag and drop area',
            })}
            htmlFor={`fileupload-${id}`}
            className={`relative cursor-pointer overflow-hidden ${className}`}
            tabIndex={0}
        >
            <input
                {...getInputProps({
                    key: Math.floor(Math.random() * 100 + 1),
                    id: `fileupload-${id}`,
                    name: `fileupload-${id}`,
                })}
                onChange={onChange}
                className={'absolute  h-0 w-0 cursor-pointer opacity-100 '}
            />

            {typeof children === 'function' ? children({ isDragActive }) : children}
        </label>
    );
};
