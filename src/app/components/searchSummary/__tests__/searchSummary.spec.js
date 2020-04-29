import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import SearchSummary from '..';

describe('SearchSummary', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<SearchSummary />), div);
  });

  it('renders nothing when visible prop is set to false', () => {
    const wrapper = shallow(<SearchSummary visible={false} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders text when visible prop is set to true', () => {
    const wrapper = shallow(
      <SearchSummary
        visible
        userQuery="hello world"
        repositories={{ totalItemsCount: 5 }}
      />,
    );
    expect(wrapper.text()).toBe('Found 5 results for hello world');
  });
});
