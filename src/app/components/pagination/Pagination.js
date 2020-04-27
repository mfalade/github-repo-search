import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { LIST_ITEMS_PER_PAGE } from 'app/config';

import { PaginationContainer } from './styles';

function Pagination({ visible, totalItemsCount, currentPage, onPageSelect }) {
  if (!visible) {
    return null;
  }

  const pageCount = Math.ceil(totalItemsCount / LIST_ITEMS_PER_PAGE);
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={onPageSelect}
        forcePage={currentPage - 1}
      />
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  visible: PropTypes.bool,
  currentPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  onPageSelect: PropTypes.func,
};

Pagination.defaultProps = {
  visible: false,
  currentPage: 0,
  totalItemsCount: 0,
  onPageSelect: () => {},
};

export default Pagination;
