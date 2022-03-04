import {
  OrderItemList,
  OrderTotalCard,
} from "../../Containers";
import React from "react";
import {
    SmallText,
    Paragraph,
} from '../../Text';
import styled from "styled-components";

export interface MenuItem {
    _id: string;
    name: string;
    price: number;
}

export interface Cart {
    _id: string;
    items: {menu_item: MenuItem}[];
    subtotal: number;
}

export interface IOrderSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  cart: Cart;
  align?: "left" | "center" | "right";
}

export const OrderSummary: React.VFC<IOrderSummaryProps> = ({
  cart,
  ...props
}) => {
  if (!cart) {
    return <SmallText>Loading...</SmallText>;
  }

  let itemList: { name: string; price: string }[] = [];

  /**
   * Add items in cart to order summary via hook state
   * @param {MenuItem} element - item
   */
  const buildItems = (element: { menu_item: MenuItem }) => {
    if (!element.menu_item) {
      return;
    }

    const item = {
      name: element.menu_item.name,
      price: "$" + element.menu_item.price.toString(),
    };

    itemList.push(item);
  };

  cart.items.forEach(buildItems);

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  });


  return (
    <div {...props}>
      <UnderlinedParagraph >
        Order Summary
      </UnderlinedParagraph>
      <OrderTable items={itemList} />
      <OrderCard
        orderCardContents={[
          {
            name: "Subtotal",
            price: formatter.format(cart.subtotal),
          },
          {
            name: "Tax",
            price: formatter.format(cart.subtotal * 0.13),
          },
          {
            isBold: true,
            name: "Total",
            price: formatter.format(cart.subtotal * 1.13),
          },
        ]}
      />
    </div>
  );
};

const OrderTable = styled(OrderItemList)`
  width: 80%;
  margin: 0 auto 1em auto;
`;

const UnderlinedParagraph = styled(Paragraph)`
  margin: 0 0 0.5em 0;
  color: black;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
`;

const OrderCard = styled(OrderTotalCard)`
  width: 80%;
  padding: 0.5em;
  margin: 1em auto 1em auto;
`;

export default OrderSummary;