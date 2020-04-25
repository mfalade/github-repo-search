import qs from 'qs';

export const getSearchValue = (repository) => {
  return qs.stringify(
    {
      name: repository.full_name.toLowerCase(),
    },
    { encode: false },
  );
};
