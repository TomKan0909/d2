import React, { ReactNode, ReactElement, MouseEventHandler } from 'react';
import { NumberedLineItem, DropdownItem, IDropdownProps, Dropdown } from '..';
import { ResponsiveInterface } from '../../Utils/BaseStyles';

export interface DropdownItem {
  /* Text that appears in dropdown for a given row */
  itemString: string;
  /** Number that appears in dropdown for a given row, if no number provided a number will be automatically rendered based on items position */
  itemNumber?: number;
}

export interface MemoNumberedLineItemProps {
  itemString: string;
  itemNumber: number;
  active: boolean;
  mouseEnterHandle: MouseEventHandler;
  mouseLeaveHandle: MouseEventHandler;
}

export interface IStyledDropdownProps
  extends IDropdownProps,
    ResponsiveInterface {
  /* list of items that will be rendered when click on dropdown */
  dropdownList: DropdownItem[];
}

/** Creates memoized version of NumberedLineItem to prevent unnecessary re renders*/
const MemoNumberedLineItem = React.memo<MemoNumberedLineItemProps>(
  ({ itemString, itemNumber, active, mouseEnterHandle, mouseLeaveHandle }) => {
    return (
      <NumberedLineItem
        label={itemString}
        value={itemNumber}
        isActive={active}
        onMouseEnter={mouseEnterHandle}
        onMouseLeave={mouseLeaveHandle}
      />
    );
  }
);
/**
 * Converts two list objects into list of Dropdown.item react objects
 * @param dropdownList  List of string that appears on right when drop down shows up
 * @param valueList  List of values that appears on left when drop down shows up
 * @returns ReactNode[]
 */
const convertToDropdownItem = (dropdownList: DropdownItem[]): ReactNode[] => {
  return dropdownList.map((element, index) => {
    const [active, setActive] = React.useState(false);
    const mouseEnterHandle = React.useCallback(() => {
      setActive(true);
    }, [setActive]);
    const mouseLeaveHandle = React.useCallback(() => {
      setActive(false);
    }, [setActive]);

    const memoNumberedLineItemArgs = {
      itemString: element.itemString,
      itemNumber: element.itemNumber ? element.itemNumber : index + 1,
      active: active,
      mouseEnterHandle: mouseEnterHandle,
      mouseLeaveHandle: mouseLeaveHandle,
    };
    const dropdownItemArgs = { key: index };

    return (
      <DropdownItem {...dropdownItemArgs}>
        <MemoNumberedLineItem {...memoNumberedLineItemArgs} />
      </DropdownItem>
    );
  });
};

export const StyledDropdown: React.FC<IStyledDropdownProps> = ({
  dropdownList,
  ...props
}): ReactElement => {
  const children = convertToDropdownItem(dropdownList);
  return <Dropdown {...props}>{children}</Dropdown>;
};
