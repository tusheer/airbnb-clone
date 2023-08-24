import { Icon } from '.';

export const XIcon = ({ className = '', fill = 'none' }: Icon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill={fill}
            className={`h-6 w-6 ${className}`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};
