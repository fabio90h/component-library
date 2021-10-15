import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CssStyleable } from '../../../utils/StyledComponents';

type Props = CssStyleable;

// Animations
const rising = keyframes`
    0% {
      height: 15px
    }
    50% {
      height: 35px
    }
    100% {
      height: 15px
    }
    
  `;

// Element
const Bar = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;

  &:nth-last-child(1) {
    margin-left: 4px;
    margin-right: 2px;
    animation: ${rising} 1.5s 1s infinite;
  }
  &:nth-last-child(2) {
    margin-left: 2px;
    margin-right: 2px;
    animation: ${rising} 1.5s 0.5s infinite;
  }
  &:nth-last-child(3) {
    margin-left: 2px;
    margin-right: 4px;
    animation: ${rising} 1.5s 0s infinite;
  }
`;

const BarContainer = styled.div<CssStyleable>`
  ${(props) => props.cssStyles}
`;

export const RasingBar: React.FC<Props> = (props) => (
  <BarContainer {...props}>
    <Bar />
    <Bar />
    <Bar />
  </BarContainer>
);
