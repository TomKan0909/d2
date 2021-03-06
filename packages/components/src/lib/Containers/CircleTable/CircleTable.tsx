import React, { useRef } from 'react';
import styled, { } from 'styled-components';
import { Chair } from '../Chair/Chair';
import { Plus } from '@styled-icons/boxicons-regular';
import { ITable } from "../TablesUtils/ITable";
import { occupancyStatusTypes, Position, tableTypes } from '../TablesUtils/tableTypes';

type callOnTableClickType = () => void;

type getChairsType = () => JSX.Element[];

type getTableInfoContentType = (tableUse: tableTypes) => JSX.Element;

type generateChairKeyType = (pre: string) => string;

/**
 * Primary UI component for user interaction
 */
export const CircleTable: React.FC<ITable> = ({
  tableID = 'T1',
  chairs = [],
  partyName = 'Null',
  occupancyStatus = 'Vacant',
  timeLastServed= '0:00:00',
  relativeSize = 1.0,
  tableUse = 'TableForManagement',
  onTableClick,
  ...props
}) => {
  // Create a reference to the TableBody styled component
  const tableBodyRef = useRef(document.createElement('div'));

  /**
   * Calls the onTableClick prop function with the arrayIndex prop as its
   * parameter
   */
  const callOnTableClick: callOnTableClickType = () =>
    onTableClick();

  /**
   * Returns a JSX element array containing the Chairs and ChairWrappers
   * @return {JSX.Element[]} - Chairs and ChairWrappers for the table
   */
  const getChairs: getChairsType = () =>
    chairs.map((item, index) => (
      <ChairWrapper
        relativeSize={relativeSize}
        numOfChairs={chairs.length}
        counter={index + 1}
        key={generateChairKey(item.position + index)}
        position={item.position}
      >
        <Chair
          relativeSize={relativeSize}
          position={item.position}
          occupiedBy={item.occupiedBy}
          isSeated={item.isSeated}
          isVisible={item.isVisible}
          isRound={item.isRound}
          tableUse={tableUse}
          onChairClick={item.onChairClick}
        />
      </ChairWrapper>
    ));

  /**
   * Generates a unique key based on a string and a random number
   * @param prefix - a string to append to random number
   * @returns {string} a unique key
   */
  const generateChairKey: generateChairKeyType = (prefix) =>
    `${prefix}_${Math.random()}`;

  // Calculate the tangent based on the number of chairs in the array
  const tangent = Math.tan(Math.PI / chairs.length);

  /**
   * Returns a JSX element for the TableBody Content with the correct styles
   * and content based on whether the table is used in the management screen,
   * the add table toolbar, or the create/edit layout screen
   * @returns {JSX.Element} the correct JSX.Element for the TableBody
   */
  const getTableInfoContent: getTableInfoContentType = () => {
    switch (tableUse) {
      case 'AddTableButton':
        return (
          <TableInfo relativeSize={relativeSize}>
            <StyledPlus />
          </TableInfo>
        );
      case 'TableForManagement':
        return (
          <TableInfo relativeSize={relativeSize}>
            <div>
              {tableID}
              <br />
              {partyName}
              <br />
              <Status occupancyStatus={occupancyStatus}>
                {occupancyStatus}
              </Status>
              <br />
            </div>
          </TableInfo>
        );
      case 'TableForEditCanvas':
        return (
          <TableInfo relativeSize={relativeSize}>
            <TableNumForEditScreen relativeSize={relativeSize}>
              {tableID}
              <br />
              {partyName}
              <br />
              <Status occupancyStatus={occupancyStatus}>
                {occupancyStatus}
              </Status>
              {occupancyStatus === 'Occupied' && <text>{`${timeLastServed}`}</text>}
              <br />
            </TableNumForEditScreen>
          </TableInfo>
        );
      default:
        return <div />;
    }
  };

  return (
    <div {...props}>
      <TableBody
        ref={tableBodyRef}
        relativeSize={relativeSize}
        numOfChairs={chairs.length}
        tangentValue={tangent}
        occupancyStatus={occupancyStatus}
        tableUse={tableUse}
        tabIndex={0}
        onClick={callOnTableClick}
      >
        {getChairs()}
        {getTableInfoContent(tableUse)}
      </TableBody>
    </div>
  );
};

type getPositionValueType = (position: Position) => number;

type getTurnValueType = (
  counter: number,
  numOfChairs: number,
  position: Position,
) => string;

const MIN_CHAIRS_BEFORE_TABLE_RESIZE = 4;
const TANGENT_VALUE_FOR_LESS_THAN_THREE_CHAIRS = 1.73;
const MIN_CHAIRS_BEFORE_SET_TANGENT_VALUE = 3;

/**
 * Returns a number value for each position (right, left, top, bottom)
 * that will allow chairs to be positioned on the correct side of the
 * table when there are less than three chairs at a CircleTable component
 *
 * @param position - the position on the table ("top", "bottom", "left", "right")
 * @return {number} - the value associated with a given position
 */
