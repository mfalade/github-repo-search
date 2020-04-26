import qs from 'qs';
import moment from 'moment-timezone';

export const getRepoUrlFromQuery = (location) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  return query.name;
};

export const getRelativeCreationTime = (time, timeZone) => {
  return moment(time).tz(timeZone).fromNow();
};
