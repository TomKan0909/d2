import React from 'react';
import styled from 'styled-components';
import { StyledIcon, StyledIconProps } from 'styled-icons/types';
import { Mixins, SmallText, SmallTextProps } from '../..';

export interface IStatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: StyledIcon 
    iconProps?: StyledIconProps,
    text: string,
    textProps?: SmallTextProps,
    /** Controls Opacity of the Component */
    isActive: boolean
}

const StatusIndicator = ({
    icon,
    iconProps,
    text,
    textProps,
    isActive,
    ...props
}: IStatusIndicatorProps): React.ReactElement => (
    <Status status={isActive} {...props}>
        <StatusIcon as={icon} {...iconProps}/>
        <StatusText {...textProps}>
            {text}
        </StatusText>
    </Status>
);

interface IStatusProps {
    status: boolean;
}
const Status = styled.div<IStatusProps>`
    ${Mixins.transition(['opacity'], 'page')}
    ${Mixins.flex('flex-start', 'center')}
    opacity: ${({ status }) => (status ? 1 : 0.6)};
    margin-bottom: 4px;
`;

const StatusIcon = styled.svg`
    width: 20px;
    margin: 5px;
    flex-shrink: 0;
`;

const StatusText = styled(SmallText)`
    ${Mixins.transition(['max-width', 'margin', 'opacity'])};
    white-space: nowrap;
    margin-left: 12px;
    color: white;
    font-weight: bold;
    max-width: 255px;
    overflow: hidden;
    ${Mixins.media(
        'tablet',
        `
        max-width: 0;
        opacity: 0;
        margin-left: 0;
    `,
    )}
`;

export default StatusIndicator;

