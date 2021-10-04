import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '../src/utils/Theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={BaseTheme}>{Story()}</ThemeProvider>
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
