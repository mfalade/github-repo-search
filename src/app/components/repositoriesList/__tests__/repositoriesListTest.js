import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { withThemeProvider, withBrowserRouter } from 'app/lib/testHelpers';
import RepositoryCard from 'app/components/repositoryCard';

import { mockRepositories } from '../__fixtures__';
import RepositoriesList from '..';

describe('RepositoriesList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withThemeProvider(<RepositoriesList />), div);
  });

  it('renders nothing when visible prop is false', () => {
    const wrapper = shallow(
      <RepositoriesList visible={false} repositories={mockRepositories} />,
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders given repositories when visible prop is true', () => {
    const wrapper = mount(
      withBrowserRouter(
        withThemeProvider(<RepositoriesList repositories={mockRepositories} />),
      ),
    );
    expect(wrapper.find(RepositoryCard).length).toBe(mockRepositories.length);
  });
});
