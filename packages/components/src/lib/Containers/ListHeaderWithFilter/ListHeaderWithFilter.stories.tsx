import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ListHeaderWithFilter } from './ListHeaderWithFilter';
import { ListHeaderWithFilterProps } from '.';


export default {
    title: 'Terminal/Orders/ListHeaderWithFilter',
    component: ListHeaderWithFilter,
    argTypes: {
        onSettingsIconClick: {action: "Settings Icon Clicked"},
        onSearch: {action: "Searching"},
        onSearchClose: {action: "Search Closed"},
        onFilterChange: {action: "Filter Option Changed"}
    },
    args: {
        headerTitle: "Orders",
        headerIcon: "",
        settingsProps: {},
        searchBarProps: {},
        filterValue: "1",
        filterLabel: "Filter Orders",
        filterPlaceholder: "Placed",
        filterOptions: ["1","2","3"],
    },
} as Meta;

export const Basic: Story<ListHeaderWithFilterProps> = (args) => (
    <ListHeaderWithFilter {...args}/>
);
