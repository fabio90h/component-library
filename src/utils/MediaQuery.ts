import { css } from 'styled-components';
import { CssInterpolation } from './StyledComponents';

/**
 *
 */
const ScreenSizeBreakpoint = {
  mobile: 414, // based on the largest iPhone
  tablet: 1024, // based on the largest iPad
  laptop: 1920, // based on the largest laptop screen
};

type ScreenSizeType =
  | 'isMobile'
  | 'isTablet'
  | 'isLaptop'
  | 'isDesktop'
  | 'lteTablet'
  | 'lteLaptop'
  | 'gteTablet'
  | 'gteLaptop';

const MediaQuery: Record<ScreenSizeType, CssInterpolation> = {
  isMobile: `(max-width: ${ScreenSizeBreakpoint.mobile}px)`,
  isTablet: `(min-width: ${
    ScreenSizeBreakpoint.mobile + 1
  }px) and (max-width: ${ScreenSizeBreakpoint.tablet}px)`,
  isLaptop: `(min-width: ${
    ScreenSizeBreakpoint.tablet + 1
  }px) and (max-width: ${ScreenSizeBreakpoint.laptop}px)`,
  isDesktop: `(min-width: ${ScreenSizeBreakpoint.laptop + 1}px`,

  lteTablet: `(max-width: ${ScreenSizeBreakpoint.tablet}px)`,
  lteLaptop: `(max-width: ${ScreenSizeBreakpoint.laptop}px)`,

  gteTablet: `(min-width: ${ScreenSizeBreakpoint.mobile + 1}px)`,
  gteLaptop: `(min-width: ${ScreenSizeBreakpoint.tablet + 1}px)`,
};

export const mediaQueryCss = (
  breakpoint: ScreenSizeType,
  style: CssInterpolation,
) => css`
  @media ${MediaQuery[breakpoint]} {
    ${style}
  }
`;
