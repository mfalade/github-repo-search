import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { withThemeProvider, withBrowserRouter } from 'app/lib/testHelpers';

import RepositoryCard from '..';
import { Description } from '../styles';
import { mockRepository, mockRepositoryWithLongDesc } from '../__fixtures__';

describe('RepositoryCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      withBrowserRouter(
        withThemeProvider(<RepositoryCard repository={mockRepository} />),
      ),
      div,
    );
  });

  it('renders a link to visit given repository', () => {
    const wrapper = mount(
      withBrowserRouter(
        withThemeProvider(<RepositoryCard repository={mockRepository} />),
      ),
    );
    expect(wrapper.find('a').prop('href')).toBe('/repo?name=user/repo');
  });

  it('truncates long descriptions at 200 characters', () => {
    const wrapper = mount(
      withBrowserRouter(
        withThemeProvider(
          <RepositoryCard repository={mockRepositoryWithLongDesc} />,
        ),
      ),
    );
    expect(wrapper.find(Description).text().length).toBe(200);
  });
});
