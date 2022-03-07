import { ReactNode, ReactElement } from 'react';
import { NumberedLineItem, DropdownItem, IDropdownProps, Dropdown } from '..';
import { ResponsiveInterface } from '../../Utils/BaseStyles';

export interface DropdownItem {
  /* Text that appears in dropdown for a given row */
  itemString: string;
  /** Number that appears in dropdown for a given row, if no number provided a number will be automatically rendered based on items position */
  itemNumber?: number;
}

export interface IStyledDropdownProps
  extends IDropdownProps,
    ResponsiveInterface {
  /* list of items that will be rendered when click on dropdown */
  dropdownList: DropdownItem[];
}

/**
 * Converts two list objects into list of Dropdown.item react objects
 * @param dropdownList  List of string that appears on right when drop down shows up
 * @param valueList  List of values that appears on left when drop down shows up
 * @returns ReactNode[]
 */
const convertToDropdownItem = (dropdownList: DropdownItem[]): ReactNode[] => {
  return dropdownList.map((element, index) => {
    return (
      <DropdownItem>
        <NumberedLineItem
          label={element.itemString}
          value={element.itemNumber ? element.itemNumber : index + 1}
        />
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
