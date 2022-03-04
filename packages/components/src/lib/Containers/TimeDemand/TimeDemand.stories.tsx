import { Meta, Story } from '@storybook/react';
import { TimeDemand, StatusEnum, TimeDemandProps} from './TimeDemand';

export default {
    title: 'Components/Atoms/TimeDemand',
    component: TimeDemand,
    argTypes: {
        time: {
            control: {
                type: 'date',
            },
        },
        status: {
            control: {
                type: 'select',
                options: StatusEnum
            }
        }
    },
    args: {
        time: new Date('December 25, 2022 11:40:00'),
        status: StatusEnum.FREE,
    },
    
} as Meta;

export const Basic: Story<TimeDemandProps> = (args) => {
    return <TimeDemand {...args}/>
};
