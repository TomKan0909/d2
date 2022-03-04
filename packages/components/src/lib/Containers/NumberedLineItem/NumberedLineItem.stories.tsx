import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NumberedLineItem, NumberedLineItemProps } from '..';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Components/Other/Numbered Line Item',
  component: NumberedLineItem,
  args: {
    label: 'Feature',
    value: 3,
    isActive: true,
  },
} as Meta;

export const Basic: Story<NumberedLineItemProps> = (args) => (
  <NumberedLineItem {...args} />
);

export const DisabledCircle = Basic.bind({});
DisabledCircle.args = {
  ...DisabledCircle.args,
  label: 'Feature',
  value: 3,
  isActive: false,
};

export const LongText = Basic.bind({});
LongText.args = {
  ...LongText.args,
  label: 'aaaaaaaaaaaaaaaaaaaaaaaa',
  value: 3,
  isActive: true,
};

export const ShortText = Basic.bind({});
ShortText.args = {
  ...ShortText.args,
  label: 'a',
  value: 3,
  isActive: true,
};

export const LongNumber = Basic.bind({});
LongNumber.args = {
  ...LongNumber.args,
  label: 'Feature',
  value: 999999999,
  isActive: true,
};

export const NegativeNumber = Basic.bind({});
NegativeNumber.args = {
  ...NegativeNumber.args,
  label: 'Feature',
  value: -99999999,
  isActive: true,
};

export const NoParams = Basic.bind({});
NoParams.args = {
  ...NoParams.args,
  label: undefined,
  value: undefined,
  isActive: true,
};

export const Mobile = Basic.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};
