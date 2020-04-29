import qs from 'qs';
import lowerCase from 'lodash/lowerCase';
import get from 'lodash/get';
import truncate from 'lodash/truncate';

import theme from 'app/theme';

export const getSearchValue = (repository) => {
  return qs.stringify(
    {
      name: get(repository, 'full_name', '').toLowerCase(),
    },
    { encode: false },
  );
};

export const getBackgroundColor = (language) => {
  const { languageColorMap } = theme;
  const lang = lowerCase(language);
  return languageColorMap[lang] || languageColorMap['javascript'];
};

export const truncateDescription = (description) => {
  return truncate(description, { length: 200 });
};
