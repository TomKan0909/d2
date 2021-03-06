/**
 * Documentation – the order of chairs are in the chairs array will populate the table from top left to the bottom right
 * “the purpose of the order in the array is to populate the chairs from top left to bottom right”
 */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular';
import { ITable } from '../TablesUtils/ITable';
import { IChair } from '../Chair/Chair';
import { ChairRow } from './_ChairRow';
import {
  occupancyStatusTypes,
  Position,
  tableTypes,
} from '../TablesUtils/tableTypes';

type callOnTableClickType = () => void;

type getSquareTableSizeType = (
  top: number,
  bottom: number,
  left: number,
  right: number
) => number;

type getRectangleTableType = (top: number, bottom: number) => number;

type addInvisibleChairs = (
  invisibleChairs: Array<IChair>,
  targetSize: number,
  position: Position
) => void;

type getTableBodyContentType = (tableUse: tableTypes) => JSX.Element;

export interface ISquareTable extends ITable {
  /**
   * Whether the table is a square
   */
  isSquare?: boolean;
}

/**
 * Primary UI component for user interaction
 * Square TablesUtils
 */
export const SquareTable: React.FC<ISquareTable> = ({
  tableID = 'T1',
  partyName = 'Null',
  occupancyStatus = 'Vacant',
  timeLastServed = '',
  chairs = [],
  relativeSize = 1.0,
  isSquare = false,
  isSelected = false,
  tableUse = 'TableForManagement',
  onTableClick,
  ...props
}): React.ReactElement => {
  // Create a reference to the TableBody styled component
  const tableBodyRef = useRef(document.createElement('div'));

  /**
   * Split chairs array into four arrays for each table side
   */
  const topArray = Array<IChair>();
  const rightArray = Array<IChair>();
  const bottomArray = Array<IChair>();
  const leftArray = Array<IChair>();

  chairs.map((chair): void => {
    if (chair.position === 'top') {
      topArray.push(chair);
    } else if (chair.position === 'right') {
      rightArray.push(chair);
    } else if (chair.position === 'bottom') {
      bottomArray.push(chair);
    } else {
      leftArray.push(chair);
    }
  });

  /**
   * Calls the onTableClick prop function with the arrayIndex prop as its
   * parameter
   */
  const callOnTableClick: callOnTableClickType = () => onTableClick();

  /**
   * Determines how many chairs to put per each side
   * of a square table (left, right, top, bottom)
   * @param top {number} - Number of chairs on top side
   * @param bottom {number} - Number of chairs on bottom side
   * @param left {number} - Number of chairs on left side
   * @param right {number} - Number of chairs on right side
   * @return {number} - The largest number of chairs
   */

  const getSquareTableSize: getSquareTableSizeType = (
    top,
    bottom,
    left,
    right
  ) => {
    const maxSideValue = Math.max(top, bottom, left, right);
    return maxSideValue > 0 ? maxSideValue : 1;
  };

  const squareTableSize = getSquareTableSize(
    topArray.length,
    bottomArray.length,
    leftArray.length,
    rightArray.length
  );

  /**
   * Determines how many chairs to put on the side and oppositeSide sides
   * of a rectangle table (side, oppositeSide)
   * @param side {number} - Number of chairs on one side
   * @param oppositeSide {number} - Number of chairs on opposite side
   * @return {number} - The largest number of chairs
   */
  const getRectangleTableSize: getRectangleTableType = (side, oppositeSide) => {
    const maxSideValue = Math.max(side, oppositeSide);
    return maxSideValue > 0 ? maxSideValue : 1;
  };

  const rectangleTableHeight = getRectangleTableSize(
    leftArray.length,
    rightArray.length
  );

  const rectangleTableWidth = getRectangleTableSize(
    topArray.length,
    bottomArray.length
  );

  /**
   * Checks an array to see if it has fewer chairs than the target size
   * and adds invisible chairs if needed so array size matches target size
   * Changed name from fillArray to addInvisibleChairs for clarity
   */
  const addInvisibleChairs: addInvisibleChairs = (
    invisibleChairs,
    size,
    position
  ) => {
    while (invisibleChairs.length < size) {
      invisibleChairs.push({
        position,
        isSeated: false,
        occupiedBy: '',
        isVisible: false,
        relativeSize,
        tableUse,
      });
    }
  };

  // Add empty/invisible chairs to the arrays as needed so there are chairs at each
  // spot on the table
  if (isSquare) {
    addInvisibleChairs(topArray, squareTableSize, 'top');
    addInvisibleChairs(bottomArray, squareTableSize, 'bottom');
    addInvisibleChairs(leftArray, squareTableSize, 'left');
    addInvisibleChairs(rightArray, squareTableSize, 'right');
  }

  /**
   * Returns a JSX element for the TableBody Content with the correct styles
   * and content based on whether the table is used in the management screen,
   * the add table toolbar, or the create/edit layout screen
   * @returns {JSX.Element} the correct JSX.Element for the TableBody
   */
  const getTableBodyContent: getTableBodyContentType = () => {
    switch (tableUse) {
      case 'AddTableButton':
        return <StyledPlus />;
      case 'TableForManagement':
        return (
          <Row relativeSize={relativeSize}>
            <TableInfo relativeSize={relativeSize}>
              <div>
                {`${tableID}\n${partyName}`}
                <Status occupancyStatus={occupancyStatus}>
                  {occupancyStatus}
                </Status>
                {occupancyStatus === 'Occupied' && (
                  <text>{`${timeLastServed}`}</text>
                )}
              </div>
            </TableInfo>
            <ColorDiv
              relativeSize={relativeSize}
              chairNumOnSide={isSquare ? squareTableSize : rectangleTableHeight}
              occupancyStatus={occupancyStatus}
            />
          </Row>
        );
      case 'TableForEditCanvas':
        return (
          <TableNumForEditScreen relativeSize={relativeSize}>
            {tableID}
          </TableNumForEditScreen>
        );
      default:
        return <div />;
    }
  };

  return (
    <div {...props}>
      <TableContainer relativeSize={relativeSize} isSelected={isSelected}>
        {/** chairs top */}
        <ChairRow
          position="top"
          chairs={topArray}
          relativeSize={relativeSize}
          tableUse={tableUse}
        />

        {/** table itself */}
        <div>
          <Row relativeSize={relativeSize}>
            {/** chairs left */}
            <ChairRow
              relativeSize={relativeSize}
              position="left"
              chairs={leftArray}
              tableUse={tableUse}
            />

            <TableBody
              ref={tableBodyRef}
              relativeSize={relativeSize}
              chairNumOnSide={isSquare ? squareTableSize : rectangleTableHeight}
              chairNumOnTop={isSquare ? squareTableSize : rectangleTableWidth}
              tableUse={tableUse}
              tabIndex={0}
              onClick={callOnTableClick}
            >
              {getTableBodyContent(tableUse)}
            </TableBody>

            {/** chairs right */}
            <ChairRow
              relativeSize={relativeSize}
              position="right"
              chairs={rightArray}
              tableUse={tableUse}
            />
          </Row>
        </div>

        {/** chairs bottom */}
        <ChairRow
          relativeSize={relativeSize}
          position="bottom"
          chairs={bottomArray}
          tableUse={tableUse}
        />
      </TableContainer>
    </div>
  );
};

