import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './use-iso-morphic-effect';

export function useLatestValue<T>(value: T) {
    const cache = useRef(value);

    useIsomorphicLayoutEffect(() => {
        cache.current = value;
    }, [value]);

    return cache;
}
