/* eslint-disable no-console */
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import useEventListener from './use-event-listener';

import { useEventCallback } from './use-eventcallback';

declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent;
    }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        // eslint-disable-next-line no-console
        console.log('parsing error on', { value });
        return undefined;
    }
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
    const readValue = useCallback((): T => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (parseJSON(item) as T) : initialValue;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: SetValue<T> = useEventCallback((value) => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === 'undefined') {
            // eslint-disable-next-line no-console
            console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
        }

        try {
            const newValue = value instanceof Function ? value(storedValue) : value;

            window.localStorage.setItem(key, JSON.stringify(newValue));

            setStoredValue(newValue);

            window.dispatchEvent(new Event('local-storage'));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    });

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStorageChange = useCallback(
        (event: StorageEvent | CustomEvent) => {
            if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue]
    );

    // this only works for other documents, not the current one
    useEventListener('storage', handleStorageChange);

    useEventListener('local-storage', handleStorageChange);

    return [storedValue, setValue];
}
