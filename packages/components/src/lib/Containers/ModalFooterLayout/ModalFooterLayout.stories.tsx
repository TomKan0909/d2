import { Meta, Story } from '@storybook/react';
import { ModalFooterLayout, ModalFooterLayoutProps } from '..';
import { Button } from '../../Inputs';

export default {
    title: 'Components/TableManagement/ModalFooterLayout',
    component: ModalFooterLayout,
    args: {
        footerLeft: <Button>Start</Button>,
        footerRight: <Button>End</Button>
    }
} as Meta;

export const LeftRightOnly: Story<ModalFooterLayoutProps> = (args) => <ModalFooterLayout {...args} />;

export const AllProps = LeftRightOnly.bind({});
AllProps.args = {
    ...LeftRightOnly.args,
    footerCenter: <Button>Center</Button>,
};

export const RightOnly = LeftRightOnly.bind({});
RightOnly.args = {
    footerLeft: undefined,
    footerRight: <Button>Continue</Button>
};
