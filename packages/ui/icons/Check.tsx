import { Icon } from '.';

export const CheckIcon: React.FC<Icon> = ({ width, height, stroke, strokeWidth = '1.66667', ...rest }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M13.3332 4L5.99984 11.3333L2.6665 8"
                stroke={stroke}
                stroke-width={strokeWidth}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
