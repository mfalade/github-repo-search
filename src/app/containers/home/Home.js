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

  const { currentPage, error, totalNumPages } = repositories;
  const getRepositories = (repositoryName, page) => {
    const normalizedName = repositoryName.trim();
    if (normalizedName) {
      dispatch(fetchRepositories(normalizedName, page));
    }
  };
  const debounceGetRepositories = useCallback(
    debounce(getRepositories, SEARCH_DEBOUNCE_INTERVAL),
    [],
  );
  const handleSearchInputChange = ({ target }) => {
    setUserQuery(target.value);
    debounceGetRepositories(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    debounceGetRepositories(userQuery);
  };
  const handlePageSelect = async (page) => {
    const { selected: selectedPage } = page;
    getRepositories(userQuery, selectedPage + 1);
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

      <p>{error}</p>

      <RepositoriesList
        userQuery={userQuery}
        repositories={repositories}
        currentPage={currentPage}
      />
      <Pagination
        totalNumPages={totalNumPages}
        onPageSelect={handlePageSelect}
      />
    </div>
  );
}

export default Home;
