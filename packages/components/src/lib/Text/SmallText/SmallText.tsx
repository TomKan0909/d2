import React from 'react';
import { TextLayout, TextLayoutProps } from '../../Fragments/TextLayout';

export type SmallTextProps = TextLayoutProps

export const SmallText: React.FC<SmallTextProps> = ({
    children,
    type = 'span',
    size = 'small',
    color = 'text',
    ...props
}): React.ReactElement => (
    <TextLayout type={type} size={size} color={color} {...props}>
        {children}
    </TextLayout>
);

export default SmallText;
