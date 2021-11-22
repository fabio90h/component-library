import React from 'react';
import styled from 'styled-components';

import { CssStyleable } from '../../utils/StyledComponents';

/**
 * Outter box of the toggle
 * Note: Label was picked here because we want
 * the checkbox to be selected even when we click outside of it
 */
const ToggleContainer = styled.label<CssStyleable>`
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

  background-color: ${(props) => props.theme.toggle.disableSlider};
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
    background-color: ${(props) => props.theme.toggle.switch};
    transition: 0.4s;
  }
`;

const Switch = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span:before {
    transform: translateX(28px);
  }

  &:checked + ${Slider} {
    background-color: ${(props) => props.theme.toggle.activeSlider};
    transition: 0.4s;
  }
`;

type Props = React.HTMLAttributes<HTMLDivElement> &
  CssStyleable & {
    checked: boolean;
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  };

const Toggle: React.FC<Props> = (props) => {
  const { checked, handleOnChange } = props;
  return (
    <ToggleContainer>
      <Switch checked={checked} onChange={handleOnChange} />
      <Slider />
    </ToggleContainer>
  );
};

export default Toggle;
