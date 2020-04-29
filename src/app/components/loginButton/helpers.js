import qs from 'qs';

import { APP, GITHUB } from 'app/config';

export const getOauthLink = () => {
  const query = {
    scope: 'repo',
    client_id: APP.GITHUB_CLIENT_ID,
    redirect_url: `${APP.DOMAIN}/oauth`,
    state: APP.GITHUB_SECRET_KEY,
  };

  return `${GITHUB.OAUTH_AUTHORIZATION_URL}?${qs.stringify(query, {
    encode: false,
  })}`;
};
