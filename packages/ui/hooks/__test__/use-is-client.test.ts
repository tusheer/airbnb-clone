import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useIsClient } from '../use-is-client';

describe('useIsClient', () => {
    it('should render', () => {
        const { result } = renderHook(useIsClient);
        expect(result).toBeTruthy();
    });
});
