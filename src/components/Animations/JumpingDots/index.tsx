import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CssStyleable } from '../../../utils/StyledComponents';

type Props = CssStyleable;

// Animations
const jumping = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
    
  `;

// Element
const Dot = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 15px;
  background-color: #4b9cdb;

  &:nth-last-child(1) {
    margin-left: 4px;
    margin-right: 2px;
    animation: ${jumping} 0.6s 0.1s linear infinite;
  }
  &:nth-last-child(2) {
    margin-left: 2px;
    margin-right: 2px;
    animation: ${jumping} 0.6s 0.2s linear infinite;
  }
  &:nth-last-child(3) {
    margin-left: 2px;
    margin-right: 4px;
    animation: ${jumping} 0.6s 0.3s linear infinite;
  }
`;

const DotContainer = styled.div<CssStyleable>`
  ${(props) => props.cssStyles}
`;

export const JumpingDots: React.FC<Props> = (props) => (
  <DotContainer {...props}>
    <Dot />
    <Dot />
    <Dot />
  </DotContainer>
);
