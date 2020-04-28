import { useCallback, useState, useEffect } from 'react';

import { getTimezone } from 'app/api/google';

export default function useTimeZone() {
  const storedTimeZone = localStorage.getItem('TIME_ZONE');
  const [userTimeZone, setUserTimeZone] = useState(storedTimeZone);
  const navigator = window.navigator;

  const successHandler = async ({ coords }) => {
    const tz = await getTimezone(coords);
    const timeZone = tz.timeZoneId;
    if (timeZone) {
      localStorage.setItem('TIME_ZONE', timeZone);
      setUserTimeZone(timeZone);
    }
  };

  const errorHandler = () => {
    // Do nothing when user rejects location prompt
  };

  const getUserTimeZone = useCallback(() => {
    if (!userTimeZone && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  }, [navigator, userTimeZone]);

  useEffect(() => {
    getUserTimeZone();
  }, [getUserTimeZone]);

  return userTimeZone;
}
