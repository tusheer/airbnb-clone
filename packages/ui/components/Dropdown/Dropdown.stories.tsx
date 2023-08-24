import { ComponentStory } from '@storybook/react';
import { Button } from '../Button';
import { Dropdown } from './index';

const DropdownComponent = () => {
    return (
        <Dropdown>
            <Dropdown.Button as={Button}>Hello Every one</Dropdown.Button>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => console.log('hello')}>
                    {({ isActive }) => {
                        return (
                            <div onClick={() => console.log('hero')} style={{ background: isActive ? 'red' : 'white' }}>
                                Hello
                            </div>
                        );
                    }}
                </Dropdown.Item>
                <Dropdown.Item>
                    {({ isActive }) => {
                        return (
                            <a href="/jel" style={{ background: isActive ? 'red' : 'white' }}>
                                Hello
                            </a>
                        );
                    }}
                </Dropdown.Item>
                <Dropdown.Item>
                    {({ isActive }) => {
                        return <div style={{ background: isActive ? 'red' : 'white' }}>Hello</div>;
                    }}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default {
    title: 'Dropdown',
    component: DropdownComponent,
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

const Template: ComponentStory<typeof DropdownComponent> = () => <DropdownComponent />;

export const Default = Template.bind({});