const getPositionValue: getPositionValueType = (position) => {
  switch (position) {
    case 'top':
      return 0.75;
    case 'bottom':
      return 0.25;
    case 'left':
      return 0.5;
    default:
      return 1;
  }
};

/**
 * Returns a string with the correct CSS turn positioning for a given chair
 *
 * @param counter - the chair's number relative to other chairs in the array
 * @param numOfChairs - the total number of chairs at the table
 * @param position - the position for the chair ('top', 'bottom', 'left', 'right')
 * @return {string} - the correct turn value for a specific chair
 */
const getTurnValue: getTurnValueType = (counter, numOfChairs, position) => {
  if (numOfChairs < MIN_CHAIRS_BEFORE_SET_TANGENT_VALUE) {
    return `${getPositionValue(position)}turn / 1`;
  }
  return `${counter}turn / ${numOfChairs}`;
};


/**
 * Variables for the styled components
 */

interface ITableBody {
  numOfChairs: number;
  tangentValue: number;
  occupancyStatus: occupancyStatusTypes;
  relativeSize: number;
  tableUse: string;
  tabIndex: number;
  onClick: (e: Event) => void;
}

const TableBody = styled.div<ITableBody>`
  ${({ relativeSize }) => {
    const BASE_CHAIR_SIZE = 6.5;
    const BASE_TABLE_BORDER_WIDTH = 1.5;
    const BASE_TABLE_BODY_MARGIN = 3;
    return `--chairDiameter: ${
      BASE_CHAIR_SIZE * relativeSize
    }em; /* chair size */
        border-width: ${relativeSize * BASE_TABLE_BORDER_WIDTH}em;
        margin: ${relativeSize * BASE_TABLE_BODY_MARGIN}em;`;
  }}
  --relativeSpaceBetweenChairs: 1; /* how much extra space we want between chairs, 1 = one chair size */
  ${({ numOfChairs, tangentValue }) =>
    `--tangent: ${
      numOfChairs < MIN_CHAIRS_BEFORE_SET_TANGENT_VALUE
        ? TANGENT_VALUE_FOR_LESS_THAN_THREE_CHAIRS
        : tangentValue
    };
        --circleRadius: calc(
            ${numOfChairs < MIN_CHAIRS_BEFORE_TABLE_RESIZE ? 1.0 : 0.5} *
                (1 + var(--relativeSpaceBetweenChairs)) * var(--chairDiameter) / var(--tangent)
        ); /* circle radius */`}
  --containerSize: calc(2 * var(--circleRadius)); /* container size */
  position: relative;
  width: var(--containerSize);
  height: var(--containerSize);
  background-color: ${({ theme, tableUse }) =>
    tableUse === 'AddTableButton' || tableUse === 'TableForEditCanvas'
      ? theme.colors.chairTableEditBackground
      : theme.colors.chairTableBackground};
  border-radius: 50%;
  border-style: ${({ tableUse }) =>
    tableUse === 'AddTableButton' || tableUse === 'TableForEditCanvas'
      ? 'none'
      : 'solid'};
  border-color: ${({ theme, occupancyStatus }) => {
    const {Vacant, Reserved, Occupied} = theme.colors.occupancyStatusColors;
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
  padding: 0;
  outline: none;
  cursor: pointer;
`;

interface IChairWrapper {
  counter: number;
  numOfChairs: number;
  position: Position;
  relativeSize: number;
}

const ChairWrapper = styled.div<IChairWrapper>`
  --chairDiameter: ${({ relativeSize }) => {
    const BASE_CHAIR_SIZE = 6.5;
    return BASE_CHAIR_SIZE * relativeSize;
  }}em; /* chair size */
  --relativeSpaceBetweenChairs: 1; /* how much extra space we want between chairs, 1 = one chair size */
  --circleRadius: calc(
    ${({ numOfChairs }) =>
      numOfChairs < MIN_CHAIRS_BEFORE_TABLE_RESIZE ? 1.0 : 0.5} *
    (1 + var(--relativeSpaceBetweenChairs)) * var(--chairDiameter) /
    var(--tangent)
  ); /* circle radius */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(-0.5 * var(--chairDiameter));
  width: var(--chairDiameter);
  height: var(--chairDiameter);
  --perimeterPlacementValue: calc(
    ${({ counter, position, numOfChairs }) =>
      getTurnValue(counter, numOfChairs, position)}
  );
  transform: rotate(var(--perimeterPlacementValue))
  translate(var(--circleRadius))
  rotate(calc(-1 * var(--perimeterPlacementValue)));
`;

interface ITableInfo {
  relativeSize: number;
}

const TableInfo = styled.div<ITableInfo>`
  ${({ relativeSize }) => {
    const BASE_TABLE_INFO_FONT_SIZE = 2;
    return `font-size: ${BASE_TABLE_INFO_FONT_SIZE * relativeSize}em;`;
  }}
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Status = styled.div<Pick<ITable, 'occupancyStatus'>>`
  color: ${({ theme, occupancyStatus }) => {
    const {Vacant, Reserved, Occupied} = theme.colors.occupancyStatusColors;
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
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
