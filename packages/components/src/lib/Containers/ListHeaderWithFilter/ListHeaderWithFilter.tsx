import { SearchBarExpandableProps, Select } from '@ce/components';
import React from 'react';
import { StyledIcon } from 'styled-icons/types';
import { ListHeader } from '..';

export interface ListHeaderWithFilterProps  {
  headerTitle: string,
  headerIcon: StyledIcon,
  onSettingsIconClick: () => void,
  settingsProps: string,
  searchBarProps: SearchBarExpandableProps,
  onSearch: () => void,
  onSearchClose: () => void,
  filterValue: string,
  onFilterChange: () => void,
  filterLabel: string,
  filterPlaceholder: string,
  filterOptions: string[]
}

export const ListHeaderWithFilter: React.FC<ListHeaderWithFilterProps> = ({
  headerTitle,
  headerIcon,
  onSettingsIconClick,
  settingsProps,
  searchBarProps,
  onSearch,
  onSearchClose,
  filterValue,
  onFilterChange,
  filterLabel,
  filterPlaceholder,
  filterOptions,
  ...props
}) => {
  return (
    <ListHeader
      label={headerTitle}
      headerFlex="space-between"
      icon={headerIcon}
      data-cy={'settingsHeader'}
      iconClick={onSettingsIconClick}
      iconProps={settingsProps}
      searchBarWidth="125px"
      padding="20px"
      onSearch={onSearch}
      onClose={onSearchClose}
      searchBarProps={searchBarProps}
    >
        <Select
            name={'filter'}
            label={filterLabel}
            placeholder={filterPlaceholder}
            margin="5px 0 5px"
            value={filterValue}
            onChange={onFilterChange}
            data-cy="selectOrdersFilter"
        >
            {filterOptions.map((label) => (
                <option
                    key={label}
                    value={label}
                    data-cy={label + 'Option'}
                >
                    {label}
                </option>
            ))}
        </Select>
    </ListHeader>
  );
}

export default ListHeaderWithFilter;
