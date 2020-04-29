import axios from 'axios';

import { GITHUB, APP, LIST_ITEMS_PER_PAGE } from 'app/config';

import githubClient from './client';

export const getRepositories = async ({ repositoryName, page }) => {
  const resource = `${GITHUB.API_URL}/search/repositories`;
  const params = {
    params: { q: repositoryName, page, per_page: LIST_ITEMS_PER_PAGE },
  };
  try {
    const response = await githubClient.get(resource, params);
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};

export const getReadme = async (repositoryName) => {
  try {
    const preferredReadmeResource = `${GITHUB.API_URL}/repos/${repositoryName}/readme`;
    const preferredReadme = await githubClient.get(preferredReadmeResource);
    const data = preferredReadme.data || {};
    const readme = await githubClient.get(data.download_url);
    return readme.data;
  } catch {
    return '';
  }
};

export const getRepository = async (repositoryName) => {
  const repoResource = `${GITHUB.API_URL}/repos/${repositoryName}`;
  try {
    const repo = await githubClient.get(repoResource);
    return repo.data;
  } catch (requestError) {
    throw requestError;
  }
};

export const authenticateUserByCode = async (authenticationCode) => {
  const resource = `${APP.PROXY_SERVER_URL}/authenticate/${authenticationCode}`;
  try {
    const response = await axios.get(resource);
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
