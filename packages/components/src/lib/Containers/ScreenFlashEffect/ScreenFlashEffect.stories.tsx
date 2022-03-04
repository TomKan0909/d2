import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ScreenFlashEffect, IScreenFlashEffectProps } from '..';

export default {
    title: 'Terminal/ScreenFlashEffect',
    component: ScreenFlashEffect,
    args: {},
} as Meta;

export const Basic: Story<IScreenFlashEffectProps> = (args) => (
    <ScreenFlashEffect {...args} />
);
