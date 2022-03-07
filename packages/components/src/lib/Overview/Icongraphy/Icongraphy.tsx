import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import {
    GridLayout,
    GridLayoutProps,
    LabelLayoutProps,
} from '../../__Layouts';
import { IconViewer, IconViewerProps } from '../..';
import { Heading } from '../../Text';

export interface IcongraphyItem extends IconViewerProps {}

export interface IcongraphyProps extends GridLayoutProps {
    /* list of icons to display for icongraphy */
  iconList: IcongraphyItem[];
}

/**
 * Converts two list objects into list of Dropdown.item react objects
 * @param iconList  List of string that appears on right when drop down shows up
 * @param valueList  List of values that appears on left when drop down shows up
 * @returns ReactNode[]
 */
const convertToIconListItem = (iconList: IcongraphyItem[]): ReactNode[] => {
  return iconList.map(({icon, label, description}) => {
    return (
      <div>
        <IconViewer
          icon={icon} 
          label={label} 
          description={description}
          onClick={() => navigator.clipboard.writeText(description||'')}
        />
      </div>
    );
  });
};

export const Icongraphy: React.FC<IcongraphyProps> = ({
  iconList,
  gridProps,
  ...props
}): ReactElement => {
    const children = convertToIconListItem(iconList);
    return (
    <DivWrapper {...props}>
        <Heading type="h1" bold>
            Icongraphy
        </Heading>
        <hr></hr>
        <GridLayout {...gridProps}>
            {children}
        </GridLayout>
    </DivWrapper>
    );
};

const DivWrapper = styled.div`
    @media (min-width: 1280px) {
        padding: 32px 200px 40px 200px;
    }

    @media (max-width: 1280px) {
        padding: 32px 16px 40px 16px;
    }
`;
