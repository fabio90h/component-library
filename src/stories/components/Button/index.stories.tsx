import React, { RefObject } from 'react';
import { css } from 'styled-components';
import Button from '../../../components/Button';

export default {
  title: 'Component/Button/Primary',
  component: Button,
};

// Normal Button
export const Base = () => <Button loading>Click Me!</Button>;

// Button Load
export const Loading = () => {
  const [loading, setLoading] = React.useState(false);

  const handleOnClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button onClick={handleOnClick} loading={loading}>
      Test loading
    </Button>
  );
};

// Button with ref test
export const Ref = () => {
  const ref = React.createRef() as RefObject<HTMLButtonElement>;

  return (
    <>
      <Button onClick={() => ref.current?.focus()}>
        Click here to focus the other button
      </Button>
      <br />
      <br />
      <Button
        ref={ref}
        cssStyles={css`
          &:focus {
            background-color: grey;
          }
        `}
      >
        Will be focused here
      </Button>
    </>
  );
};
