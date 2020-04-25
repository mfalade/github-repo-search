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
  totalNumPages: PropTypes.number,
  onPageSelect: PropTypes.func,
};

Pagination.defaultProps = {
  totalNumPages: 0,
  onPageSelect: () => {},
};

export default Pagination;
