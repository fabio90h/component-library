export type BaseTheme = typeof Base;

const AirBnbRawTheme = {
  /**
   * COLOR
   */
  colorLevel1: '#FFFFFF', // white
  colorLevel2: '#F7F7F7',
  colorLevel3: '#EBEBEB',
  colorLevel4: '#DDDDDD',
  colorLevel5: '#B0B0B0',
  colorLevel6: '#767676',
  colorLevel7: '#717171',
  colorLevel8: '#484848',
  colorLevel9: '#222222',
  colorLevel10: '0000000', // black

  // Used website https://usbrandcolors.com/airbnb-colors/
  // Shades: https://mdigi.tools/color-shades/#00a699
  brandColor1: '#ff9fb1',
  brandColor2: '#ff607c',
  brandColor3: '#FF385C',

  secondColor1: '#00dccb',
  secondColor2: '#00c5b6',
  secondColor3: '#00A699',

  thirdColor1: '#fd8054',
  thirdColor2: '#fc703d',
  thirdColor3: '#FC642D',

  /**
   * BORDER
   */

  // Radius
  borderRadiusTiny: '4px',
  borderRadiusSmall: '8px',
  borderRadiusBase: '12px',
  borderRadiusLarge: '16px',

  /**
   * FONT
   */
  fontFamily:
    'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',

  // Size
  fontSizeTiny: '6px',
  fontSizeSmall: '12px',
  fontSizeBase: '16px',
  fontSizeLarge: '26px',
  fontSizeXLarge: '32px',

  // Weight
  fontWeightBase: '400',
  fontWeightHeavy: '600',
  fontWeightXHeavy: '800',

  // Line Height
  fontLineHeightBase: '20px',
  fontLineHeightLarge: '30px',
  fontLineHeightXLarge: '36px',

  /**
   * SPACING
   */
  spaceTiny: '8px',
  spaceSmall: '16px',
  spaceBase: '24px',
  spaceLarge: '48px',
  spaceXlarge: '64px',
};

const Base = {
  /**
   * GENERAL
   */
  fontFamily: AirBnbRawTheme.fontFamily,
  color: AirBnbRawTheme.colorLevel9,

  /**
   * H1
   */
  h1: {
    fontSize: AirBnbRawTheme.fontSizeXLarge,
    lineHeight: AirBnbRawTheme.fontLineHeightXLarge,
    fontWeight: AirBnbRawTheme.fontWeightXHeavy,
  },
  /**
   * H2
   */
  h2: {
    fontSize: AirBnbRawTheme.fontSizeLarge,
    lineHeight: AirBnbRawTheme.fontLineHeightLarge,
    fontWeight: AirBnbRawTheme.fontWeightHeavy,
  },
  /**
   * SUBHEADER
   */
  subheader: {
    fontSize: AirBnbRawTheme.fontSizeBase,
    lineHeight: AirBnbRawTheme.fontLineHeightBase,
    fontWeight: AirBnbRawTheme.fontWeightBase,
  },
  /**
   * Paragraph
   */
  p: {
    fontSize: AirBnbRawTheme.fontSizeBase,
    lineHeight: AirBnbRawTheme.fontLineHeightBase,
  },

  /**
   * BUTTON
   */
  button: {
    border: `1px solid ${AirBnbRawTheme.colorLevel9}`,
    radius: AirBnbRawTheme.borderRadiusSmall,

    // FONT
    fontFamily: AirBnbRawTheme.fontFamily,
    fontSize: AirBnbRawTheme.fontSizeBase,
    fontWeight: AirBnbRawTheme.fontWeightBase,
    fontLineHeight: AirBnbRawTheme.fontLineHeightBase,

    // ACTIVE
    activeBackgroundColor: AirBnbRawTheme.colorLevel2,
    activeColor: AirBnbRawTheme.colorLevel1,
    activeBorderColor: AirBnbRawTheme.colorLevel10,
    activeBorder: 'none',

    // DISABLE
    disableBorderColor: AirBnbRawTheme.colorLevel4,
    disabledFontColor: AirBnbRawTheme.colorLevel4,

    backgroundColor: AirBnbRawTheme.colorLevel1,
    color: AirBnbRawTheme.colorLevel10,
  },

  /**
   * DROPDOWN
   */
  dropdownMenu: {
    backgroundColor: AirBnbRawTheme.colorLevel1,
    color: AirBnbRawTheme.colorLevel9,
  },

  /**
   * DOT
   */
  dot: {
    backgroundColor: AirBnbRawTheme.colorLevel9,
  },
};

export const LightTheme: BaseTheme = {
  ...Base,
};

export const DarkTheme: BaseTheme = {
  ...Base,

  color: AirBnbRawTheme.colorLevel1,

  /**
   * BUTTON
   */
  button: {
    ...Base.button,
    backgroundColor: AirBnbRawTheme.brandColor3,
    color: AirBnbRawTheme.colorLevel1,
    border: 'none',
    activeBackgroundColor: AirBnbRawTheme.brandColor2,
    activeBorder: 'none',
  },
  /**
   * DROPDOWN
   */
  dropdownMenu: {
    ...Base.dropdownMenu,
    backgroundColor: AirBnbRawTheme.colorLevel7,
    color: AirBnbRawTheme.colorLevel1,
  },

  /**
   * DOT
   */
  dot: {
    ...Base.dot,
    backgroundColor: AirBnbRawTheme.colorLevel1,
  },
};
