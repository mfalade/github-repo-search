import React from 'react';

import { LoginButtonComponent } from './styles';
import { getOauthLink } from './helpers';

function LoginButton() {
  const handleClick = () => {
    const oauthLink = getOauthLink();
    window.location = oauthLink;
  };

  return (
    <LoginButtonComponent onClick={handleClick} type="button">
      Login with Github
    </LoginButtonComponent>
  );
}

export default LoginButton;
