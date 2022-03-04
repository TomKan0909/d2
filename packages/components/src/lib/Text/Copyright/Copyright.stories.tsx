import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Copyright } from './Copyright';
import { CopyrightProps } from '.';


export default {
    title: 'Terminal',
    component: Copyright,
    args: {
        appVersion: "2.0.2"
    },
} as Meta;

export const Basic: Story<CopyrightProps> = (args) => (
    <Copyright {...args}/>
);
