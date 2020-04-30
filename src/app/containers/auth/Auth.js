import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, Redirect } from 'react-router-dom';
import get from 'lodash/get';
import lowerCase from 'lodash/lowerCase';

import Error from 'app/components/error';
import { useQueryParams } from 'app/hooks';
import { fetchUser, authSelector } from 'app/store/auth';

import { AUTH_STATE } from './constants';

function Auth() {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const params = useParams();
  const { queryParams } = useQueryParams();
  const accessToken = queryParams.access_token;
  const loginSuccess = lowerCase(params.state) === AUTH_STATE.SUCCESS;
  const isAuthenticated = Boolean(get(auth, 'user.data.login'));

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUser(accessToken));
    }
  }, [dispatch, accessToken]);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (loginSuccess) {
    return (
      <div>
        <p>Authentication successful</p>
        <p>Redirecting ...</p>
      </div>
    );
  }

  return (
    <>
      <Error visible message="Authentication failed!" />
      <p>
        Return to the <Link to="/">home page</Link> or try again.
      </p>
    </>
  );
}

export default Auth;
