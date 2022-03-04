import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EditDraggableCanvas, IEditDraggableCanvas } from './EditDraggableCanvas';
import {action} from "@storybook/addon-actions";


export default {
  title: 'Components/TableManagement/EditDraggableCanvas',
  component: EditDraggableCanvas,
} as Meta;

const Template: Story<IEditDraggableCanvas> = (args) => (
  <EditDraggableCanvas {...args} />
);

/**
 * Will print out the index, x and y coordinates of Draggable TablesUtils
 * when the drag stops
 * @param selectedChildIndex
 * @param deltaX
 * @param deltaY
 */
const handleOnStop = (
  selectedChildIndex: number,
  deltaX: number,
  deltaY: number,
) => {
  console.log(selectedChildIndex, deltaX, deltaY);
};

export const NewUserCanvasExample = Template.bind({});
NewUserCanvasExample.args = {
  currentNumberOfChairs: 0,
  maxCapacity: 0,
  canvasType: 'newUserCanvas',
  handleStop: handleOnStop,
  onTableClick: action("TablesUtils was clicked!"),
  tables: [
    {
      tableShape: 'Square',
      tableInput: {
        tableID: 'T1',
        partyName: '',
        isSquare: true,
        occupancyStatus: 'Vacant',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 50, y: 24 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    },
  ],
};

/**
 * Example of component for use with the Edit screen
 */
export const EditCanvasExample = Template.bind({});
EditCanvasExample.args = {
  currentNumberOfChairs: 0,
  maxCapacity: 0,
  canvasType: 'editCanvas',
  handleStop: handleOnStop,
  onTableClick: action("TablesUtils was clicked!"),
  selectedIndex: 3,
  tables: [
    {
      tableShape: 'Square',
      tableInput: {
        tableID: 'T1',
        partyName: '',
        isSquare: true,
        occupancyStatus: 'Vacant',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 50, y: 24 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    },
    {
      tableShape: 'Square',
      tableInput: {
        tableID: 'T5',
        partyName: 'Tina',
        isSquare: true,
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Suzy',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'left',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'right',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 375, y: 37 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    },
    {
      // table 4 beginning
      tableShape: 'Circle',
      tableInput: {
        tableID: 'T4',
        partyName: 'Scott',
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Sarah',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Dean',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Claire',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 367, y: 154 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 4 end
    {
      // table 3 beginning
      tableShape: 'Square',
      tableInput: {
        tableID: 'T3',
        partyName: 'Dmytro',
        isSquare: false,
        occupancyStatus: 'Reserved',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 210, y: 57 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 3 end
    {
      // table 2 beginning
      tableShape: 'Circle',
      tableInput: {
        tableID: 'T2',
        partyName: 'Corey',
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Bob',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Joe',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Mike',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Paula',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Ashley',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForEditCanvas',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForEditCanvas',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 43, y: 177 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 2 end
  ],
  onChairClick: action("The chair was clicked!"),
};

/**
 * Example of component for use with the Management screen
 */
export const MgmtCanvasExample = Template.bind({});
MgmtCanvasExample.args = {
  currentNumberOfChairs: 0,
  maxCapacity: 0,
  canvasType: 'managementCanvas',
  handleStop: handleOnStop,
  onTableClick: action("TablesUtils was clicked!"),
  tables: [
    {
      tableShape: 'Square',
      tableInput: {
        tableID: 'T1',
        partyName: '',
        isSquare: true,
        occupancyStatus: 'Vacant',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForManagement',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 50, y: 24 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    },
    {
      tableShape: 'Square',
      tableInput: {
        tableID: 'T5',
        partyName: 'Tina',
        isSquare: true,
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Suzy',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'left',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'right',
            isSeated: true,
            occupiedBy: 'Tina',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForManagement',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 375, y: 37 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    },
    {
      // table 4 beginning
      tableShape: 'Circle',
      tableInput: {
        tableID: 'T4',
        partyName: 'Scott',
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Sarah',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Dean',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Claire',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForManagement',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 367, y: 154 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 4 end
    {
      // table 3 beginning
      tableShape: 'Square',
      tableInput: {
        tableID: 'T3',
        partyName: 'Dmytro',
        isSquare: false,
        occupancyStatus: 'Reserved',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForManagement',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 210, y: 57 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 3 end
    {
      // table 2 beginning
      tableShape: 'Circle',
      tableInput: {
        tableID: 'T2',
        partyName: 'Corey',
        occupancyStatus: 'Occupied',
        timeLastServed:"00:00:00",
        relativeSize: 0.25,
        chairs: [
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Bob',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Joe',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Mike',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Paula',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
          {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Ashley',
            isVisible: true,
            isRound: true,
            relativeSize: 1,
            tableUse: 'TableForManagement',
            onChairClick: action("The chair was clicked!"),
          },
        ],
        tableUse: 'TableForManagement',
        onTableClick: action("TablesUtils was clicked!"),
      },
      handleStop: handleOnStop,
      defaultXY: { x: 43, y: 177 },
      arrayIndex: 0,
      selectedIndex: 3,
      onTableClick: action("TablesUtils was clicked!"),
      onChairClick: action("The chair was clicked!"),
    }, // table 2 end
  ],
};