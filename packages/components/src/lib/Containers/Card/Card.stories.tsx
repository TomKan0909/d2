import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paragraph, SmallText } from '../../Text';
import {  getCaptionForLocale } from '../../Constants';
import { Card, CardProps } from '..';

export default {
    title: 'Components/Other/Card',
    component: Card,
    args: {
        flat: false,
        animated: true,
    },
} as Meta;

export const Basic: Story<CardProps> = (args) => (
    <Card {...args}>
        <Paragraph bold>{getCaptionForLocale('Hmmmmmm....... wtf')}</Paragraph>
        <SmallText bold>{getCaptionForLocale('- Jun Zheng 2019')}</SmallText>
    </Card>
);
