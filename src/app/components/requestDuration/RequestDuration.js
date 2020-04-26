import React from 'react';
import PropTypes from 'prop-types';

import { getDuration } from './helpers';

function RequestDuration({ requestStart, requestEnd }) {
  const duration = getDuration(requestStart, requestEnd);
  return <p>The search was completed in {duration}.</p>;
}

RequestDuration.propTypes = {
  requestStart: PropTypes.number,
  requestEnd: PropTypes.number,
};

RequestDuration.defaultProps = {
  requestStart: 0,
  requestEnd: 0,
};

export default RequestDuration;
