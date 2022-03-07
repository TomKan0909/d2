import React from 'react';
import styled from 'styled-components';
import {
  MainInterface,
  Responsive,
  ResponsiveInterface,
} from '../../Utils/BaseStyles';

import { Message } from '..';

export interface ChatProps
  extends MainInterface,
    ResponsiveInterface,
    React.HTMLAttributes<HTMLDivElement> {
      messages: {sender: boolean, message: string}[]
    }

export const Chat: React.FC<ChatProps> = ({
  children,
  ...props
}): React.ReactElement => (
  <div>
    {props.messages.map((m) => {
      return (
        <Container>
        {
          m.sender ? 
          <Sender>
            <Message text={m.message} outgoing={m.sender} />
          </Sender> :
          <Recieve>
            <Message text={m.message} outgoing={m.sender} />
          </Recieve>
        }
        </Container>
      )
    })}
  </div>
);

const Container = styled.div `
    display: flex;
    flex-direction: column;
`

const Sender = styled.div `
    margin: 10px;
    flex: 0 0 100%;
`

const Recieve = styled.div `
    margin: 10px;
    margin-left: auto;
    flex: 0 0 100%;
` 
