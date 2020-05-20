export const SEARCH_DEBOUNCE_INTERVAL = 500;
export const LIST_ITEMS_PER_PAGE = 50;

export const GOOGLE = {
  API_KEY: process.env.GR_SEARCH_GOOGLE_API_KEY,
  TIMEZONE_API_URL: process.env.GR_SEARCH_GOOGLE_API_URL,
};

export const GITHUB = {
  API_URL: process.env.GR_SEARCH_GITHUB_API_URL,
  CONTENT_URL: process.env.GR_SEARCH_GITHUB_CONTENT_URL,
  OAUTH_AUTHORIZATION_URL: process.env.GR_SEARCH_OAUTH_AUTHORIZATION_URL,
  GR_SEARCH_OAUTH_TOKEN_URL: process.env.OAUTH_TOKEN_URL,
};

export const APP = {
  GITHUB_CLIENT_ID: process.env.GR_SEARCH_GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GR_SEARCH_GITHUB_CLIENT_SECRET,
  GITHUB_SECRET_KEY: process.env.GR_SEARCH_GITHUB_SECRET_KEY,
  GOOGLE_API_KEY: process.env.GR_SEARCH_GOOGLE_API_KEY,
  DOMAIN: process.env.GR_SEARCH_DOMAIN,
  PROXY_SERVER_URL: process.env.GR_SEARCH_PROXY_SERVER_URL,
};
