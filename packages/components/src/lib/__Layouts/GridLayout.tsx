import React from 'react';
import styled from 'styled-components';
import {
    Main,
    MainInterface,
    Responsive,
    ResponsiveInterface,
} from '../Utils/BaseStyles';

export interface GridLayoutProps
    extends MainInterface,
    ResponsiveInterface,
    React.HTMLAttributes<HTMLDivElement> {
}

export const GridLayout: React.FC<GridLayoutProps> = ({
    children,
    ...props
}): React.ReactElement => (
    <Grid {...props}>
        {children}
    </Grid>
);

const Grid = styled.div<GridLayoutProps>`
    // Base Styles
    ${Responsive}
    ${Main}

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default GridLayout;
