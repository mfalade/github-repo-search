import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LIST_ITEMS_PER_PAGE } from 'app/config';

import { getSearchValue } from './helpers';

function RepositoriesList({ repositories, visible, currentPage, userQuery }) {
  if (!visible) {
    return null;
  }

  const { items: repositoriesList, totalItemsCount } = repositories;
  const showSummrayText = userQuery && Boolean(totalItemsCount);
  return (
    <div>
      {showSummrayText && (
        <h4>{`Showing ${
          currentPage * LIST_ITEMS_PER_PAGE
        } of ${totalItemsCount} items for ${userQuery}`}</h4>
      )}
      <ul>
        {repositoriesList.map((repository) => (
          <li key={repository.id}>
            <Link
              to={{ pathname: '/repo', search: getSearchValue(repository) }}
            >
              {repository.full_name}
            </Link>
            <p>{repository.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

RepositoriesList.propTypes = {
  visible: PropTypes.bool,
  repositories: PropTypes.shape({
    items: PropTypes.array,
    totalNumPages: PropTypes.number,
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  userQuery: PropTypes.string.isRequired,
};

RepositoriesList.defaultProps = {
  visible: true,
};

export default RepositoriesList;
