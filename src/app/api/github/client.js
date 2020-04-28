import axios from 'axios';

import { GITHUB } from 'app/config';
import { getAuthToken } from 'app/lib/auth';

export const createGithubClient = () => {
  const authToken = getAuthToken();
  const commonHeaders = {};

  if (authToken) {
    commonHeaders['Authorization'] = `token ${authToken}`;
  }
  return axios.create({
    baseURL: GITHUB.API_URL,
    headers: { common: commonHeaders },
  });
};

const githubClient = createGithubClient();

export const refreshGithubClientToken = () => {
  const authToken = getAuthToken();
  if (authToken) {
    githubClient.headers.common.Authorization = `token ${authToken}`;
  }
};

export default githubClient;
