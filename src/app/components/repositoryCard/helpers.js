import qs from 'qs';
import lowerCase from 'lodash/lowerCase';
import truncate from 'lodash/truncate';

import { LANGUAGE_COLOR_MAP } from './constants';

export const getSearchValue = (repository) => {
  return qs.stringify(
    {
      name: repository.full_name.toLowerCase(),
    },
    { encode: false },
  );
};

export const getBackgroundColor = (language) => {
  const lang = lowerCase(language);
  console.log(lang);
  return LANGUAGE_COLOR_MAP[lang] || LANGUAGE_COLOR_MAP['javascript'];
};

export const truncateDescription = (description) => {
  return truncate(description, { length: 200 });
};
