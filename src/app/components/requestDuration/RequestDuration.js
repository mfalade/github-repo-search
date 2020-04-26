import React from 'react';
import PropTypes from 'prop-types';

import { getDuration } from './helpers';

function RequestDuration({ visible, requestStart, requestEnd }) {
  const duration = getDuration(requestStart, requestEnd);
  return visible && <p>The search was completed in {duration}.</p>;
}

RequestDuration.propTypes = {
  visible: PropTypes.bool,
  requestStart: PropTypes.number,
  requestEnd: PropTypes.number,
};

RequestDuration.defaultProps = {
  visible: false,
  requestStart: 0,
  requestEnd: 0,
};

export default RequestDuration;
