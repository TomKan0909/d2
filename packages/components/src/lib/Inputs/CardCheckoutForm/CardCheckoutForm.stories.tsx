import { MainTheme } from "../../Themes/MainTheme";
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CardCheckoutForm, ICheckoutFormProps } from "./CardCheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = null;

export default {
    title: 'Voice User Interface/CheckoutForm',
    component: CardCheckoutForm,
    args: {
        isDisabled: false,
    }
} as Meta;

export const Basic: Story<ICheckoutFormProps> = (args) => (
    <Elements stripe={stripePromise} >
        <CardCheckoutForm {...args} />
    </Elements>
);