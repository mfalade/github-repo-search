import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import { getSearchValue } from './helpers';

function RepositoriesList({ repositories, visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <Image src="https://via.placeholder.com/50" roundedCircle />
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
  repositories: PropTypes.array,
};

RepositoriesList.defaultProps = {
  visible: true,
  repositories: [],
};

export default RepositoriesList;
