import { Heading, SettingsSwitch } from '@ce/components';
import React from 'react';
import { Modal } from '..';
import styled from 'styled-components';

export interface OrdersSettingsModalProps  {
  modalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  onClose: () => void,
  isKitchenModeEnabled: boolean,
  isMultipleRowsEnabled: boolean,
  isFullCustomerNamesEnabled: boolean,
  onEnableKitchenMode: () => void,
  onEnableMultipleRows: () => void,
  onEnableFullCustomerNames: () => void
}
// TODO: Fix Preparing Time Countdown | Original https://github.com/cheapreats/cheapreats-terminal/blob/master/src/pages/Dashboard/Orders/OrderCountdown.tsx
export const OrdersSettingsModal: React.FC<OrdersSettingsModalProps> = ({
  modalState,
  onClose,
  isKitchenModeEnabled,
  isMultipleRowsEnabled,
  isFullCustomerNamesEnabled,
  onEnableKitchenMode,
  onEnableMultipleRows,
  onEnableFullCustomerNames,
  ...props
}) => {
  return (
        <Modal
            id="settings-modal"
            state={modalState}
            padding="20px 25px"
            onClose={onClose}
            data-cy="modalDiv"
            {...props}
        >
            <Heading
                type="h1"
                margin="15px 25px 25px"
                bold
                data-cy={'orderSettingsModalHeader'}
            >
                Order Settings
            </Heading>
            <SettingsSwitch
                margin="20px 25px"
                height="45px"
                isChecked={isKitchenModeEnabled}
                onSwitch={onEnableKitchenMode}
                onSwitchValue={!isKitchenModeEnabled}
                text="Kitchen Mode"
                type="h3"
                data-cy={'kitchenModeToggle'}
            />
            <ModalScreen disabled={!isKitchenModeEnabled} data-cy={'modalScreen'}>
                <SettingsSwitch
                    margin="20px 25px"
                    height="45px"
                    isChecked={isMultipleRowsEnabled}
                    onSwitch={onEnableMultipleRows}
                    disabled={!isKitchenModeEnabled}
                    onSwitchValue={{ type: 'rows' }}
                    text="Multiple Rows"
                />
                <SettingsSwitch
                    margin="20px 25px"
                    height="45px"
                    isChecked={isFullCustomerNamesEnabled}
                    onSwitch={onEnableFullCustomerNames}
                    disabled={!isKitchenModeEnabled}
                    onSwitchValue={{ type: 'fullname' }}
                    text="Show Full Customer Names"
                />
            </ModalScreen>
        </Modal>
  );
}

export default OrdersSettingsModal;

interface ModalScreenProps {
  disabled?: boolean;
}

const ModalScreen = styled.div<ModalScreenProps>`
  margin-left: 50px;
  opacity: ${(props) => props.disabled && 0.4};
`;