import React from 'react';
import PropTypes from 'prop-types';

function Error({ visible, message }) {
  if (!visible || !message) {
    return null;
  }

  return <p>Error: {message}</p>;
}

Error.propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool,
};

Error.defaultProps = {
  errorMessage: null,
  visible: false,
};

export default Error;
