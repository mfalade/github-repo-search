import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

export default function useQueryParams() {
  const [hasParsedQueryParams, setHasParsedQueryParams] = useState(false);
  const [queryParams, setQueryParams] = useState({});
  const location = useLocation();

  useEffect(() => {
    const q = qs.parse(location.search, { ignoreQueryPrefix: true });
    setQueryParams(q);
    setHasParsedQueryParams(true);
  }, [location]);

  return { queryParams, hasParsedQueryParams };
}
