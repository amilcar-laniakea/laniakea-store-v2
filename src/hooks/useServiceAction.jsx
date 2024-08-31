import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import ServiceAction from "@utils/services";

const useServiceAction = ({
  collectionName,
  queryParams,
  autoFetch = true,
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);

  const memoizedQueryParams = useMemo(
    () => JSON.stringify(queryParams),
    [queryParams]
  );

  const fetchData = useCallback(async () => {
    return new Promise((resolve) => {
      (async () => {
        if (!loadingRef.current) setLoading(true);

        let serviceParams = { collectionName };

        if (memoizedQueryParams) {
          serviceParams = {
            ...serviceParams,
            queryParams: JSON.parse(memoizedQueryParams),
          };
        }

        const response = await ServiceAction(serviceParams);

        if (response.status === "success") {
          setData(response.data);
          resolve(response.data);
        } else {
          setError(response.error);
          resolve(null);
        }
        setLoading(false);
        loadingRef.current = false;
      })();
    });
  }, [collectionName, memoizedQueryParams]);

  useEffect(() => {
    if (autoFetch) fetchData();
  }, [fetchData, autoFetch]);

  return { data, error, loading, fetchData };
};

export default useServiceAction;
