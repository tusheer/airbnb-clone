export interface ISkeletonProps {
    height?: number;
    width?: string | number;
    className?: string;
    rounded?: boolean;
    radius?: string;
    styles?: React.CSSProperties;
}

export const Skeleton: React.FC<ISkeletonProps> = ({
    width = '100%',
    height = '100%',
    rounded = false,
    radius = '',
    className = '',
    styles = {},
}) => {
    return (
        <div
            tabIndex={0}
            role="progressbar"
            aria-busy="true"
            aria-valuemax={0}
            aria-valuemin={100}
            aria-valuetext="Please wait...."
            className={className}
            style={{
                height,
                width,
                background: '#EFF1F5',
                borderRadius: rounded ? '50%' : radius || 'none',
                ...styles,
            }}
        ></div>
    );
};
