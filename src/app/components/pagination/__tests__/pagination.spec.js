import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import Pagination from '..';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<Pagination />), div);
  });

  it('renders nothing when visible prop is set to false', () => {
    const pageSelectHandler = jest.fn();
    const wrapper = shallow(<Pagination onPageSelect={pageSelectHandler} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('calls provided handler on page change', () => {
    const pageSelectHandler = jest.fn();
    const wrapper = mount(
      withThemeProvider(
        <Pagination
          visible
          currentPage={1}
          totalItemsCount={200}
          onPageSelect={pageSelectHandler}
        />,
      ),
    );
    const nextButton = wrapper.find('li.next a');
    nextButton.simulate('click');
    expect(pageSelectHandler).toHaveBeenCalledWith({ selected: 1 });
  });
});
