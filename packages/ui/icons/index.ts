export * from './Arrow';
export * from './Check';
export * from './Home';
export * from './Mail';
export * from './Menu';
export * from './Pen';
export * from './Social';
export * from './XIcon';

export type Icon = React.SVGAttributes<HTMLOrSVGElement> & {
    dangerouslySetInnerHTML?: {
        __html: string;
    };
};

export type DuocolorIcon = Icon & {
    secondStroke?: string;
};
