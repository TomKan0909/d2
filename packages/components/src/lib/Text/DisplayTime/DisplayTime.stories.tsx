import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DisplayTime } from './DisplayTime';
import { DisplayTimeProps } from '.';


export default {
    title: 'Terminal',
    component: DisplayTime,
    args: {
        color: "black"
    },
} as Meta;

export const Basic: Story<DisplayTimeProps> = (args) => (
    <DisplayTime {...args}/>
);
