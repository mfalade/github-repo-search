import React from 'react';
import PropTypes from 'prop-types';

import { LIST_ITEMS_PER_PAGE } from 'app/config';

function RepositoriesList({ repositories, currentPage, userQuery }) {
  const { items: repositoriesList, isFetching, totalNumPages } = repositories;
  const renderLoader = () => <>Fetching .. </>;
  const renderRepositoriesList = () => (
    <div>
      <h4>{`Showing ${
        totalNumPages && currentPage * LIST_ITEMS_PER_PAGE
      } of ${totalNumPages} items for ${userQuery}`}</h4>
      <ul>
        {repositoriesList.map((repository) => (
          <li key={repository.id}>{repository.full_name}</li>
        ))}
      </ul>
    </div>
  );
  return <div>{isFetching ? renderLoader() : renderRepositoriesList()}</div>;
}

RepositoriesList.propTypes = {
  repositories: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    totalNumPages: PropTypes.number,
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  userQuery: PropTypes.string.isRequired,
};

export default RepositoriesList;
