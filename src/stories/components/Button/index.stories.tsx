import React, { RefObject } from 'react';
import { css } from 'styled-components';
import Button from '../../../components/Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Primary = () => <Button>Hello World</Button>;

export const PrimaryWithRef = () => {
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
