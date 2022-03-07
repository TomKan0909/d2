import React from 'react';
import styled from 'styled-components';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';
import { Paragraph } from '../../Text';
import { NumberIndicator } from '../../';
import { flex } from '../../Utils/Mixins';
import { Mixins } from '../../Utils';

export interface NumberedLineItemProps
  extends MainInterface,
    ResponsiveInterface,
    React.HTMLAttributes<HTMLDivElement> {
  /* The text on the right. Anything that does not fit is truncated*/
  label?: string;
  /* The number on top of the circle on the left. Anything beyond the first two characters is truncated to ensure proper fitting*/
  value?: number;
  /* Changes whether the colors of the circle holding the number are reversed or not */
  isActive?: boolean;
}

export const NumberedLineItem: React.FC<NumberedLineItemProps> = ({
  label,
  value,
  isActive = true,
  ...props
}): React.ReactElement => (
  <Container {...props}>
    <NumberIndicator value={value} isActive={isActive} />
    <LabelText>{label}</LabelText>
  </Container>
);

/**
 * Label text
 */
const LabelText = styled(Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  width: 50%;
  margin-right: 20px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * Wrapper container
 */
const Container = styled.div`
  ${flex('row')}
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  width: 250px;
  ${Mixins.media(
    'phone',
    `
    width: 100%
  `
  )};
`;
