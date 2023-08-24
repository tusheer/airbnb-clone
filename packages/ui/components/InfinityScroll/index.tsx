'use client';

import React, { useEffect, useRef } from 'react';

interface IInfiniteScroll {
    actionEvent: ({ skip }: { skip: number }) => void;
    skip: number;
    count: number;
    direction?: 'top' | 'bottom';
    children: React.ReactElement[] | React.ReactElement | undefined;
    margin: number;
    isLoading: boolean;
}

export const InfiniteScroll: React.FC<IInfiniteScroll> = ({
    actionEvent,
    skip,
    count,
    direction = 'bottom',
    children,
    margin,
    isLoading,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;

        if (entry.isIntersecting === true && !isLoading) {
            if (skip < count) {
                actionEvent({ skip });
            }
        }
    };

    const options = {
        root: null,
        rootMargin: `${margin}px`,
        threshold: 0,
    };

    useEffect(() => {
        const currentElement: Element = ref.current as Element;

        const observer = new IntersectionObserver(callbackFunction, options);
        ref.current && observer.observe(currentElement);

        return () => {
            currentElement && observer.unobserve(currentElement);
        };
    }, [skip, count, isLoading]);

    return (
        <>
            {direction === 'top' && React.Children.count(children) > 0 ? (
                <div className="h-0.5" ref={ref}>
                    &nbsp;
                </div>
            ) : null}
            {children}
            {direction === 'bottom' && React.Children.count(children) > 0 ? (
                <div className="h-0.5" ref={ref}>
                    &nbsp;
                </div>
            ) : null}
        </>
    );
};
