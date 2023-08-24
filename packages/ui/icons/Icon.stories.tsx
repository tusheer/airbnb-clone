import { ComponentStory } from '@storybook/react';
import { Mail02 } from './Mail';

export default {
    title: 'Icons',
    component: Mail02,
};

const Template: ComponentStory<typeof Mail02> = (args) => <Mail02 {...args}>Button</Mail02>;

export const Default = Template.bind({});
Default.args = {};
