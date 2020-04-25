import qs from 'qs';

export const getRepoUrlFromQuery = (location) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  return query.name;
};
