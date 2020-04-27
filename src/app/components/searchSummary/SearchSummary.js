import React from 'react';

import { Text, Highlight } from './styles';

function SearchSummary({ userQuery, repositories }) {
  const { totalItemsCount } = repositories;
  const subject = totalItemsCount === 1 ? 'result' : 'results';
  const formattedItemsCount = new Intl.NumberFormat().format(totalItemsCount);

  return (
    Boolean(userQuery) && (
      <Text>
        Found <Highlight>{formattedItemsCount}</Highlight> {` ${subject} for `}
        <Highlight>{userQuery}</Highlight>
      </Text>
    )
  );
}

export default SearchSummary;
