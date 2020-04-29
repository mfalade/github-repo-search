export const getDuration = (requestStart, requestEnd) => {
  let duration = 0;
  if (requestEnd && requestStart) {
    duration = requestEnd - requestStart;
  }

  if (duration < 1000) {
    return `${duration} milliseconds`;
  }

  return `${duration / 1000} seconds`;
};
