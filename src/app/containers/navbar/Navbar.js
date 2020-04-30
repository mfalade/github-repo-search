import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import Button from 'app/components/button';
import LoginButton from 'app/components/loginButton';
import { authSelector } from 'app/store/auth';

import { Header, Text, RightCol } from './styles';

function Navbar() {
  const auth = useSelector(authSelector);
  const username = get(auth, 'user.data.name');
  const isAuthenticated = Boolean(get(auth, 'user.data.login'));

  const handleLogout = () => {};

  return (
    <Header>
      <Link to="/">Repo Search</Link>
      {isAuthenticated && (
        <RightCol>
          <Text>Logged in as {username}</Text>
          <Button type="button" onClick={handleLogout}>
            Logout
          </Button>
        </RightCol>
      )}
      {!isAuthenticated && <LoginButton />}
    </Header>
  );
}

export default Navbar;
