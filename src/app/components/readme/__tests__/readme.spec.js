import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import Readme from '..';

describe('Readme', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<Readme />), div);
  });

  it('renders nothing when source prop is empty', () => {
    const wrapper = shallow(<Readme source={''} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders content when source prop is provided', () => {
    const testContent = 'Testing readme';
    const wrapper = mount(withThemeProvider(<Readme source={testContent} />));
    expect(wrapper.text()).toContain(testContent);
  });
});
