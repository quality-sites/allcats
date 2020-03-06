import { useEffect, useState } from "react";
import { mockFetch } from './temp/server';

export const useFetch = endpoint => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
        setLoading(true);
        try {
          const res = await mockFetch();
          setData(res.body);
          setLoading(false);
        } catch (e) {
          setError(e);
          setLoading(false);
        }
    })();
  }, []);

  return { data, error, loading};
};
