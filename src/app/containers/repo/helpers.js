import moment from 'moment-timezone';

export const getRelativeCreationTime = (time, timeZone) => {
  return moment(time).tz(timeZone).fromNow();
};
