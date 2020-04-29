import React from 'react';
import PropTypes from 'prop-types';

import { LoadingContainer } from './styles';

function Loading({ visible, message }) {
  if (!visible) {
    return null;
  }

  return (
    <LoadingContainer data-cy="loader">
      <h2>{message}</h2>
    </LoadingContainer>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
};

Loading.defaultProps = {
  visible: false,
  message: 'Fetching ...',
};

export default Loading;
