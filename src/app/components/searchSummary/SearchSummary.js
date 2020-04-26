import React from 'react';

function SearchSummary({ userQuery, repositories }) {
  const { totalItemsCount } = repositories;
  const subject = totalItemsCount === 1 ? 'result' : 'results';
  return (
    userQuery && (
      <h4>{`Found ${totalItemsCount} ${subject} for ${userQuery}`}</h4>
    )
  );
}

export default SearchSummary;
