import { Mixins, Paragraph, SmallText } from '@ce/components';
import React from 'react';
import { ListItem, OrderStatus, OrderStatusIdentifier } from '..';
import styled from 'styled-components';

export interface OrderListItemProps  {
  onClick: () => void;
  /* Last 4 Charecters of the Order ID */
  orderId: string;
  isSelected?: boolean;
  orderType: string;
  status: OrderStatusIdentifier;
  paymentMethod: string;
  updatedAt: string;
  numberOfItems: number;
  preparingAt: number;
  timeRemaining: number;
}
// TODO: Fix Preparing Time Countdown | Original https://github.com/cheapreats/cheapreats-terminal/blob/master/src/pages/Dashboard/Orders/OrderCountdown.tsx
export const OrderListItem: React.FC<OrderListItemProps> = ({
  onClick,
  isSelected = false,
  orderId,
  orderType,
  status,
  updatedAt,
  preparingAt,
  paymentMethod,
  numberOfItems,
  timeRemaining,
  ...props
}) => {
  return (
    <StyledListItem
        {...props}
        onClick={onClick}
        isSelected={isSelected}
    >
        <Container data-cy="orderItemText">
            <Paragraph bold>
                Order #{orderId}
            </Paragraph>
            <Row>
              <OrderStatus
                  large={false}
                  orderStatus={status}
                  data-cy="currentOrderStatus"
              />
              {/* {status === Enums.OrderStatusIdentifier.PREPARING && ( */}
                <SmallText margin={"0 0 0 5px"} type="p" bold color="secondary">
                   {`- ${timeRemaining}`}
                </SmallText>
              {/* )} */}
            </Row>
            <SmallText type="p" color="secondary" bold>
                {updatedAt}
            </SmallText>
        </Container>
        <Details>
            <SmallText type="p" color="secondary" bold>
                {paymentMethod}
            </SmallText>
            <SmallText type="p" bold color="secondary">
                {numberOfItems}
                {numberOfItems > 1
                    ? "items"
                    : "item"}
            </SmallText>
            <SmallText type="p" bold color="secondary">
                {orderType}
            </SmallText>
        </Details>
    </StyledListItem>
  );
}

export default OrderListItem;

interface ListItemProps {
  isSelected?: boolean;
}

const StyledListItem = styled(ListItem)<ListItemProps>`
  ${Mixins.transition(['background-color'])};
  ${({ isSelected }) =>
      isSelected
          ? `
      background-color: ${Mixins.darken('#ffffff', 0.06)}
  `
          : Mixins.clickable('#ffffff', 0.03)};
  ${Mixins.flex('space-between')};
  cursor: pointer;
`;

const Container = styled.div``;

const Details = styled.div`
  text-align: right;
`;

const Row = styled.div`
  display: flex;
`;