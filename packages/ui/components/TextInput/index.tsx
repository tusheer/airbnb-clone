'use client';

import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useId, useState } from 'react';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    className?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    type?: string;
    textArea?: boolean;
    rows?: number;
    placeholder?: string;
    EndIcon?: React.ReactNode;
    StartIcon?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}

const inputCva = cva('outline-none rounded-lg border flex items-center w-full overflow-hidden', {
    variants: {
        error: {
            true: 'border-error-300 shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#FEE4E2] ',
            false: 'border-gray-300 shadow-[0px_1px_2px_rgba(16,24,40,0.05] focus-within:border-brand-300 focus-within:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F4EBFF]',
        },
        textArea: {
            true: 'pt-2',
            false: 'h-11',
        },
    },
    defaultVariants: {
        error: false,
        textArea: false,
    },
});

export const TextInput = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            type = 'text',
            textArea,
            helperText,
            label,
            className = '',
            rows = 2,
            error = false,
            name = '',
            StartIcon,
            EndIcon,
            ...rest
        },
        ref
    ) => {
        const uid = useId();
        const [inputType, setInputType] = useState(type);
        const handleEyesign = () => {
            setInputType(inputType === 'password' ? 'text' : 'password');
        };
        return (
            <div id={`${name}-${uid}`} className={`${className} relative`}>
                {label ? (
                    <label htmlFor={uid + name} className="mb-1.5 block text-sm font-medium text-gray-700 ">
                        {label}
                    </label>
                ) : null}

                <div className={inputCva({ error, textArea })}>
                    {StartIcon}
                    {textArea ? (
                        <textarea
                            className="h-full w-full border-none px-3  outline-none"
                            rows={rows}
                            id={uid + name}
                            name={name}
                            aria-invalid={error}
                            {...rest}
                        ></textarea>
                    ) : (
                        <input
                            className="h-full w-full border-none px-3  outline-none"
                            ref={ref}
                            type={inputType}
                            id={uid + name}
                            name={name}
                            aria-invalid={error}
                            {...rest}
                        />
                    )}
                    {EndIcon}
                </div>

                {type === 'password' && (
                    <div
                        style={{ top: '39px' }}
                        className="absolute right-0 flex cursor-pointer select-none items-center pr-2.5"
                        onClick={handleEyesign}
                    >
                        {inputType === 'password' ? <EyeOpenIcon /> : <EyeCloseIcon />}
                    </div>
                )}
                <AnimatePresence>
                    {helperText ? (
                        <motion.small
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            className={`mt-1.5 block text-sm font-normal ${
                                error ? 'text-error-500' : ' text-gray-600'
                            }`}
                            role="alert"
                        >
                            {helperText}
                        </motion.small>
                    ) : null}
                </AnimatePresence>
            </div>
        );
    }
);

TextInput.displayName = 'TextInput';

const EyeOpenIcon = () => (
    <svg width="18" height="18" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            className="stroke-gray-600"
            d="M1.42012 8.71318C1.28394 8.49754 1.21584 8.38972 1.17772 8.22342C1.14909 8.0985 1.14909 7.9015 1.17772 7.77658C1.21584 7.61028 1.28394 7.50246 1.42012 7.28682C2.54553 5.50484 5.8954 1 11.0004 1C16.1054 1 19.4553 5.50484 20.5807 7.28682C20.7169 7.50246 20.785 7.61028 20.8231 7.77658C20.8517 7.9015 20.8517 8.0985 20.8231 8.22342C20.785 8.38972 20.7169 8.49754 20.5807 8.71318C19.4553 10.4952 16.1054 15 11.0004 15C5.8954 15 2.54553 10.4952 1.42012 8.71318Z"
            stroke="curretColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            className="stroke-gray-600"
            d="M11.0004 11C12.6573 11 14.0004 9.65685 14.0004 8C14.0004 6.34315 12.6573 5 11.0004 5C9.34355 5 8.0004 6.34315 8.0004 8C8.0004 9.65685 9.34355 11 11.0004 11Z"
            stroke="curretColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const EyeCloseIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.74294 3.09232C10.1494 3.03223 10.5686 3 11.0004 3C16.1054 3 19.4553 7.50484 20.5807 9.28682C20.7169 9.5025 20.785 9.61034 20.8231 9.77667C20.8518 9.90159 20.8517 10.0987 20.8231 10.2236C20.7849 10.3899 20.7164 10.4985 20.5792 10.7156C20.2793 11.1901 19.8222 11.8571 19.2165 12.5805M5.72432 4.71504C3.56225 6.1817 2.09445 8.21938 1.42111 9.28528C1.28428 9.50187 1.21587 9.61016 1.17774 9.77648C1.1491 9.9014 1.14909 10.0984 1.17771 10.2234C1.21583 10.3897 1.28393 10.4975 1.42013 10.7132C2.54554 12.4952 5.89541 17 11.0004 17C13.0588 17 14.8319 16.2676 16.2888 15.2766M2.00042 1L20.0004 19M8.8791 7.87868C8.3362 8.42157 8.00042 9.17157 8.00042 10C8.00042 11.6569 9.34356 13 11.0004 13C11.8288 13 12.5788 12.6642 13.1217 12.1213"
                stroke="curretColor"
                strokeWidth="2"
                className="stroke-gray-600"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
