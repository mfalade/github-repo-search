import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import {
  fetchRepositories,
  repositoriesSelector,
} from 'app/store/repositories';
import Pagination from 'app/components/pagination';
import RepositoriesList from 'app/components/repositoriesList';
import { SEARCH_DEBOUNCE_INTERVAL } from 'app/config';

function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(repositoriesSelector);
  const [userQuery, setUserQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRepositoriesByName = (givenName, page) => {
    const repositoryName = givenName.trim();
    if (repositoryName) {
      dispatch(fetchRepositories(repositoryName, page));
    }
  };
  const debouncedFetchRepositories = useCallback(
    debounce(fetchRepositoriesByName, SEARCH_DEBOUNCE_INTERVAL),
    [],
  );
  const handleSearchInputChange = ({ target }) => {
    setUserQuery(target.value);
    setCurrentPage(1);
    debouncedFetchRepositories(target.value, 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    debouncedFetchRepositories(userQuery, 1);
  };
  const handlePageSelect = (page) => {
    const { selected } = page;
    setCurrentPage(selected);
    fetchRepositoriesByName(userQuery, selected + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <RepositoriesList
        userQuery={userQuery}
        repositories={repositories}
        currentPage={currentPage}
      />
      <Pagination
        totalNumPages={repositories.totalNumPages}
        onPageSelect={handlePageSelect}
      />
    </div>
  );
}

export default Home;
