import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
    ScrollableListContent,
    ScrollableListContentProps,
} from '..';
import { SmallText } from '../../Text';

export default {
    title: 'Components/Other/Scrollable List Content',
    component: ScrollableListContent,
    args: {
        withList: false,
        bold: true,
    },
} as Meta;

export const Basic: Story<ScrollableListContentProps> = (args) => (
    <ScrollableListContent {...args}>
        <SmallText {...args}>Text Here</SmallText>
    </ScrollableListContent>
);
