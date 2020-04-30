import axios from 'axios';

import { GITHUB } from 'app/config';
import { getAccessToken } from 'app/lib/auth';

const createGithubClient = (config = {}) => {
  const { useAuthorizationHeaders = true } = config;
  if (useAuthorizationHeaders) {
    return axios.create({
      baseURL: GITHUB.API_URL,
      headers: {
        Authorization: {
          toString() {
            const accessToken = getAccessToken();
            return accessToken ? `token ${accessToken}` : '';
          },
        },
      },
    });
  }

  return axios.create(GITHUB.API_URL);
};

export default createGithubClient;
