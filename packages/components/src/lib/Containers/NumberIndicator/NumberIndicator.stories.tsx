import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NumberIndicator, NumberIndicatorProps } from '..';

export default {
  title: 'Components/Other/Number Indicator',
  component: NumberIndicator,
  args: {
    value: 1,
    isActive: true,
  },
} as Meta;

export const Basic: Story<NumberIndicatorProps> = (args) => (
  <NumberIndicator {...args} />
);

export const ShortValueDisabled = Basic.bind({});
ShortValueDisabled.args = {
  ...ShortValueDisabled.args,
  value: 1,
  isActive: false,
};

export const LongValueActive = Basic.bind({});
LongValueActive.args = {
  ...LongValueActive.args,
  value: 99999,
  isActive: true,
};

export const LongValueDisabled = Basic.bind({});
LongValueDisabled.args = {
  ...LongValueDisabled.args,
  value: 99999,
  isActive: false,
};

export const NoValue = Basic.bind({});
NoValue.args = {
  ...NoValue.args,
  value: undefined,
  isActive: true,
};
