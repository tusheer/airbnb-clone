import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../public/build.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
        },
    },
};
