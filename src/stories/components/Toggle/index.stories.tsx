import React from 'react';
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
      />
      {isOn ? 'on' : 'off'}
    </div>
  );
};
