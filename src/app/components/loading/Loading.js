import React from 'react';
import PropTypes from 'prop-types';

function Loading({ visible }) {
  if (!visible) {
    return null;
  }

  return <h5>Loading content ...</h5>;
}

Loading.propTypes = {
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  visible: false,
};

export default Loading;
