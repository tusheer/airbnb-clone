import { describe, expect, it } from 'vitest';
import getFileType from '../getFileType';

describe('Get File Type test', () => {
    it('jpeg file test', () => {
        expect(getFileType('janealam.jpg')).toBe('jpeg');
    });
});
