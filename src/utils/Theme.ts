export type BaseTheme = typeof DarkTheme

const AirBnbRawTheme = {
  // Color
  colorLevel1: '#FAFAFA', // white
  colorLevel2: '#F5F5F5',
  colorLevel3: '#EEEEE',
  colorLevel4: '#E0E0E0',
  colorLevel5: '#BDBDBD',
  colorLevel6: '#9E9E9E',
  colorLevel7: '#757575',
  colorLevel8: '#616161',
  colorLevel9: '#424242',
  colorLevel10: '#212121', // black
  brandColor: "#FF385C",
  uiBrandColor: "#222222",

  // Font
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
}

const Base = {
  // Button
  button: {
    border: '1px solid #222222',
    radius: '8px',
    fontFamily: AirBnbRawTheme.fontFamily,
    backgroundColor: '#ffffff',
    color: AirBnbRawTheme.colorLevel10,
  }
}

export const LightTheme = {
  ...Base,
  button: {
    ...Base.button
  },
  // Button
   // Dropdown Menu
   dropdownMenu: {
    backgroundColor: AirBnbRawTheme.colorLevel1
    
  }
}

export const DarkTheme = {
  ...Base,
  // 
  // Button
  button: {
    ...Base.button,
    backgroundColor: AirBnbRawTheme.brandColor,
    color: AirBnbRawTheme.colorLevel1
    
  },
  // Dropdown Menu
  dropdownMenu: {
    backgroundColor: AirBnbRawTheme.colorLevel7,
    color: AirBnbRawTheme.colorLevel1,
  }
}

