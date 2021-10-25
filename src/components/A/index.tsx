// import React from 'react';
import styled from 'styled-components';
import { CssStyleable } from '../../utils/StyledComponents';

const A = styled.a<CssStyleable>`
  font-size: ${(props) => props.theme.a.fontSize};
  font-weight: ${(props) => props.theme.a.fontWeight};
  color: ${(props) => props.theme.a.color};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.a.hoverColor};
  }
`;

export default A;
