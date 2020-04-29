import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Error from 'app/components/error';
import Loading from 'app/components/loading';
import ReadmeRenderer from 'app/components/readme';
import { fetchReadme, readmeSelector } from 'app/store/repository';

function Readme({ repoUrl }) {
  const dispatch = useDispatch();
  const readme = useSelector(readmeSelector);
  const { data, isFetching, error } = readme;

  useEffect(() => {
    if (repoUrl) {
      dispatch(fetchReadme(repoUrl));
    }
  }, [dispatch, repoUrl]);

  if (!repoUrl) {
    return null;
  }

  return (
    <section data-cy="readme-container">
      {error && <Error message={error} />}
      {isFetching && <Loading visible message="Fetching readme ..." />}
      {data && <ReadmeRenderer source={data} />}
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
