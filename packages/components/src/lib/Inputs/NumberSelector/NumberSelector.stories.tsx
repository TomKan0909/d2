import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NumberSelector } from './NumberSelector';


export default {
    title: 'Components/Atoms/NumberSelector',
    component: NumberSelector,
    argTypes: { onClick: { action: 'Button Click Occurred' } },
    args: {
        number: 3
    },
} as Meta;

export const Basic: Story = (args) => <NumberSelector {...args}/>
