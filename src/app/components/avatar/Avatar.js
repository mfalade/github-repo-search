import React from 'react';
import PropTypes from 'prop-types';

import { UserImage } from './styles';

function Avatar({ avatarUrl, alt }) {
  return <UserImage src={avatarUrl} alt={alt} />;
}

Avatar.propTypes = {
  alt: PropTypes.string,
  avatarUrl: PropTypes.string,
};
Avatar.defaultProps = {
  alt: '',
  avatarUrl: '',
};

export default Avatar;
