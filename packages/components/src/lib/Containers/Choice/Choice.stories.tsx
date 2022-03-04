import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Choice } from './Choice';
import { LocationFood } from '@styled-icons/zondicons/LocationFood';

export default {
    title: 'Components/Atoms/Choice',
    component: Choice,
    args: {
        choiceType: 'Pick up from',
        choiceValue: 'Chipotle',
        choiceIcon: LocationFood,
    },
} as Meta;

export const Basic: Story = (args) => <Choice {...args}/>;