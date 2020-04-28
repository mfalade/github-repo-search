import React from 'react';
import PropTypes from 'prop-types';

import { Text, Highlight } from './styles';

function SearchSummary({ visible, userQuery, repositories }) {
  if (!visible) {
    return null;
  }

  const { totalItemsCount } = repositories;
  const subject = totalItemsCount === 1 ? 'result' : 'results';
  const formattedItemsCount = new Intl.NumberFormat().format(totalItemsCount);

  return (
    Boolean(userQuery) && (
      <Text data-cy="search-summary">
        Found <Highlight>{formattedItemsCount}</Highlight> {` ${subject} for `}
        <Highlight>{userQuery}</Highlight>
      </Text>
    )
  );
}

SearchSummary.propTypes = {
  visible: PropTypes.bool,
  userQuery: PropTypes.string,
  repositories: PropTypes.shape({
    totalItemsCount: PropTypes.number,
  }),
};

SearchSummary.defaultProps = {
  visible: false,
  userQuery: 'false',
  repositories: {
    totalItemsCount: 0,
  },
};

export default SearchSummary;
