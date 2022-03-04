import { Meta, Story } from '@storybook/react';
import StatusIndicator, {IStatusIndicatorProps} from './StatusIndicator';
import { UserCircle } from '@styled-icons/fa-solid/UserCircle';

export default {
    title: 'Terminal/List/StatusIndicator',
    component: StatusIndicator,
    args: {
        icon: UserCircle,
        text: "Hello Everyone",
        isActive: true,
    },
    parameters: {
        backgrounds: {
          default: 'twitter',
          values: [
            { name: 'twitter', value: '#00aced' },
            { name: 'facebook', value: '#3b5998' },
          ],
        },
      },
} as Meta;

export const Basic: Story<IStatusIndicatorProps> = (args) => <StatusIndicator {...args} />;
