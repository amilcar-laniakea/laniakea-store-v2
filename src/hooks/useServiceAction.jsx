import { useEffect, useState, useRef, useMemo } from "react";

import ServiceAction from "@utils/services";

const useServiceAction = ({ collectionName, queryParams }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(loading);

  const memoizedQueryParams = useMemo(
    () => JSON.stringify(queryParams),
    [queryParams]
  );

  useEffect(() => {
    const fetchData = async () => {
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
      } else {
        setError(response.error);
      }
      setLoading(false);
      loadingRef.current = false;
    };
    fetchData();
  }, [collectionName, memoizedQueryParams]);

  return { data, error, loading };
};

export default useServiceAction;
