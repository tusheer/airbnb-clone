import { ComponentStory } from '@storybook/react';
import { TextInput } from './index';

export default {
    title: 'Textinput',
    component: TextInput,
    argTypes: {
        onChange: { action: 'Change' },
    },
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: 'color-contrast', enabled: false },
                    {
                        id: 'landmark-complementary-is-top-level',
                        reviewOnFail: true,
                    },
                ],
            },
        },
    },
};

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'First name',
    error: false,
    className: '',
    type: 'text',
    name: 'Text',
    helperText: 'This is a hint text to help user.',
};

export const Error = Template.bind({});

Error.args = {
    label: 'First name',
    error: true,
    helperText: 'Something is wrong',
};

export const TextArea = Template.bind({});
TextArea.args = {
    label: 'First name',
    textArea: true,
};
