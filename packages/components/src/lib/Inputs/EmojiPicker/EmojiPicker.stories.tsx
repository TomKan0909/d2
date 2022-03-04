import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EmojiPicker, EmojiPickerProps } from '..';


export default {
    title: 'Dashboard/Loyalty/Emoji picker',
    component: EmojiPicker,
    argTypes: { onChange: { action: 'Emoji picked' } },
    args: {
        showEmoji: false,
        text: 'Select an emoji',
    },
} as Meta;

export const Basic: Story<EmojiPickerProps> = (args) => (
    <EmojiPicker {...args} />
);
