import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SpecialText, SpecialTextProps } from '../../Containers/SpecialText/SpecialText';
import { SmallText } from '../../Text/SmallText';

export default {
    title: 'Components/SpecialText',
    component: SpecialText,
    argTypes: { onClick: { action: 'SpecialText Click Occurred' } },
    args: {
        children: 'Special Text',
    },
} as Meta;

export const Basic: Story<SpecialTextProps> = (args) => (
    <div>
        <span><SmallText>This is </SmallText></span>
        <span><SpecialText {...args} /></span>
    </div>
);