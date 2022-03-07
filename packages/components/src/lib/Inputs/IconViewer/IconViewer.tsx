import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import styled from 'styled-components';
import { MainTheme } from '../../Themes/MainTheme';
import { clickable } from '../../Utils/Mixins';
import { LabelLayout, LabelLayoutProps } from '../../__Layouts';

/**
 * IconViewer props
 */
export interface IconViewerProps extends LabelLayoutProps {
  /** Function to be emmitted when component is clicked */
  onClick: React.MouseEventHandler;
  /** SVG Element used as icon inside component */
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}
/**
 * A CheaprEats IconViewer Component (Simple Black Square) emitting onClick event
 * @param iconName
 * @param displayName
 * @param icon
 */
export const IconViewer: React.FC<IconViewerProps> = ({ 
    icon,
    onClick,
    ...props
  }) => { 
  return (
    <DivWrapper {...props}>
      <SquareWrapper {...props}>
        {icon && (
        <Icon
            as={icon}
            onClick={onClick}
        />
        )}
      </SquareWrapper>
      <LabelLayout {...props}/>
    </DivWrapper>
    
  );
}
interface IconProps {
    as: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
    onClick: React.MouseEventHandler;
}

const DivWrapper = styled.div`
    margin-right: 8px;
    margin-bottom: 40px;
`;

const Icon = styled.svg<IconProps>`
    height: 30px;
    width: 30px;
    ${clickable('black')}
`;

const SquareWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    height: 148px;
    width: 148px;
    ${({ theme }) => `
    background: ${theme.colors.border};
    `}
`;
export default IconViewer;
