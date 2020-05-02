import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import Error from 'app/components/error';
import Loading from 'app/components/loading';
import Pagination from 'app/components/pagination';
import SearchForm from 'app/components/searchForm';
import SearchSummary from 'app/components/searchSummary';
import RequestDuration from 'app/components/requestDuration';
import RepositoriesList from 'app/components/repositoriesList';
import {
  setUserQuery,
  fetchRepositories,
  repositoriesSelector,
} from 'app/store/repositories';
import { SEARCH_DEBOUNCE_INTERVAL, LIST_ITEMS_PER_PAGE } from 'app/config';

import { SearchFormHeader } from './styles';

function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(repositoriesSelector);

  const {
    currentPage,
    error,
    isFetching,
    isFetchComplete,
    totalItemsCount,
    requestStart,
    requestEnd,
    userQuery,
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
  const handleValueChange = ({ target }) => {
    dispatch(setUserQuery(target.value));
    debounceGetRepositories(target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    getRepositories(userQuery, currentPage);
  };
  const handlePageSelect = async (page) => {
    const { selected: selectedPage } = page;
    getRepositories(userQuery, selectedPage + 1);
  };

  return (
    <>
      <section>
        <SearchFormHeader>
          <h2>Search for Github repositories</h2>
          <RequestDuration
            visible={isFetchComplete}
            requestStart={requestStart}
            requestEnd={requestEnd}
          />
        </SearchFormHeader>
        <SearchForm
          value={userQuery}
          onValueChange={handleValueChange}
          onFormSubmit={handleFormSubmit}
        />
      </section>
      <SearchSummary
        visible={isFetchComplete}
        userQuery={userQuery}
        repositories={repositories}
      />
      <Error visible={Boolean(error)} message={error} />
      <Loading visible={isFetching} />
      <RepositoriesList
        visible={isFetchComplete && !error}
        repositories={repositories.items}
      />
      <Pagination
        visible={totalItemsCount > LIST_ITEMS_PER_PAGE}
        currentPage={currentPage}
        totalItemsCount={totalItemsCount}
        onPageSelect={handlePageSelect}
      />
    </>
  );
}

export default Home;
