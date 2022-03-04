import React, { isValidElement } from 'react';
import { TextLayoutProps } from '../../Fragments/TextLayout';
import { SmallText } from '../../Text';
import styled from 'styled-components';

export interface SpecialTextProps extends TextLayoutProps{
    children: string;
    onClick?: () => void;
}

export const SpecialText: React.FC<SpecialTextProps> = ({
    children,
    type = 'span',
    size = 'small',
    color = 'orange',
    ...props
}): React.ReactElement => {
    return (
        <StyledSmallText type={type} size={size} color={color} {...props}>
            {children}
        </StyledSmallText>
    );
};

const StyledSmallText = styled(SmallText)`
    &: hover {
        font-weight: bold;
        cursor: pointer;
    }
`;

export default SpecialText;
