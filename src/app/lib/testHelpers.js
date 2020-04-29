import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from 'app/theme';

export const withThemeProvider = (component) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const withBrowserRouter = (component) => (
  <BrowserRouter>{component}</BrowserRouter>
);
