import React from 'react';
import styled from 'styled-components';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';
import { flex } from '../../Utils/Mixins';
import { Button, ButtonProps } from '..';
import { NumberIndicator } from '../../Containers/NumberIndicator/NumberIndicator';

export interface CartButtonProps
  extends MainInterface,
    ResponsiveInterface,
    ButtonProps {
  /* The total number of cart items, any quantity beyond two digits is truncated */
  quantity: number;
  /* The total cost of all cart items, displayed with two decimal places*/
  price: number;
}

export const CartButton: React.FC<CartButtonProps> = ({
  quantity,
  price,
  ...props
}): React.ReactElement => (
  <StyledButton primary={true} {...props}>
    <Container>
      <Circle value={quantity} />
      {price.toFixed(2)}
    </Container>
  </StyledButton>
);

/**
 * Button with reduced padding
 */
const StyledButton = styled(Button)`
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
`;

/**
 * Circle on the left in container
 */
const Circle = styled(NumberIndicator)`
  width: 40px;
  height: 40px;
  margin: 8px;
`;

/**
 * Container for button content
 */
const Container = styled.div`
  ${flex('row')}
  align-items: center;
  justify-content: space-between;
`;
