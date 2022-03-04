import { MainTheme } from '../../Themes/MainTheme';
import React from 'react'
import styled from 'styled-components';

export interface DividerProps extends React.HTMLAttributes<HTMLFieldSetElement> {
    color?: string,
    children?: React.ReactElement,
    thickness?: string,
}

export const Divider: React.FC<DividerProps> = ({
    color = MainTheme.colors['border'],
    children,
    thickness = '1px',
    ...props
}): React.ReactElement => {
    return (
        <StyledFieldSet
            dividerThickness={thickness} 
            dividerColor={color} 
            {...props} >
            <legend children={children} />
        </StyledFieldSet>
    );
}

const StyledFieldSet = styled.fieldset<{ dividerThickness:string, dividerColor: string }>`
  ${({ dividerThickness, dividerColor }) => `
    border-top: ${dividerThickness} solid ${dividerColor} ;
  `}
  border-bottom: none;
  border-left: none;
  border-right: none;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  display: block;
`;

export default Divider;