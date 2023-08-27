import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useId } from 'react';

export interface ISelectInputOption {
    value: string;
    label: string;
}

export interface ISelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    options: ISelectInputOption[];
}

const selectInputCva = cva('outline-none rounded-lg border flex items-center w-full overflow-hidden h-11', {
    variants: {
        error: {
            true: 'border-error-300 shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#FEE4E2]',
            false: 'border-gray-300 shadow-[0px_1px_2px_rgba(16,24,40,0.05)] focus-within:border-brand-300 focus-within:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F4EBFF]',
        },
    },
    defaultVariants: {
        error: false,
    },
});

export const SelectInput = forwardRef<HTMLSelectElement, ISelectInputProps>(
    ({ label, name = '', className = '', error = false, options, helperText, ...rest }, ref) => {
        const uid = useId();

        return (
            <div id={`${name}-${uid}`} className={`${className} relative`}>
                {label ? (
                    <label htmlFor={uid} className="mb-1.5 block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                ) : null}

                <div className={selectInputCva({ error })}>
                    <select
                        ref={ref}
                        id={uid}
                        aria-invalid={error}
                        name={name}
                        className="h-full w-full border-none px-3 outline-none"
                        {...rest}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

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

SelectInput.displayName = 'SelectInput';
