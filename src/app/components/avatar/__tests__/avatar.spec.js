import React from 'react';
import ReactDOM from 'react-dom';

import { withThemeProvider } from 'app/lib/testHelpers';
import Avatar from '..';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<Avatar />), div);
  });
});
