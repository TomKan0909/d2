import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';
import { MainTheme } from '../../Themes/MainTheme';

interface ChoiceProps {
    /** Type: delivery or pick-up*/
    choiceType?: string,
    /** Value: restaurant name or delivery address*/
    choiceValue?: string,
    /* An icon to display choosen method for delivery/pick-up*/
    choiceIcon?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>,
    /** Function to handle the onClick event for the Choice component */
    onClick?: () => void,
}

export const Choice: React.FC<ChoiceProps> = ({
    choiceType,
    choiceValue,
    choiceIcon,
    ...props
}): React.ReactElement => (
    <DivWrapper {...props}>
        {choiceIcon && (
                <ChoiceIcon
                    as={choiceIcon}
                />
        )}
        <Wrapper>
            <TypeText>
                {choiceType}
            </TypeText>
            <ValueText>
                {choiceValue}
            </ValueText>
        </Wrapper>
        <Spacer/>
        <ChoiceArrowRight/>
    </DivWrapper>
);

const Wrapper = styled.div`
    
`

const DivWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100px;
    width: 400px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    ${({ theme }) => `
    background: ${theme.colors};
    `}
`

const TypeText = styled.p`
    line-height: 0.5;
`

const ValueText = styled.p`
    font-weight: bold;
    line-height: 0.5;
`

const ChoiceIcon = styled.svg`
    width: 25px;
    height: 25px;
    margin: 16px;
    color: ${MainTheme.colors.statusColors.green};
`
const ChoiceArrowRight = styled(ChevronRight)`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`

const Spacer = styled.div`
    flex-grow: 1;
`
export default Choice;