/**
 * variables for the styled components
 */

interface ITableContainer {
  relativeSize: number;
  isSelected: boolean;
}

const TableContainer = styled.div<ITableContainer>`
  ${({ isSelected, relativeSize, theme }): string => {
    const BASE_BORDER_RADIUS = 3;
    const PADDING = 1.5;

    if (isSelected) {
      return `
            background-color: ${theme.colors.tableOutline.background};
            border-radius: ${BASE_BORDER_RADIUS * relativeSize}rem;
            width: fit-content;
            padding: ${PADDING * relativeSize}rem;
            border-style: dashed;
            border-color: ${theme.colors.tableOutline.border};
          `;
    }

    return ``;
  }};
`;

interface ITableBody {
  chairNumOnSide: number;
  chairNumOnTop: number;
  relativeSize: number;
  tableUse: tableTypes;
}

const TableBody = styled.div<ITableBody>`
  ${({ chairNumOnSide, chairNumOnTop, relativeSize }) => {
    const BASE_TABLE_BODY_WIDTH_AND_HEIGHT = 20;
    const BASE_BORDER_RADIUS = 3;
    return `height: ${
      chairNumOnSide * BASE_TABLE_BODY_WIDTH_AND_HEIGHT * relativeSize
    }rem;
            width: ${
              chairNumOnTop * BASE_TABLE_BODY_WIDTH_AND_HEIGHT * relativeSize
            }rem;
            border-radius: ${BASE_BORDER_RADIUS * relativeSize}rem;`;
  }}
  background-color: ${({ theme, tableUse }) =>
    tableUse === 'AddTableButton' || tableUse === 'TableForEditCanvas'
      ? theme.colors.chairTableEditBackground
      : theme.colors.chairTableBackground};
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface IColorDiv {
  chairNumOnSide: number;
  occupancyStatus: occupancyStatusTypes;
  relativeSize: number;
}

const ColorDiv = styled.div<IColorDiv>`
  ${({ chairNumOnSide, relativeSize }) => {
    const BASE_COLOR_DIV_HEIGHT = 20;
    const BASE_COLOR_DIV_WIDTH = 3;
    const BASE_COLOR_DIV_BORDER_RADIUS = 3;
    const BASE_COLOR_DIV_MARGIN_RIGHT = 0.95;
    return `height: ${chairNumOnSide * BASE_COLOR_DIV_HEIGHT * relativeSize}rem;
            width: ${BASE_COLOR_DIV_WIDTH * relativeSize}rem;
            margin-right: ${BASE_COLOR_DIV_MARGIN_RIGHT * relativeSize}rem;
            border-top-right-radius: ${
              BASE_COLOR_DIV_BORDER_RADIUS * relativeSize
            }rem;
            border-bottom-right-radius: ${
              BASE_COLOR_DIV_BORDER_RADIUS * relativeSize
            }rem;`;
  }}
  margin-left: auto;

  background-color: ${({ theme, occupancyStatus }) => {
    const { Vacant, Reserved, Occupied } = theme.colors.occupancyStatusColors;
    switch (occupancyStatus) {
      case 'Vacant':
        return Vacant;
      case 'Reserved':
        return Reserved;
      case 'Occupied':
        return Occupied;
      default:
        return '';
    }
  }};
