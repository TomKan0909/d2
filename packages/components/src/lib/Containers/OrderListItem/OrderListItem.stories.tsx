import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OrderListItem } from './OrderListItem';
import { OrderListItemProps } from '.';


export default {
    title: 'Terminal/Orders/OrderListItem',
    component: OrderListItem,
    argTypes: {
      onClick: {action: "Order was clicked"}
    },
    args: {
        isSelected: false,
        orderId: "ab4s",
        orderType: "Take Out",
        status: "Preparing",
        updatedAt: '234',
        preparingAt: "123",
        timeRemaining: 21,
        paymentMethod: "Credit Card",
        numberOfItems: 2,
    },
} as Meta;

export const Basic: Story<OrderListItemProps> = (args) => (
    <OrderListItem {...args}/>
);
