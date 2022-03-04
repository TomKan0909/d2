import { Meta, Story } from '@storybook/react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import StatusIndicatorGroup, {IStatusIndicatorGroupProps} from './StatusIndicatorGroup';
import { UserCircle } from '@styled-icons/fa-solid/UserCircle';

export default {
    title: 'Terminal/List/StatusIndicatorGroup',
    component: StatusIndicatorGroup,
    args: {
        
    },
} as Meta;

export const Basic: Story<IStatusIndicatorGroupProps> = (args) => <StatusIndicatorGroup {...args} >
    <StatusIndicator
        icon={UserCircle}
        text="Hello Everyone"
        isActive={true}
    />
</StatusIndicatorGroup>;

export const TwoRows: Story<IStatusIndicatorGroupProps> = (args) => <StatusIndicatorGroup {...args} >
    <StatusIndicator
        icon={UserCircle}
        text="Hello Everyone"
        isActive={true}
    />
    <StatusIndicator
        icon={UserCircle}
        text="Hello Everyone 2"
        isActive={false}
    />
</StatusIndicatorGroup>;
