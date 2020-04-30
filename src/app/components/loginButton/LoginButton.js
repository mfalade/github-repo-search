import React from 'react';

import Button from 'app/components/button';

import { getOauthLink } from './helpers';

function LoginButton() {
  const handleClick = () => {
    const oauthLink = getOauthLink();
    window.location = oauthLink;
  };

  return (
    <Button onClick={handleClick} type="button">
      Login with Github
    </Button>
  );
}

export default LoginButton;
