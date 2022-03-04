import React from "react";
import {
  PaymentElement,
  // CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { Button } from "../../Inputs/Button/Button";
import styled from "styled-components";

export interface ICheckoutFormProps extends React.HTMLAttributes<HTMLFormElement> {
  isDisabled?: boolean,
}

export const CardCheckoutForm: React.FC<ICheckoutFormProps> = ({ 
    isDisabled = false,
    ...props
}): React.ReactElement => {

    return (
        <Form {...props} >
            <PaymentElement />
            <StyledButton disabled={isDisabled} >
                Pay
            </StyledButton>
        </Form>
    )
};

const Form = styled.form`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledButton = styled(Button)`
  margin-top: 1em;
`;

export default CardCheckoutForm;