import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { Title, ReadmeContainer } from './styles';

function Readme({ source }) {
  if (!source) {
    return null;
  }

  return (
    <section data-cy="readme">
      <Title>Readme</Title>
      <ReadmeContainer>
        <ReactMarkdown source={source} />
      </ReadmeContainer>
    </section>
  );
}

Readme.propTypes = {
  source: PropTypes.string,
};

Readme.defaultProps = {
  source: '',
};

export default Readme;
