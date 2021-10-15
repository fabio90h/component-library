import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../src/utils/Theme';
import { radios } from '@storybook/addon-knobs';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={radios('Theme', {light: 'light', dark: 'dark'}, 'light') === 'light' ? 
      LightTheme : DarkTheme}>{Story()}</ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
};
