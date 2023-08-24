/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
// const tsconfigPaths = require("vite-tsconfig-paths");

const config = defineConfig({
    plugins: [react()],
    test: {
        exclude: [
            ...configDefaults.exclude,
            'components/*.{test,spec}.{ts,tsx}',
            'hooks/*.{test,spec}.{ts,tsx}',
            'utils/*.{test,spec}.{ts,tsx}',
        ],
        globals: true,
        environment: 'happy-dom',
    },
});

export default config;
