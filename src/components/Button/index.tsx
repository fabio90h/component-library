import React from 'react';
import styled, { css } from 'styled-components';

import { mediaQueryCss } from '../../utils/MediaQuery';
import { CssStyleable } from '../../utils/StyledComponents';
import { JumpingDots } from '../Animations/JumpingDots';

type Props = React.ComponentPropsWithoutRef<'button'> &
  CssStyleable & {
    loading?: boolean;
  };

const BaseButton = styled.button<CssStyleable>`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s,
    -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }
  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }

  /* Just to test that the media query is working properly */
  ${mediaQueryCss(
    'isMobile',
    css`
      background-color: red;
    `,
  )}

  ${(props) => props.cssStyles}
`;

const TextDisplay = styled.span<{ isVisible: boolean }>`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const { loading = false, children, ...rest } = props;
    return (
      <BaseButton ref={ref} {...rest}>
        {loading && (
          <JumpingDots
            cssStyles={css`
              position: absolute;
              left: calc(
                50% - 20px
              ); //20px is half of the size of the combined dots
              bottom: calc(50% - 4px);
            `}
          />
        )}
        <TextDisplay isVisible={!loading}>{children}</TextDisplay>
      </BaseButton>
    );
  },
);

export default Button;
