import React from 'react';
import ReactDOM from 'react-dom';

import { withThemeProvider } from 'app/lib/testHelpers';

import LoginButton from '..';

describe('LoginButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<LoginButton />), div);
  });
});
