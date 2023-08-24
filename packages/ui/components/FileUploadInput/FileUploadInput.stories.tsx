import { ComponentStory } from '@storybook/react';
import { FileUploadInput } from './index';

export default {
    title: 'FileUploadInput',
    component: FileUploadInput,
};

const Template: ComponentStory<typeof FileUploadInput> = (args) => <FileUploadInput {...args} />;

export const Default = Template.bind({});

Default.args = {
    className: 'cursor-pointer  rounded-full',
    multiple: false,
    accept: 'image/*',
    children: <div className="h-80 w-80 cursor-pointer bg-red-700">Tusher</div>,
};
