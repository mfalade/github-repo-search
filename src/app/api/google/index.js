import axios from 'axios';

import { GOOGLE_TIMEZONE_API_URL, GOOGLE_API_KEY } from 'app/config';

export const getTimezone = async ({ latitude, longitude }) => {
  const requestTimeStamp = Math.floor(new Date().getTime() / 1000);
  const params = {
    location: `${latitude},${longitude}`,
    key: GOOGLE_API_KEY,
    timestamp: requestTimeStamp,
  };
  try {
    const response = await axios.get(GOOGLE_TIMEZONE_API_URL, { params });
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
