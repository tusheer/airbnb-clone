// Unit Test Code
import { act, renderHook } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import { useWindowSize } from '../use-window-size';

describe('useWindowSize', () => {
    it('should return the window size', () => {
        const { result } = renderHook(() => useWindowSize());

        act(() => {
            global.innerWidth = 0;
            global.innerHeight = 0;

            global.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toEqual({ width: 0, height: 0 });

        act(() => {
            global.innerWidth = 500;
            global.innerHeight = 500;

            global.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toEqual({ width: 500, height: 500 });
    });
});
