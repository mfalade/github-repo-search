import axios from 'axios';

import { GITHUB_API_URL } from 'config';

export const fetchRepositories = async (repositoryName) => {
  const normalizedValue = repositoryName.trim();
  if (!normalizedValue) {
    return;
  }

  const resource = `${GITHUB_API_URL}/search/repositories`;
  const params = { params: { q: repositoryName } };
  try {
    const response = await axios.get(resource, params);
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
