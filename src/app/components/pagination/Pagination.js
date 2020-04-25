import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

function Pagination({ totalNumPages, onPageSelect }) {
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
  currentPage: PropTypes.number.isRequired,
  totalNumPages: PropTypes.number.isRequired,
};

export default Pagination;
