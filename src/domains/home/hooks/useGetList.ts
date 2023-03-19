import { useState, useEffect } from 'react';
import { ListItemData } from '../models';

const useGetList = () => {
  // TODO: API call
  const [result, setResult] = useState<{
    isLoading: boolean;
    data: ListItemData[];
  }>({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    const items = localStorage.getItem('kapplepay-items');

    setResult({
      isLoading: false,
      data: (items ? JSON.parse(items) : []) as ListItemData[],
    });
  }, []);

  return result;
};

export default useGetList;
