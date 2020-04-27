import React from 'react';
import PropTypes from 'prop-types';

import { UserImage } from './styles';

function Avatar({ avatarUrl }) {
  return <UserImage src={avatarUrl} />;
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
};
Avatar.defaultProps = {
  avatarUrl: '',
};

export default Avatar;
