import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DisplayItem, DisplayItemProps } from '..';


export default {
    title: 'Components/Other/Display Item',
    component: DisplayItem,
    args: {
        label: 'DisplayItemLabel',
        value: 'DisplayItemValue',
    },
} as Meta;

export const Basic: Story<DisplayItemProps> = (args) => (
    <DisplayItem {...args} />
);
