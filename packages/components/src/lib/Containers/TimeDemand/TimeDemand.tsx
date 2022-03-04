import React from 'react';
import style, { useTheme } from 'styled-components';

export enum StatusEnum {
    /** Status type of TimeDemand Component with value FREE; indicates vendor has little to no customers */
    FREE = 'FREE',
    /** Status type of TimeDemand Component with value GETTING_BUSY; indicates vendor has few-many customers */
    GETTING_BUSY = 'GETTING_BUSY',
    /** Status type of TimeDemand Component with value BUSY; indicates vendor is close to max capacity */
    BUSY = 'BUSY'
}

export interface TimeDemandProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Time of TimeDemandProps */
    time: Date;
    /** Status of TimeDemandProps */
    status: StatusEnum;
}

/**
 * Returns date object formatted in HH:MM:AM/PM string format
 * @param {Date} time - Date object passed into component to represent time
 * @return {string} - Date object formatted as string format HH:MM:AM/PM
 */
const getDisplayTime = (time: Date): string => {
    const str: string = time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    return str;
}

/**
 * Returns the color of status bar 
 * @param {StatusEnum} status - StatusEnum type representing how busy vendor is
 */
const getStatusColor = (status: StatusEnum): string => {
    const theme = useTheme();
    const { green, orange, red } = theme.colors.statusColors;
    switch(status){
        case StatusEnum.FREE:
            return green;
        case StatusEnum.GETTING_BUSY:
            return orange;
        case StatusEnum.BUSY:
            return red;
    }
}


export const TimeDemand: React.FC<TimeDemandProps> = ({
    time = new Date(),
    status,
    ...props
}): React.ReactElement => {
    time = new Date(time);
    
    const handleTime = React.useCallback(
        (time: Date): string => getDisplayTime(time),
        [time]
    );

    const handleStatusColor = React.useCallback(
        (status: StatusEnum): string => getStatusColor(status),
        [status]
    );

    return (
        <DivWrapper {...props}>
            <TimeText>
                {handleTime(time)}
            </TimeText>
            <StatusLine color={handleStatusColor(status)}/>
        </DivWrapper>
    )
};

const DivWrapper = style.div`
    display: inline-block;
`

const TimeText = style.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => `
    font-family: ${theme.font.family};
`}
`;

const StatusLine = style.hr`
    height: 2px;
    color: ${({ color }) => color };
`;

export default TimeDemand;
