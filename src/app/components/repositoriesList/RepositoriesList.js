import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import RepositoryCard from 'app/components/repositoryCard';

import { RepositoriesListContainer } from './styles';

function RepositoriesList({ repositories, visible }) {
  if (!visible) {
    return null;
  }

  return (
    <RepositoriesListContainer>
      <Masonry
        breakpointCols={5}
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
