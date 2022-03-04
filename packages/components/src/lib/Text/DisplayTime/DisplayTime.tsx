import React, { useEffect, useState } from 'react';
import { Paragraph } from '..';

export interface DisplayTimeProps extends React.HTMLAttributes<HTMLDivElement>  {
  color: string
}

export const DisplayTime: React.FC<DisplayTimeProps> = ({
  color = "white",
  ...props
}) => {
    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        window.setTimeout(() => {
            setTime(new Date());
        }, 1000);
    }, [time]);

    return (
        <Paragraph color={color} bold {...props}>
            {time.toLocaleTimeString()}
        </Paragraph>
    );
}

export default DisplayTime;
