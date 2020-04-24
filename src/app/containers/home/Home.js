import React, { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';

import { fetchRepositories } from 'api/github';
import { SEARCH_DEBOUNCE_INTERVAL } from 'config';

function Home() {
  const [userQuery, setUserQuery] = useState('');
  const fetchMatchingRepositories = useCallback(
    debounce(fetchRepositories, SEARCH_DEBOUNCE_INTERVAL, { trailing: true }),
    [],
  );
  const handleSearchInputChange = ({ target }) => {
    setUserQuery(target.value);
    fetchMatchingRepositories(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMatchingRepositories(userQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userQuery} onChange={handleSearchInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Home;
