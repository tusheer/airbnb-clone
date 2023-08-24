'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
export interface IButtonProps extends VariantProps<typeof buttonSyles>, React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    rounded?: boolean;
    disabled?: boolean;
    loading?: boolean;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}

const buttonSyles = cva('flex items-center justify-center', {
    variants: {
        size: {
            sm: 'h-9 px-4 gap-2 font-semibold text-sm',
            md: 'h-10 px-4 gap-2 text-sm font-semibold',
            lg: 'h-11 px-[18px] gap-2 text-base font-semibold',
            xl: 'h-12 px-5 gap-2 text-base font-semibold',
            '2xl': 'h-[60px] px-7 gap-3 text-lg font-semibold',
        },
        rounded: {
            true: 'rounded-full',
            false: 'rounded-lg',
        },
        disabled: {
            true: 'opacity-40 cursor-not-allowed',
            false: '',
        },
        loading: {
            true: 'cursor-progress',
            false: '',
        },
        fullWidth: {
            true: 'w-full',
            false: '',
        },
        intend: {
            primary:
                'text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-600 active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F4EBFF]',
            'secondary-gray':
                'text-gray-700 border border-gray-300  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] bg-white hover:bg-gray-50 active:bg-white active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F2F4F7]',
            secondary:
                'bg-[#EEF4FF] text-brand-600  hover:bg-brand-100 hover:text-brand-700 active:text-brand-800 active:bg-brand-50 active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F4EBFF] ',
            error: 'text-white bg-error-600 hover:bg-error-700 active:bg-red-600 active:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#FEE4E2]',
            none: 'text-gray-600 hover:text-gray-700',
        },
    },
    defaultVariants: {
        size: 'lg',
        rounded: false,
        intend: 'primary',
        disabled: false,
        loading: false,
        fullWidth: false,
    },
});

export const Button: React.FC<IButtonProps> = ({
    size,
    children,
    className = '',
    rounded,
    intend,
    disabled = false,
    startIcon,
    loading = false,
    endIcon,
    fullWidth,
    ...rest
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={buttonSyles({ size, className, rounded, intend, disabled, loading, fullWidth })}
            {...rest}
        >
            {startIcon ? startIcon : null}
            {children}
            {endIcon ? endIcon : null}
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        initial={{ scale: 0, width: 0 }}
                        animate={{ scale: 1, width: 24 }}
                        exit={{ scale: 0, width: 0 }}
                        role="status"
                        aria-label="loading"
                    >
                        <svg
                            aria-hidden="true"
                            className={`fill-brand-600  ml-1.5 h-6 w-6 animate-spin text-white`}
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </button>
    );
};
