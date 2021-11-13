import React from 'react';
import styled from 'styled-components';

/**
 * Outter box of the toggle
 * Note: Label was picked here because we want
 * the checkbox to be selected even when we click outside of it
 */
const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 5rem;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #ccc;
  transition: 0.4s;

  &:before {
    position: absolute;
    border-radius: 5rem;
    content: '';
    width: 30px;
    height: 30px;
    bottom: 1px;
    top: 1px;
    left: 1px;
    background-color: white;
    transition: 0.4s;
  }
`;

const Switch = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span:before {
    transform: translateX(28px);
    background-color: white;
  }

  &:checked + ${Slider} {
    background-color: #6ff363;
    transition: 0.4s;
  }
`;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  checked: boolean;
};

const Toggle: React.FC<Props> = (props) => {
  const { checked } = props;
  return (
    <ToggleContainer>
      <Switch checked={checked} />
      <Slider />
    </ToggleContainer>
  );
};

export default Toggle;
