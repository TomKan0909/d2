import { Meta, Story } from '@storybook/react';
import  SnowFall from './SnowFall';

export default {
  title: 'Components/Atoms/Snowfall',
  component: SnowFall,
  argTypes: {
    color : {
      control: 'color',
    },
    snowflakeCount: {
      control: 'number'
    }
  },
} as Meta;

export const Basic: Story = (args) => <SnowFall {...args}/>; 
