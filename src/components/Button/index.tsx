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
  background-color: ${(props) =>
    props.theme.button.backgroundColor};
  border: ${(props) => props.theme.button.border};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${(props) => props.theme.button.color};
  cursor: pointer;
  display: inline-block;
  font-family: ${(props) => props.theme.button.fontFamily};
  font-size: ${(props) => props.theme.button.fontSize};
  font-weight: ${(props) => props.theme.button.fontWeight};
  line-height: ${(props) => props.theme.button.fontLineHeight};
  margin: 0;
  outline: none;
  padding: 14px 24px;
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
    background-color: ${(props) => props.theme.button.activeBackgroundColor};
    border-color: ${(props) => props.theme.button.activeBorderColor};
    transform: scale(0.96);
  }
  &:disabled {
    border-color: ${(props) => props.theme.button.disableBorderColor};
    color: ${(props) => props.theme.button.disabledFontColor};
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
      // disable button when its loading
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
