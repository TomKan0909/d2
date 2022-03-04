import React from 'react';
import { TextLayout, TextLayoutProps } from '../../Fragments/TextLayout';

export type ParagraphProps = TextLayoutProps

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    ...props
}): React.ReactElement => <TextLayout {...props}>{children}</TextLayout>;

export default Paragraph;
