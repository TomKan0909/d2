import {Meta, Story} from "@storybook/react";
import {IOvalTable, OvalTable} from "./OvalTable";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Components/TableManagement/OvalTable',
  component: OvalTable,
} as Meta;

const Template: Story<IOvalTable> = (args) => <OvalTable {...args} />;

export const NineChairs = Template.bind({});
NineChairs.args = {
  chairs: [
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Scott',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Dean',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Corey',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Jack',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Sam',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
  ],
  relativeSize: 0.5,
  chairsPosition: 'around',
};

export const TwelveChairs = Template.bind({});
TwelveChairs.args = {
  chairs: [
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Scott',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Jim',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Dean',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Corey',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Jack',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Sam',
      isVisible: true,
      isRound: true,
      relativeSize: 1,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
  ],
  relativeSize: 1,
  chairsPosition: 'around',
};

export const FourChairsTop = Template.bind({});
FourChairsTop.args = {
  chairs: [
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Scott',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Dean',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
  ],
  relativeSize: 0.5,
  chairsPosition: 'top',
};

export const FiveChairsBottom = Template.bind({});
FiveChairsBottom.args = {
  chairs: [
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Scott',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: true,
      occupiedBy: 'Dean',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
    {
      position: 'top',
      isSeated: false,
      occupiedBy: '',
      isVisible: true,
      isRound: true,
      relativeSize: 0.5,
      tableUse: 'TableForManagement',
      onChairClick: action("Chair was clicked"),
    },
  ],
  relativeSize: 0.5,
  chairsPosition: 'bottom',
};
