import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

function Pagination({ totalNumPages, onPageSelect }) {
  if (!totalNumPages) {
    return null;
  }

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={totalNumPages}
      onPageChange={onPageSelect}
    />
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalNumPages: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 0,
  totalNumPages: 0,
};

export default Pagination;
