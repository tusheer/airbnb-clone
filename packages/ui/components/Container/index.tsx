export type IContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<{ children?: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => {
    return <section className={`mx-auto max-w-7xl px-5 ${className}`}>{children}</section>;
};
