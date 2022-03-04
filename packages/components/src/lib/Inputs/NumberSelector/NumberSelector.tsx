import React from "react";
import styled from "styled-components";
import { ChevronUp } from '@styled-icons/bootstrap/ChevronUp';
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown';

export interface NumberSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
    // The default number for the number selector
    number?: number,
    // The color you want the number selector to be
    color?: string
}

export const NumberSelector: React.FC<NumberSelectorProps> = ({
    number,
    color,
    ...props
}): React.ReactElement => (
    <DivWrapper {...props}>
        <NumberText>
            {number}
        </NumberText>
        <IconWrappers>
            <Button>
                <UpIcon />
            </Button>
            <Button>
                <DownIcon />
            </Button>
        </IconWrappers>
    </DivWrapper>
    
)

const DivWrapper = styled.div `
    display: flex;
    border-radius: 10px;
    border: 1px solid red;
    width: 60px;
`

const UpIcon = styled(ChevronUp) `
    width: 10px;
    height: 10px;
    color: ${ ({ theme }) => theme.colors.primary}
`

const DownIcon = styled(ChevronDown) `
    width: 10px;
    height: 10px;
    color: ${({theme}) => theme.colors.primary};
`

const NumberText = styled.span `
    margin: 10px;
    color: ${({theme}) => theme.colors.primary};
`

const Button = styled.button `
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 10px;
`

const IconWrappers = styled.span `
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: auto;
`

export default NumberSelector;