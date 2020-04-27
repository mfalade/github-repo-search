import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { PaginationContainer } from './styles';

function Pagination({ visible, totalNumPages, onPageSelect }) {
  if (!visible) {
    return null;
  }

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={totalNumPages}
        onPageChange={onPageSelect}
      />
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  visible: PropTypes.bool,
  currentPage: PropTypes.number,
  totalNumPages: PropTypes.number,
};

Pagination.defaultProps = {
  visible: false,
  currentPage: 0,
  totalNumPages: 0,
};

export default Pagination;
