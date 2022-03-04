import { Meta, Story } from '@storybook/react';
import { Button } from '../../Inputs/Button/Button';

import { IStyledDropdownProps, StyledDropdown } from './StyledDropdown';

export default {
  title: 'Components/Molecules/StyledDropdown',
  component: StyledDropdown,
  args: {
    dropdownWidth: 300,
    right: false,
    dropdownButton: <Button>Click me</Button>,
    dropdownList: [
      { itemString: 'About us' },
      { itemString: 'Features' },
      { itemString: 'Ethics' },
    ],
  },
} as Meta;

export const Basic: Story<IStyledDropdownProps> = (args) => (
  <StyledDropdown {...args} />
);

export const CustomNumber = Basic.bind({});
CustomNumber.args = {
  ...CustomNumber.args,
  dropdownList: [
    { itemString: 'About us', itemNumber: 3 },
    { itemString: 'Features', itemNumber: 2 },
    { itemString: 'Ethics', itemNumber: 1 },
  ],
};
