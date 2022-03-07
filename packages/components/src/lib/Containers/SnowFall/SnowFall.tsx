import React from 'react';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';

const SnowFall = ({ ...props }) => {
  return <StyledSnow {...props} />;
};

const StyledSnow = styled(Snowfall).attrs(({color, snowflakeCount, style}) => ({
  color: color || 'red',
  snowflakeCount: snowflakeCount || 200,
  style: style,
}))
``;

export default SnowFall;
