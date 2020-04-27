import React from 'react';
import PropTypes from 'prop-types';

import { LoadingContainer } from './styles';

function Loading({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <LoadingContainer>
      <h2>Fetching ...</h2>
    </LoadingContainer>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  visible: false,
};

export default Loading;
