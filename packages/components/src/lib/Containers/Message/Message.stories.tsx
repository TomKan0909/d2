import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paragraph, SmallText } from '../../Text';
import {  getCaptionForLocale } from '../../Constants';
import { Message, MessageProps } from '..';

export default {
    title: 'Components/Other/Message',
    component: Message,
    args: {
        text: "Hello",
        animated: true,
        outgoing: true
    },
} as Meta;

export const Basic: Story<MessageProps> = (args) => (
    <Message {...args}>
        <Paragraph bold>{getCaptionForLocale('Noice')}</Paragraph>
        <SmallText bold>{getCaptionForLocale('- Tev 2022')}</SmallText>
    </Message>
);