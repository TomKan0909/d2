import React from 'react';
import { SmallText } from '..';

export interface CopyrightProps  {
  appVersion: string,
  margin?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({
  appVersion,    
  margin = '20px 0 0', 
  ...props
}) => {
  return (
    <SmallText color="secondary" margin={margin} {...props} bold>
        Copyright CheaprEats Incorporated 2018 - {new Date().getFullYear()},
        Version {appVersion}
    </SmallText>
  );
}

export default Copyright;
