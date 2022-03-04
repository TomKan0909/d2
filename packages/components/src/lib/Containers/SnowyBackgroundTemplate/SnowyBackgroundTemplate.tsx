import { Card } from '../../Containers/Card/Card';
import { Heading } from '../../Text/Heading';
import { MainTheme } from '../../Themes/MainTheme';
import React from 'react';
import Snowfall from 'react-snowfall';
import styled from 'styled-components';

export interface ISnowyBackgroundProps {
    backgroundColor?: string,
    snowColor?: string,
    children?: React.ReactElement,
}

export const SnowyBackgroundTemplate: React.FC<ISnowyBackgroundProps> = ({
    backgroundColor = MainTheme.colors.voiceOrderingColors.backgroundGradient,
    snowColor = 'white',
    children,
    ...props
}): React.ReactElement => (
    <StyledDiv backgroundColor={backgroundColor} {...props} >
        <Snowfall color={snowColor} />
        <StyledCard children={(children)} />
    </StyledDiv>
);

const StyledDiv = styled.div<{ backgroundColor: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    ${({ backgroundColor }): string => `
        background: ${backgroundColor};
    `}
`;

const StyledCard = styled(Card)`
  width: 60%;
  text-align: center;
  margin: 10em auto 0 auto;
  postion: relative;
  padding: 3em;
`;


export default SnowyBackgroundTemplate;