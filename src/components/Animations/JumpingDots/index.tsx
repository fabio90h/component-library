import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Dot = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
  margin: 4px;

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

const DotContainer = styled.div``;

export const JumpingDots = () => (
  <DotContainer>
    <Dot />
    <Dot />
    <Dot />
  </DotContainer>
);
