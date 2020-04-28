import { APP, GITHUB } from 'app/config';

export const getOauthLink = () => {
  const oauthUrl = `${GITHUB.OAUTH_AUTHORIZATION_URL}`;
  const clientId = APP.GITHUB_CLIENT_ID;
  const redirectUri = `${APP.DOMAIN}/oauth`;
  return `${oauthUrl}?client_id=${clientId}&redirect_url=${redirectUri}`;
};
