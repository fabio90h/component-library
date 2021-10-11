import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../src/utils/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DarkTheme}>{Story()}</ThemeProvider>
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
};
