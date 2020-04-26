import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import Error from 'app/components/error';
import Loading from 'app/components/loading';
import Pagination from 'app/components/pagination';
import RequestDuration from 'app/components/requestDuration';
import RepositoriesList from 'app/components/repositoriesList';
import SearchSummary from 'app/components/searchSummary';
import {
  fetchRepositories,
  repositoriesSelector,
} from 'app/store/repositories';
import { SEARCH_DEBOUNCE_INTERVAL } from 'app/config';

function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(repositoriesSelector);
  const [userQuery, setUserQuery] = useState('');

  const {
    currentPage,
    error,
    isFetching,
    totalNumPages,
    requestStart,
    requestEnd,
  } = repositories;
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
    getRepositories(userQuery);
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

      <SearchSummary userQuery={userQuery} repositories={repositories} />
      <Error visible={Boolean(error)} message={error} />
      <Loading visible={isFetching} />
      <RequestDuration
        visible={Boolean(userQuery)}
        requestStart={requestStart}
        requestEnd={requestEnd}
      />
      <RepositoriesList
        visible={!isFetching}
        repositories={repositories.items}
      />
      <Pagination
        currentPage={currentPage}
        totalNumPages={totalNumPages}
        onPageSelect={handlePageSelect}
      />
    </div>
  );
}

export default Home;
