import { ComponentStory } from '@storybook/react';
import { Button } from './index';

export default {
    title: 'Button',
    component: Button,
    parameters: {
        a11y: {
            config: {
                rules: [{ id: 'color-contrast', enabled: false }],
            },
        },
    },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};

export const Error = Template.bind({});
Error.args = {
    intend: 'error',
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
