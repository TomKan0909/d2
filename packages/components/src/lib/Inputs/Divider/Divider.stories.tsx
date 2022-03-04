import { Meta, Story } from '@storybook/react';
import { Divider, DividerProps } from './Divider';
import { SmallText } from '../../Text/SmallText';

export default {
    title: 'Voice User Interface/Divider',
    component: Divider,
    args: {
        children: <SmallText children='hello world' />
    },
} as Meta;

export const Basic: Story<DividerProps> = (args) => (
    <Divider {...args} />
);