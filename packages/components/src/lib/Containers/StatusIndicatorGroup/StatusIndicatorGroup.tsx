import React from 'react';
import styled from 'styled-components';
import { Mixins } from '../..';

export type IStatusIndicatorGroupProps = React.HTMLAttributes<HTMLDivElement>;

const StatusIndicatorGroup = ({
    children,
    ...props
}: IStatusIndicatorGroupProps): React.ReactElement => (
    <Container {...props}>
        {children}
    </Container>
);

const Container = styled.div`
    margin: 12px 8px -12px;
    padding: 8px 12px 4px;
    ${({ theme }) => `
        background-color: ${Mixins.darken(theme.colors.primary, 0.1)};
        border-radius: ${theme.dimensions.radius};
    `}
`;

export default StatusIndicatorGroup;

