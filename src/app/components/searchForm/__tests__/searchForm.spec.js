import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { withThemeProvider } from 'app/lib/testHelpers';

import SearchForm from '..';

describe('SearchForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<SearchForm />), div);
  });

  it('executes change handler on value change', () => {
    const mockChangeHandler = jest.fn();
    const wrapper = mount(
      withThemeProvider(<SearchForm onValueChange={mockChangeHandler} />),
    );
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'Test value' } });
    expect(mockChangeHandler).toHaveBeenCalled();
  });

  it('executes submit handler on submit', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = mount(
      withThemeProvider(<SearchForm onFormSubmit={mockSubmitHandler} />),
    );
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'Test value' } });
    wrapper.simulate('submit');
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});
