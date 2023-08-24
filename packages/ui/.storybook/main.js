const { mergeConfig } = require('vite');
module.exports = {
    stories: ['../components/**/*.stories.tsx', '../icons/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
