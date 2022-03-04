import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '..';
import { Button } from '../../Inputs';


export default {
    title: 'Components/atoms/Modal',
    component: Modal,
} as Meta;

export const Basic: Story<ModalProps> = (args) => {
    const Modal1 = useState(false);
    const Modal2 = useState(false);

    return (
        <>
            <Button onClick={() => Modal1[1](true)}>Open modal one</Button>
            <Modal {...args} state={Modal1} />
            <Modal {...args} state={Modal1} padding="20px">
                Modal One
                <Button onClick={() => Modal2[1](true)}>Open modal two</Button>
            </Modal>
            <Modal {...args} state={Modal2} padding="20px">
                Modal Two
            </Modal>
        </>
    );
};
