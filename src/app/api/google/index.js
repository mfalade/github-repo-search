import axios from 'axios';

import { GOOGLE } from 'app/config';

export const getTimezone = async ({ latitude, longitude }) => {
  const requestTimeStamp = Math.floor(new Date().getTime() / 1000);
  const params = {
    location: `${latitude},${longitude}`,
    key: GOOGLE.API_KEY,
    timestamp: requestTimeStamp,
  };
  try {
    const response = await axios.get(GOOGLE.TIMEZONE_API_URL, { params });
    return response.data;
  } catch (requestError) {
    throw requestError;
  }
};
