import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import RepositoryCard from 'app/components/repositoryCard';

import { RepositoriesListContainer } from './styles';

function RepositoriesList({ repositories, visible }) {
  if (!visible) {
    return null;
  }
  const breakPoints = {
    default: 5,
    1100: 4,
    700: 3,
    500: 1,
  };

  return (
    <RepositoriesListContainer data-cy="search-results">
      <Masonry
        breakpointCols={breakPoints}
        className="masonry-grid"
        columnClassName="masonry-grid__column"
      >
        {repositories.map((repository) => (
          <RepositoryCard repository={repository} key={repository.id} />
        ))}
      </Masonry>
    </RepositoriesListContainer>
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
