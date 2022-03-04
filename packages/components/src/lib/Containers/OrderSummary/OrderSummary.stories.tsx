import { MainTheme } from "../../Themes/MainTheme";
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { OrderSummary, IOrderSummaryProps } from "./OrderSummary";

const cartProps = {
    _id: '',
    items: [],
    subtotal: 0,
}

export default {
    title: 'Voice User Interface/OrderSummary',
    component: OrderSummary,
} as Meta;

export const Basic: Story<IOrderSummaryProps> = () => (
    <OrderSummary cart={cartProps} />
);