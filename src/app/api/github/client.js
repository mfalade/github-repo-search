import axios from 'axios';

import { GITHUB } from 'app/config';
import { getAccessToken } from 'app/lib/auth';

const createGithubClient = () => {
  return axios.create({
    baseURL: GITHUB.API_URL,
    headers: {
      Authorization: {
        toString() {
          const accessToken = getAccessToken();
          return accessToken ? `token ${accessToken}` : null;
        },
      },
    },
  });
};

export default createGithubClient();
