import { GITHUB, LIST_ITEMS_PER_PAGE } from 'app/config';

import createGithubClient from './client';

const githubClient = createGithubClient();

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
  // Creating an axios insance that doesnt use Authorization headers to fetch readme because
  // feching readme with the user's access token results in a CORS issue for some reason.
  const readmeClient = createGithubClient({ useAuthorizationHeaders: false });
  try {
    const preferredReadmeResource = `${GITHUB.API_URL}/repos/${repositoryName}/readme`;
    const preferredReadme = await readmeClient.get(preferredReadmeResource);
    const data = preferredReadme.data || {};
    const readme = await readmeClient.get(data.download_url);
    return readme.data;
  } catch (error) {
    throw error;
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

export const fetchUserData = async () => {
  const userResource = `${GITHUB.API_URL}/user`;
  try {
    const response = await githubClient.get(userResource);
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
