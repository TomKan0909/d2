import { 
    Card,
    CardCheckoutForm,
    Header,
    Heading,
    MainTheme,
    OrderSummary,
    SmallText,
} from "@ce/components";
import { Elements } from "@stripe/react-stripe-js";
import { ISnowyBackgroundProps, SnowyBackgroundTemplate } from './SnowyBackgroundTemplate';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

const cartProps = {
    _id: '',
    items: [],
    subtotal: 0,
}

const LOGO =
  "https://www.cheapreats.com/static/90939a6dc8dacea8e44d046c72521a1b/16c7d/logo.png";

export default {
    title: 'Voice User Interface/SnowyBackground/SnowyBackground Template',
    component: SnowyBackgroundTemplate,
    args: {
        backgroundColor: MainTheme.colors.voiceOrderingColors.backgroundGradient,
        snowColor: 'white',
    },
}

export const Empty: Story<ISnowyBackgroundProps> = () => (
    <SnowyBackgroundTemplate />
);

export const Checkout: Story<ISnowyBackgroundProps> = (args) => (
    <SnowyBackgroundTemplate {...args} >
        <Card>
            <OrderSummary cart={cartProps} />
            <Header>Payment</Header>
            <Elements stripe={null}>
                <CardCheckoutForm />
            </Elements>
        </Card>
    </SnowyBackgroundTemplate>
);

export const Success: Story<ISnowyBackgroundProps> = (args) => (
    <SnowyBackgroundTemplate {...args} >
        <Card>
            <img src={LOGO} />
            <StyledHeading >Thanks for your order! </StyledHeading>
            <StyledSmallText > 
                We appreciate your business! If you have any questions, please email
                <a href="mailto:hello@cheapreats.com"> hello@cheapreats.com </a>
            </StyledSmallText>
        </Card>
    </SnowyBackgroundTemplate>
);

const StyledHeading = styled(Heading)`
    color: green;
    font-weight: bold;
    text-align: center;
`;

const StyledSmallText = styled(SmallText)`
    font-size: large;
    text-align: center;
`;