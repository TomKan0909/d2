import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CartButton, CartButtonProps } from '..';

export default {
  title: 'Components/Other/Cart Button',
  component: CartButton,
  args: {
    quantity: 1,
    price: 3,
  },
} as Meta;

export const Basic: Story<CartButtonProps> = (args) => <CartButton {...args} />;

export const DecimalValue = Basic.bind({});
DecimalValue.args = {
  ...DecimalValue.args,
  quantity: 1,
  price: 3.1415926,
};

export const LongParams = Basic.bind({});
LongParams.args = {
  ...LongParams.args,
  quantity: 999999,
  price: 999999,
};
