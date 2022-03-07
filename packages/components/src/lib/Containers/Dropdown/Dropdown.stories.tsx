import { Meta, Story } from '@storybook/react';
import { Button } from '../../Inputs/Button/Button';

import { IDropdownProps } from './Dropdown';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

export default {
    title: 'Components/Atoms/Dropdown',
    component: Dropdown,
    args: {
        dropdownWidth: 300,
        right: true,
        dropdownButton: <Button>Click me</Button>,
    },
} as Meta;

export const Basic: Story<IDropdownProps> = (args) => (
    <Dropdown {...args}>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Help Center</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
    </Dropdown>
);
export const Scrolling: Story<IDropdownProps> = (args) => (
    <Dropdown {...args}>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Help Center</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
        <DropdownItem>Testing</DropdownItem>
    </Dropdown>
);
