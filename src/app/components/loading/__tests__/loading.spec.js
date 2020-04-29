import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import Loading from '..';

describe('Loading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<Loading />), div);
  });

  it('renders nothing when visible prop is set to false', () => {
    const wrapper = shallow(
      <Loading visible={false} message={'Some message'} />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders loading indicator when visible prop is set to true', () => {
    const wrapper = shallow(<Loading visible />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
