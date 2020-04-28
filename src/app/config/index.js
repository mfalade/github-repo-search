export const SEARCH_DEBOUNCE_INTERVAL = 500;
export const LIST_ITEMS_PER_PAGE = 50;

export const GOOGLE = {
  TIMEZONE_API_URL: 'https://maps.googleapis.com/maps/api/timezone/json',
};

export const GITHUB = {
  API_URL: 'https://api.github.com',
  OAUTH_AUTHORIZATION_URL: 'https://github.com/login/oauth/authorize',
  OAUTH_TOKEN_URL: 'https://github.com/login/oauth/access_token  ',
};

export const APP = {
  GITHUB_CLIENT_ID: process.env.REACT_APP_GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
  GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  DOMAIN: process.env.REACT_APP_DOMAIN,
  PROXY_SERVER_URL: process.env.REACT_APP_PROXY_SERVER_URL,
};
