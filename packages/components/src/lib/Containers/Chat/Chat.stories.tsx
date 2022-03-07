import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chat, ChatProps } from './Chat';

export default {
    title: 'Components/Other/Chat',
    component: Chat,
    args: {
        messages: [
            {
                sender: true,
                message: "Have you heard of CheaprEats?"
            },
            {
                sender: false,
                message: "No."
            },
            {
                sender: true,
                message: "Well they're cool"
            },
        ]
    },
} as Meta;

export const Basic: Story<ChatProps> = (args) => (
    <Chat {...args}>
    </Chat>
);
