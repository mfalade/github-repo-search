import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import {
  fetchRepositories,
  repositoriesSelector,
} from 'app/store/repositories';
import { SEARCH_DEBOUNCE_INTERVAL } from 'config';

function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(repositoriesSelector);
  const [userQuery, setUserQuery] = useState('');
  const { items: repositoriesList, isFetching } = repositories;

  const fetchRepositoriesByName = (givenName) => {
    const repositoryName = givenName.trim();
    if (repositoryName) {
      dispatch(fetchRepositories(repositoryName));
    }
  };
  const initiateFetchRepositories = useCallback(
    debounce(fetchRepositoriesByName, SEARCH_DEBOUNCE_INTERVAL),
    [],
  );
  const handleSearchInputChange = ({ target }) => {
    setUserQuery(target.value);
    initiateFetchRepositories(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    initiateFetchRepositories(userQuery);
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

      <div>
        <div>{isFetching && <>Fetching .. </>}</div>
        <ul>
          {repositoriesList.map((repository) => (
            <li key={repository.id}>{repository.full_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
