import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import RequestDuration from '..';

describe('RequestDuration', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<RequestDuration visible />), div);
  });

  it('renders nothing when visible prop is set to false', () => {
    const wrapper = shallow(<RequestDuration visible={false} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders duration when visible prop is set to true', () => {
    const wrapper = shallow(<RequestDuration visible />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
