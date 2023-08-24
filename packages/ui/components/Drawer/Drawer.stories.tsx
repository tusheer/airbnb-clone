import { ComponentStory } from '@storybook/react';
import { Drawer } from './index';

export default {
    title: 'Drawer',
    component: Drawer,
};

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args}></Drawer>;

export const Default = Template.bind({});

Default.args = {
    position: 'LEFT',
    backdropClassName: 'bg-black/20',
    open: true,
    onClose: () => console.log('ehee'),
    children: (
        <div style={{ width: '400px' }} className="h-screen w-full  bg-black">
            Hello THis is new
        </div>
    ),
};
