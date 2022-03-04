import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClickableSmallText, ClickableSmallTextProps } from './index';


export default {
    title: 'Components/Other/Clickable Text',
    component: ClickableSmallText,
    args: {
        children: 'Hello World',
        bold: true,
        color: 'black',
    },
    argTypes: { onClick: { action: 'Highlighted Text was clicked.' } },
} as Meta;

export const Basic: Story<ClickableSmallTextProps> = (args) => (
    <ClickableSmallText {...args}>{args.children}</ClickableSmallText>
);
