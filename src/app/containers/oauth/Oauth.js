import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Error from 'app/components/error';
import { useQueryParams } from 'app/hooks';
import { authenticateUser, authSelector } from 'app/store/auth';

function Oauth() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const { code: authenticationCode } = useQueryParams();

  const matchesSecretToken = true; // check for stored secret token

  useEffect(() => {
    if (authenticationCode && matchesSecretToken) {
      dispatch(authenticateUser(authenticationCode));
    }
  }, [authenticationCode, dispatch, matchesSecretToken]);

  console.log('auth, ', auth);

  if (auth.error) {
    return (
      <>
        <Error visible message={auth.error} />
        <p>
          Return to the <Link to="/">home page</Link> or try again{' '}
        </p>
      </>
    );
  }

  return <p>Please wait ....</p>;
}

export default Oauth;

// REACT_APP_DOMAIN=https://447f7b4f.ngrok.io
