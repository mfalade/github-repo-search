import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import Avatar from 'app/components/avatar';
import Button from 'app/components/button';
import LoginButton from 'app/components/loginButton';
import { authSelector, logoutUser } from 'app/store/auth';

import { Header, Text, RightCol } from './styles';

function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const avatarUrl = get(auth, 'user.data.avatar_url');
  const username = get(auth, 'user.data.name');
  const isAuthenticated = Boolean(get(auth, 'user.data.login'));

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Header>
      <Link to="/">Repo Search</Link>
      {isAuthenticated && (
        <RightCol>
          <Text>Logged in as {username}</Text>
          <Avatar avatarUrl={avatarUrl} alt={username} />
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
