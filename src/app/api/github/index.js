import axios from 'axios';

import { GITHUB_API_URL, LIST_ITEMS_PER_PAGE } from 'app/config';

export const fetchRepositoriesByName = async ({ repositoryName, page }) => {
  const resource = `${GITHUB_API_URL}/search/repositories`;
  const params = {
    params: { q: repositoryName, page, per_page: LIST_ITEMS_PER_PAGE },
  };
  try {
    const response = await axios.get(resource, params);
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
