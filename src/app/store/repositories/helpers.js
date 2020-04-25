import get from 'lodash/get';
import pick from 'lodash/pick';

import { LIST_ITEMS_PER_PAGE } from 'app/config';

export const trimRepositoryFields = (response) => {
  // Pick only values we care about as to reduce the
  // size of total items saved to the store.
  const targetFields = [
    'id',
    'name',
    'full_name',
    'private',
    'owner',
    'html_url',
    'description',
    'created_at',
    'watchers_count',
    'language',
    'forks_count',
    'open_issues_count',
    'watchers_count',
  ];
  const { items: repositoriesList, ...others } = response;
  const items = repositoriesList.map((repository) => {
    return pick(repository, targetFields);
  });
  return { ...others, items };
};

export const setPaginationData = (response, page) => {
  const totalItemsCount = response.total_count || 0;
  return {
    totalItemsCount,
    totalNumPages: Math.ceil(totalItemsCount / LIST_ITEMS_PER_PAGE),
    items: response.items,
    currentPage: page,
  };
};

export const getErrorMessage = (apiError) => {
  return (
    get(apiError, 'response.data.message') ||
    get(apiError, 'message') ||
    'An error occurred'
  );
};
