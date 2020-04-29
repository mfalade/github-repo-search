import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import Error from '..';

describe('Error', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<Error />), div);
  });

  it('renders nothing when no message is passed', () => {
    const wrapper = shallow(<Error message={''} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders nothing when visible prop is set to false', () => {
    const wrapper = shallow(<Error visible={false} message={'Some message'} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders message when visible and there is an error', () => {
    const errorMessage = 'An error occurred.';
    const wrapper = shallow(<Error visible message={errorMessage} />);
    expect(wrapper.text()).toBe(errorMessage);
  });
});
