import get from 'lodash/get';
import pick from 'lodash/pick';

export const trimRepositoryFields = (repository) => {
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
    'readme',
  ];
  return pick(repository, targetFields);
};

export const trimRepositoriesFields = (repositories) => {
  return repositories.map(trimRepositoryFields);
};

export const setPaginationData = (response, page) => {
  const totalItemsCount = response.total_count || 0;
  return {
    totalItemsCount,
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
