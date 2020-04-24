import pick from 'lodash/pick';

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
  const { items: repositoriesList, total_count: totalItemsCount } = response;
  const items = repositoriesList.map((repository) => {
    return pick(repository, targetFields);
  });
  return { items, totalItemsCount };
};
