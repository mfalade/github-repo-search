import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from './styles';

function Error({ visible, message }) {
  if (!visible || !message) {
    return null;
  }

  return <ErrorMessage data-cy="error-message">{message}</ErrorMessage>;
}

Error.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
};

Error.defaultProps = {
  message: null,
  visible: false,
};

export default Error;
