import React from 'react';
import { css } from 'styled-components';
import Toggle from '../../../components/Toggle';

export default {
  title: 'Component/Toggle/Primary',
  component: Toggle,
};

// Normal Button
export const Base = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div>
      <Toggle
        handleOnChange={() => {
          setIsOn(!isOn);
        }}
        checked={isOn}
        cssStyles={css`
          & > span {
            background-color: red;
          }
        `}
      />
      {isOn ? 'on' : 'off'}
    </div>
  );
};
