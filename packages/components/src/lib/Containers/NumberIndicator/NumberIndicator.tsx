import React from 'react';
import styled from 'styled-components';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';
import { Paragraph } from '../../Text';

export interface NumberIndicatorProps
  extends MainInterface,
    ResponsiveInterface,
    React.HTMLAttributes<HTMLDivElement> {
  /* The text within the circle, anything that does not fit is truncated */
  value?: number;
  /* Changes whether colors are reversed or not */
  isActive?: boolean;
}

export const NumberIndicator: React.FC<NumberIndicatorProps> = ({
  value,
  isActive = true,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <OuterCircle $isActive={isActive}>
      <InnerCircle $isActive={isActive}>
        <Text $isActive={isActive}>
          {value && value.toString().slice(0, 2)}
        </Text>
      </InnerCircle>
    </OuterCircle>
  </Wrapper>
);

/**
 * Circle sizes are inherited from this wrapper
 */
const Wrapper = styled.div`
  width: 50px;
  height: 50px;
`;

/**
 * Styled template for circle with centered content
 */
const CircleTemplate = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;

  transition-duration: ${({ theme }) => theme.speed.normal}ms;
`;

/**
 * The outer circle which is visible by default when the isActive prop is set to true
 */
const OuterCircle = styled(CircleTemplate)<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => `
    width: 100%;
    height: 100%;

    border: 6px solid ${$isActive ? theme.colors.background : 'transparent'};
    background: ${$isActive ? theme.colors.primary : 'transparent'};
    box-shadow: ${$isActive ? theme.depth[2] : theme.depth[0]};
  `}
`;

/**
 * The inner circle which is invisible unless the isActive prop is set to false
 */
const InnerCircle = styled(CircleTemplate)<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => `
    width: 90%;
    height: 90%;

    border: 2px solid ${$isActive ? 'transparent' : theme.colors.primary};
    background: ${$isActive ? 'transparent' : theme.colors.background};
  `}
`;

/**
 * The text within the circle
 */
const Text = styled(Paragraph)<{ $isActive: boolean }>`
  font-weight: bold;
  transition-duration: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.background : theme.colors.primary};
`;
