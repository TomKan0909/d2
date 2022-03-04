import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { OrdersSettingsModal } from './OrdersSettingsModal';
import { OrdersSettingsModalProps } from '.';


export default {
    title: 'Terminal/Orders/OrdersSettingsModal',
    component: OrdersSettingsModal,
    argTypes: {
        onClose: {action: "Close Modal"},
        onEnableKitchenMode: {action: "Show Kitchen Mode"},
        onEnableMultipleRows: {action: "Show Multiple Rows"},
        onEnableFullCustomerNames: {action: "Show Full Names"},
    },
    args: {
        isKitchenModeEnabled: true,
        isMultipleRowsEnabled: true,
        isFullCustomerNamesEnabled: false,
    },
} as Meta;

export const Basic: Story<OrdersSettingsModalProps> = (args) => {
    const Modal1 = useState(true);
    return <OrdersSettingsModal {...args} modalState={Modal1}/>
};
