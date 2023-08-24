import { DuocolorIcon, Icon } from '.';

export const ArrowLeft: React.FC<Icon> = ({
    stroke = 'black',
    width = 21,
    height = '21',
    className,
    strokeWidth = '1.66667',
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.3334 10.5H4.66669M4.66669 10.5L10.5 16.3333M4.66669 10.5L10.5 4.66663"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ChevronRight: React.FC<Icon> = ({
    height,
    width,
    stroke = 'black',
    strokeWidth = 2,
    className,
    ...rest
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 14"
            fill="none"
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7 13L1 7L7 1"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ChevronVarticalSelectorIcon: React.FC<Icon> = ({ width, height, className, stroke, ...rest }) => {
    return (
        <svg
            {...rest}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5.83301 12.5L9.99967 16.6667L14.1663 12.5M5.83301 7.50001L9.99967 3.33334L14.1663 7.50001"
                stroke={stroke}
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ArrowLightDuoColor: React.FC<DuocolorIcon> = ({ width, height, stroke, ...rest }) => {
    return (
        <svg {...rest} width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.6"
                d="M4.6665 10H16.3332"
                stroke={stroke}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.5 4.16663L16.3333 9.99996L10.5 15.8333"
                stroke={stroke}
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
