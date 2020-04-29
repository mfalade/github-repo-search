import moment from 'moment-timezone';

export const getRelativeCreationTime = (time, timeZone) => {
  if (timeZone) {
    return moment(time).tz(timeZone).fromNow();
  }
  return moment(time).fromNow();
};
