import React from 'react';
import styled from 'styled-components';
import {
  MainInterface,
  Responsive,
  ResponsiveInterface,
} from '../../Utils/BaseStyles';

export interface MessageProps
  extends MainInterface,
    ResponsiveInterface,
    React.HTMLAttributes<HTMLDivElement> {
      text?: string,
      outgoing?: boolean,
    }

export const Message: React.FC<MessageProps> = ({
  children,
  ...props
}) : React.ReactElement => props.text ? (<MessageBox {...props}>{props.text}</MessageBox>) : (<div></div>);

const MessageBox = styled.div<MessageProps & MainInterface & ResponsiveInterface>`
    //Basic box styling
    flex-direction: column;
    width: fit-content;
    max-width: 120px;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    justify-content: center;
    padding: 15px;
    text-align: left;
    // Sent vs Received Message Styling
    ${({outgoing}): string => `
      ${outgoing ?
        `background-color: white;
        color: black;
        border-radius: 25px 25px 25px 5px; 
        ` :
        `background-color: red;
        color: white;
        border-radius: 25px 25px 5px 25px; 
        `}
        `
    }
    // Base Styles
    ${Responsive}
    `;

export default Message; 