`;

interface IRow {
  relativeSize: number;
}

const Row = styled.div<IRow>`
  display: flex;
  flex-wrap: wrap;
  ${({ relativeSize }) => {
    const BASE_ROW_LEFT_AND_RIGHT_MARGIN = -15;
    return `margin-right: ${BASE_ROW_LEFT_AND_RIGHT_MARGIN * relativeSize}px;
            margin-left: ${BASE_ROW_LEFT_AND_RIGHT_MARGIN * relativeSize}px;`;
  }}
`;

interface ITableInfo {
  relativeSize: number;
}

const TableInfo = styled.div<ITableInfo>`
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  white-space: pre-line;
  text-align: left;
  ${({ relativeSize }) => {
    const BASE_TABLE_INFO_MARGIN_TOP = 2;
    const BASE_TABLE_INFO_MARGIN_LEFT = 3;
    const BASE_TABLE_INFO_FONT_SIZE = 2;
    return `margin-top: ${BASE_TABLE_INFO_MARGIN_TOP * relativeSize}rem;
            margin-left: ${BASE_TABLE_INFO_MARGIN_LEFT * relativeSize}rem;
            font-size: ${BASE_TABLE_INFO_FONT_SIZE * relativeSize}em;`;
  }}
`;

const Status = styled.div<Pick<ISquareTable, 'occupancyStatus'>>`
  color: ${({ theme, occupancyStatus }) => {
    const { Vacant, Reserved, Occupied } = theme.colors.occupancyStatusColors;
    switch (occupancyStatus) {
      case 'Vacant':
        return Vacant;
      case 'Reserved':
        return Reserved;
      case 'Occupied':
        return Occupied;
      default:
        return '';
    }
  }};
`;

const StyledPlus = styled(Plus)`
  color: black;
  width: 75%;
  height: 100%;
  margin: auto;
  display: block;
`;

interface ITableNumForEditScreen {
  relativeSize: number;
}

const TableNumForEditScreen = styled.div<ITableNumForEditScreen>`
  color: black;
  ${({ relativeSize }) => {
    const BASE_TABLE_NUM_FONT_SIZE = 5;
    return `font-size: ${BASE_TABLE_NUM_FONT_SIZE * relativeSize}em;`;
  }}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
