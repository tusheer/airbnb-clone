import { ComponentStory } from '@storybook/react';
import { Modal } from './index';

export default {
    title: 'Modal',
    component: Modal,
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}></Modal>;

export const Default = Template.bind({});

Default.args = {
    className: 'max-w-2xl rounded',
    open: true,
    onClose: () => console.log('ehee'),
    children: <div className="h-72">Hello THis is new</div>,
};
